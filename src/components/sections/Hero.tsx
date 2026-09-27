import { useRef } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import RuntimePanel from '../RuntimePanel';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative -mt-16 overflow-hidden pt-16">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      <div className="wrap relative pb-16 pt-12 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-fg">
              <span className="live-dot" aria-hidden="true" />
              {profile.status}
              <span className="text-muted" aria-hidden="true">
                ·
              </span>
              <span className="text-muted">{profile.location}</span>
            </p>

            {/* Not wrapped in .reveal: the name is the LCP element and must paint immediately. */}
            <h1
              id="hero-title"
              className="mt-6 text-[clamp(2.75rem,11vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
            >
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </h1>

            <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-display text-lg font-semibold text-fg sm:text-xl">
              {profile.role.map((part, i) => (
                <span key={part} className="inline-flex items-center gap-2.5">
                  {i > 0 && (
                    <span className="text-accent" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {part}
                </span>
              ))}
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.pitch}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <ArrowRight aria-hidden="true" />
              </a>
              <a href={profile.resumeUrl} download className="btn btn-secondary">
                <Download aria-hidden="true" />
                Download Résumé
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub profile (opens in a new tab)"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn profile (opens in a new tab)"
                >
                  <LinkedInIcon />
                </a>
                <a href={`mailto:${profile.email}`} className="icon-btn" aria-label={`Email ${profile.email}`}>
                  <Mail aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <RuntimePanel />
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:mt-20">
          {profile.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card reveal flex flex-col-reverse gap-1 px-4 py-5 sm:px-6"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="text-gradient font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
