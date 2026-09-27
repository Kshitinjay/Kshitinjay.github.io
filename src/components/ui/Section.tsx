import { useRef, type ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Alternate background for page rhythm. */
  alt?: boolean;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, intro, alt, className = '', children }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${alt ? 'section-alt' : ''} ${className}`}
    >
      <div className="wrap">
        <header className="reveal mb-12 sm:mb-16">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
