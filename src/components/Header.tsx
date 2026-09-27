import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { nav, profile } from '../data/profile';
import ThemeToggle from './ui/ThemeToggle';

/** Returns the id of the section currently under the header. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}

const SECTION_IDS = nav.map((n) => n.href.slice(1));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-line/70 bg-bg/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-lg font-bold">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-extrabold text-on-accent"
          >
            KK
          </span>
          <span className="transition-colors group-hover:text-accent">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex flex-col items-center rounded-lg px-3 pb-1 pt-1.5 text-sm font-medium transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`mt-1 block h-0.5 rounded-full bg-accent transition-all duration-300 ${
                        isActive ? 'w-4' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            <Download aria-hidden="true" />
            Download Résumé
          </a>
          <button
            type="button"
            className="icon-btn h-10 w-10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line/70 lg:hidden">
          <ul className="wrap flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-fg hover:bg-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                <Download aria-hidden="true" />
                Download Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
