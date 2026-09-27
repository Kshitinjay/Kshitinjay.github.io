import { Moon, Sun } from 'lucide-react';

const THEME_COLORS = { dark: '#0A0F1E', light: '#FAFAF7' } as const;

/**
 * Both icons are always rendered and CSS picks one from <html data-theme>,
 * so the pre-rendered markup never mismatches the client's saved theme.
 */
const ThemeToggle = () => {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute('content', THEME_COLORS[next]));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-btn h-10 w-10"
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
    >
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="block dark:hidden" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
