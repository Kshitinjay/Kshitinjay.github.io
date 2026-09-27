import { Fragment, type CSSProperties } from 'react';

const STAGES = [
  { label: 'LISTEN', detail: 'Voice in · WebRTC' },
  { label: 'REASON', detail: 'LLM · Azure OpenAI' },
  { label: 'STREAM', detail: 'Tokens · SSE' },
  { label: 'SPEAK', detail: 'Voice out · WebRTC' },
];

/**
 * The `agent · runtime` panel — an animated LISTEN → REASON → STREAM → SPEAK
 * pipeline. Horizontal on small screens, vertical in the hero's side column.
 * Pure CSS animation (index.css: .pnode / .pedge), frozen under reduced motion.
 */
const RuntimePanel = () => (
  <figure
    className="card overflow-hidden shadow-2xl shadow-black/20"
    aria-label="Animated agent pipeline: listen, reason, stream, speak"
  >
    <div className="flex items-center justify-between border-b border-line px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-line" />
          <i className="h-2.5 w-2.5 rounded-full bg-line" />
          <i className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="font-mono text-xs text-muted">agent · runtime</span>
      </div>
      <span className="flex items-center gap-2 font-mono text-xs text-accent-2">
        <span className="live-dot !bg-accent-2 after:!bg-accent-2" aria-hidden="true" />
        streaming
      </span>
    </div>

    <ol className="flex items-center p-3 sm:p-6 lg:flex-col lg:items-stretch">
      {STAGES.map((stage, i) => (
        <Fragment key={stage.label}>
          {i > 0 && (
            <li
              aria-hidden="true"
              className="pedge mx-0.5 h-0.5 min-w-2 flex-1 rounded-full sm:mx-2 lg:mx-auto lg:my-1 lg:ml-9 lg:h-7 lg:w-0.5 lg:flex-none"
              style={{ '--i': i - 1 } as CSSProperties}
            />
          )}
          <li
            className="pnode flex shrink-0 flex-col items-center gap-1 rounded-xl border border-line bg-bg/60 px-2 py-2 sm:px-4 sm:py-3 lg:flex-row lg:gap-4"
            style={{ '--i': i } as CSSProperties}
          >
            <span className="font-mono text-[0.625rem] text-accent sm:text-xs">0{i + 1}</span>
            <span className="flex flex-col items-center lg:items-start">
              <span className="font-mono text-[0.6875rem] font-medium tracking-wider text-fg sm:text-sm">
                {stage.label}
              </span>
              <span className="hidden text-xs text-muted lg:block">{stage.detail}</span>
            </span>
          </li>
        </Fragment>
      ))}
    </ol>

    <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line px-4 py-3 font-mono text-xs text-muted">
      <span className="text-accent-2">›</span>
      <span>React 19 · SSE · WebRTC · @xyflow/react</span>
    </figcaption>
  </figure>
);

export default RuntimePanel;
