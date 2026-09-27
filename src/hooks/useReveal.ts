import { useEffect, type RefObject } from 'react';

/**
 * Scroll-reveal scoped to one container: every `.reveal` inside `ref` gets
 * `.in` the first time it enters the viewport. Scoped (rather than global) so
 * lazily-hydrated sections register themselves when they mount.
 * The hidden state only applies under `html.js`, and index.css disables the
 * motion entirely for prefers-reduced-motion.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}
