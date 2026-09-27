import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => (
  <footer className="border-t border-line/70 bg-bg-alt">
    <div className="wrap flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
      <p>
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {profile.name} ·{' '}
        {profile.location}
      </p>
      <a href="#top" className="inline-flex items-center gap-1.5 font-medium hover:text-accent">
        Back to top
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
