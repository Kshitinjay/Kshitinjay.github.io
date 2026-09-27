import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../../data/experience';
import Section from '../ui/Section';

const Experience = () => (
  <Section
    id="experience"
    alt
    eyebrow="Experience"
    title={
      <>
        5+ years shipping <span className="text-gradient">production React.</span>
      </>
    }
    intro="From SaaS analytics to multi-tenant AI agent platforms."
  >
    <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-accent-2/60 before:to-line sm:space-y-12 md:before:left-[11px]">
      {experience.map((job) => (
        <li key={job.company} className="reveal relative pl-8 md:pl-12">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-7 grid h-[15px] w-[15px] place-items-center rounded-full border-2 md:h-6 md:w-6 ${
              job.current ? 'border-accent bg-bg-alt' : 'border-line bg-bg-alt'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${job.current ? 'bg-accent' : 'bg-muted'}`}
            />
          </span>

          <article className="card card-hover p-5 sm:p-7">
            <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">{job.company}</h3>
                <p className="mt-1 font-semibold text-accent">{job.title}</p>
                <p className="mt-1 text-sm text-muted">{job.summary}</p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted md:flex-col md:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {job.start} – {job.end}
                  {job.current && (
                    <span className="ml-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      Current
                    </span>
                  )}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {job.location}
                </span>
              </div>
            </header>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent"
                >
                  {h}
                </li>
              ))}
            </ul>

            <ul className="mt-5 space-y-3">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                  {b}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Technologies">
              {job.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
