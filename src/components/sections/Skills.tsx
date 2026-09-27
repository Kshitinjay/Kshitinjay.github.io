import { Monitor, Server, ShieldCheck, Sparkles, Wrench, type LucideIcon } from 'lucide-react';
import { skills, type SkillIcon } from '../../data/skills';
import Section from '../ui/Section';

const ICONS: Record<SkillIcon, { Icon: LucideIcon; tone: string }> = {
  frontend: { Icon: Monitor, tone: 'bg-accent/10 text-accent' },
  backend: { Icon: Server, tone: 'bg-accent-2/10 text-accent-2' },
  ai: { Icon: Sparkles, tone: 'bg-accent/10 text-accent' },
  quality: { Icon: ShieldCheck, tone: 'bg-accent-2/10 text-accent-2' },
  tools: { Icon: Wrench, tone: 'bg-accent/10 text-accent' },
};

const Skills = () => (
  <Section
    id="skills"
    alt
    eyebrow="Skills"
    title={
      <>
        The toolkit behind <span className="text-gradient">the work.</span>
      </>
    }
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, i) => {
        const { Icon, tone } = ICONS[group.icon];
        return (
          <div
            key={group.title}
            className={`reveal flex ${group.wide ? 'sm:col-span-2' : ''}`}
            style={{ transitionDelay: `${0.05 * i}s` }}
          >
            <article className="card card-hover w-full p-6">
              <div className="flex items-center gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tone}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <p className="text-sm text-muted">{group.blurb}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-bg/50 px-3 py-1.5 text-sm font-medium text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        );
      })}
    </div>
  </Section>
);

export default Skills;
