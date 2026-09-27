import { Check, ExternalLink, Lock, Mail } from 'lucide-react';
import { projects, type Project } from '../../data/projects';
import { profile } from '../../data/profile';
import Section from '../ui/Section';
import { GitHubIcon } from '../ui/BrandIcons';
import ProjectArt from './ProjectArt';

const Links = ({ project }: { project: Project }) => {
  if (!project.liveUrl && !project.repoUrl) {
    const subject = encodeURIComponent(`${project.title} walkthrough`);
    return (
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <a href={`mailto:${profile.email}?subject=${subject}`} className="btn btn-primary btn-sm">
          <Mail aria-hidden="true" />
          Request a walkthrough
        </a>
        {project.privateNote && (
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            {project.privateNote}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          aria-label={`${project.title} live demo (opens in a new tab)`}
        >
          <ExternalLink aria-hidden="true" />
          Live Demo
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          aria-label={`${project.title} on GitHub (opens in a new tab)`}
        >
          <GitHubIcon />
          GitHub
        </a>
      )}
    </div>
  );
};

const Body = ({ project, featured }: { project: Project; featured?: boolean }) => (
  <div className="flex flex-1 flex-col p-6 sm:p-8">
    <p className="font-mono text-xs uppercase tracking-wider text-accent-2">{project.kind}</p>
    <h3 className={`mt-2 font-bold ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
      {project.title}
    </h3>
    <p className="mt-3 text-muted">{project.problem}</p>
    <ul className="mt-5 space-y-2.5">
      {project.outcomes.map((o) => (
        <li key={o} className="flex gap-3 text-[0.9375rem] text-fg">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
          </span>
          {o}
        </li>
      ))}
    </ul>
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
      {project.tags.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-7">
      <Links project={project} />
    </div>
  </div>
);

const ArtPanel = ({ project, className = '' }: { project: Project; className?: string }) => (
  <div
    aria-hidden="true"
    className={`relative overflow-hidden bg-gradient-to-br from-accent/15 via-transparent to-accent-2/15 p-5 sm:p-7 ${className}`}
  >
    <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgb(var(--fg)/0.08)_1px,transparent_1px)] [background-size:16px_16px]" />
    <div className="relative h-full">
      <ProjectArt kind={project.art} />
    </div>
  </div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I've built, <span className="text-gradient">and what I'm building now.</span>
        </>
      }
      intro="Full-stack side projects — with live demos wherever they're public."
    >
      <div className="space-y-6">
        {featured.map((project, i) => {
          // Alternate the illustration side on wide screens for rhythm.
          const flip = i % 2 === 1;
          const inProgress = !project.liveUrl;
          return (
            <div key={project.title} className="reveal">
              <article className="card card-hover group grid overflow-hidden lg:grid-cols-2">
                <div className={`flex flex-col ${flip ? 'lg:order-2' : ''}`}>
                  {project.badge && (
                    <span
                      className={`mx-6 mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold sm:mx-8 sm:mt-8 ${
                        inProgress
                          ? 'border-accent-2/40 bg-accent-2/10 text-accent-2'
                          : 'border-accent/40 bg-accent/10 text-accent'
                      }`}
                    >
                      {inProgress && <span className="live-dot !bg-accent-2 after:!bg-accent-2" aria-hidden="true" />}
                      {project.badge}
                    </span>
                  )}
                  <Body project={project} featured />
                </div>
                <ArtPanel
                  project={project}
                  className={`min-h-64 border-t border-line lg:border-t-0 ${flip ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}
                />
              </article>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <div key={project.title} className="reveal flex" style={{ transitionDelay: `${0.08 * i}s` }}>
            <article className="card card-hover group flex w-full flex-col overflow-hidden">
              <ArtPanel project={project} className="h-44 border-b border-line" />
              <Body project={project} />
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
