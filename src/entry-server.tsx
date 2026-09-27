import { StrictMode } from 'react';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App.tsx';

/**
 * Build-time render used by scripts/prerender.mjs. The caller pipes the stream
 * from `onAllReady`, so lazy sections are fully resolved in the output.
 */
export function render(options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StrictMode>
      <App />
    </StrictMode>,
    options
  );
}
