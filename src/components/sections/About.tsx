import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { experience } from '../../data/experience';
import Section from '../ui/Section';

const current = experience[0];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title={
      <>
        Real-time interfaces, <span className="text-gradient">built to feel instant.</span>
      </>
    }
  >
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
      <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
        {profile.about.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <ul className="reveal space-y-3" style={{ transitionDelay: '.1s' }}>
        <li className="card flex gap-4 p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
            <Briefcase className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Currently</p>
            <p className="mt-1 font-semibold text-fg">
              {current.title} · {current.company}
            </p>
            <p className="text-sm text-muted">Since {current.start}</p>
          </div>
        </li>
        <li className="card flex gap-4 p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Education</p>
            <p className="mt-1 font-semibold text-fg">{profile.education.degree}</p>
            <p className="text-sm text-muted">
              {profile.education.school} · {profile.education.years}
            </p>
          </div>
        </li>
        <li className="card flex gap-4 p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Based in</p>
            <p className="mt-1 font-semibold text-fg">{profile.location}</p>
            <p className="text-sm text-muted">{profile.status}</p>
          </div>
        </li>
      </ul>
    </div>
  </Section>
);

export default About;
