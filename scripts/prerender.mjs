// Injects the server-rendered app into dist/index.html so the full page
// content ships as static HTML (SEO, link previews, no blank first paint).
// Runs after `vite build` (client → dist/) and `vite build --ssr` (→ dist-ssr/).
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { Writable } from 'node:stream';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const appHtml = await new Promise((resolve, reject) => {
  let html = '';
  const sink = new Writable({
    write(chunk, _enc, cb) {
      html += chunk.toString();
      cb();
    },
    final(cb) {
      resolve(html);
      cb();
    },
  });
  const stream = render({
    onAllReady() {
      stream.pipe(sink);
    },
    onShellError: reject,
    onError: reject,
  });
});

const templatePath = join(dist, 'index.html');
let template = await readFile(templatePath, 'utf8');
if (!template.includes('<!--app-html-->')) {
  throw new Error('prerender: <!--app-html--> placeholder missing from dist/index.html');
}

// Preload the two variable fonts used above the fold (latin subset only).
const base = template.match(/src="([^"]*?)assets\//)?.[1] ?? '/';
const assets = await readdir(join(dist, 'assets'));
const preloads = assets
  .filter((f) => /^(bricolage-grotesque|inter)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="${base}assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

template = template
  .replace('<!--app-html-->', appHtml)
  .replace('</head>', `  ${preloads}\n  </head>`);

await writeFile(templatePath, template);
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} kB of HTML, ${preloads ? 'with' : 'without'} font preloads`);
