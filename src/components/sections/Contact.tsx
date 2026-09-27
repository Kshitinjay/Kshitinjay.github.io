import { useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { profile } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="contact" aria-labelledby="contact-title" className="section">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-3xl border border-line p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-accent-2/20"
          />
          <div aria-hidden="true" className="hero-grid opacity-60" />

          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-title"
              className="max-w-3xl text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Let's build something <span className="text-gradient">people love using.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted">{profile.contactLine}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.phoneHref} className="btn btn-secondary">
                <Phone aria-hidden="true" />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
