import type { ProjectArt as ArtKind } from '../../data/projects';

/**
 * Decorative CSS/SVG illustrations for project cards (no screenshots).
 * Purely presentational — hidden from assistive tech by the caller.
 */

const Bar = ({ w, tone = 'bg-fg/15' }: { w: string; tone?: string }) => (
  <span className={`block h-1.5 rounded-full ${tone}`} style={{ width: w }} />
);

const KanbanArt = () => {
  const columns = [
    { name: 'To do', dot: 'bg-muted', cards: [['70%', '45%'], ['55%', '80%']] },
    { name: 'In progress', dot: 'bg-accent-2', cards: [['80%', '50%']] },
    { name: 'Done', dot: 'bg-emerald-400', cards: [['60%', '40%'], ['75%', '55%']] },
  ];
  return (
    <div className="relative grid h-full grid-cols-3 content-center items-start gap-2.5 sm:gap-3">
      {columns.map((col, ci) => (
        <div key={col.name} className="flex flex-col gap-2 rounded-xl border border-line/80 bg-bg/50 p-2 sm:p-2.5">
          <div className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted sm:text-[0.6875rem]">
            <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
            {col.name}
          </div>
          {col.cards.map(([a, b], i) => (
            <div key={i} className="space-y-1.5 rounded-lg border border-line bg-surface p-2">
              <Bar w={a} />
              <Bar w={b} tone="bg-fg/10" />
              <div className="flex items-center justify-between pt-1">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent/70 to-accent-2/70" />
                <span className="h-1.5 w-5 rounded-full bg-accent/40" />
              </div>
            </div>
          ))}
          {ci === 1 && (
            // The card "being dragged".
            <div className="relative z-10 -mx-1 rotate-[-4deg] space-y-1.5 rounded-lg border border-accent/60 bg-surface p-2 shadow-xl shadow-accent/20 transition-transform duration-500 group-hover:rotate-[2deg] group-hover:translate-x-2">
              <Bar w="75%" tone="bg-accent/50" />
              <Bar w="50%" tone="bg-fg/10" />
              <div className="flex items-center justify-between pt-1">
                <span className="h-3 w-3 rounded-full bg-accent-2/70" />
                <span className="h-1.5 w-5 rounded-full bg-accent-2/40" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const WeddingArt = () => {
  const events = ['Haldi', 'Mehndi', 'Sangeet', 'Wedding', 'Vidai', 'Reception'];
  const roles = ['Super Admin', 'Admin', 'Organizer', 'Vendor', 'Guest'];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="rounded-xl border border-line/80 bg-bg/50 p-3">
        <div className="mb-2.5 flex items-center justify-between font-mono text-[0.625rem] text-muted sm:text-[0.6875rem]">
          <span>Events</span>
          <span className="h-1.5 w-10 rounded-full bg-fg/10" />
        </div>
        <ol className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
          {events.map((e, i) => (
            <li
              key={e}
              className={`flex flex-col items-center gap-1 rounded-lg border px-1 py-2 font-mono text-[0.5625rem] sm:text-[0.625rem] ${
                e === 'Wedding' ? 'border-accent/60 bg-accent/15 text-accent' : 'border-line bg-surface text-muted'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${i < 3 ? 'bg-accent-2' : e === 'Wedding' ? 'bg-accent' : 'bg-line'}`} />
              {e}
            </li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr] gap-3">
        <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.625rem] text-muted">RSVP</span>
            <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 font-mono text-[0.5625rem] text-emerald-700 dark:text-emerald-300">
              attending
            </span>
          </div>
          {['85%', '65%', '75%'].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`grid h-3.5 w-3.5 place-items-center rounded-[4px] ${i === 1 ? 'border border-line' : 'bg-accent'}`}>
                {i !== 1 && <span className="h-1 w-1.5 -rotate-45 border-b-2 border-l-2 border-on-accent" />}
              </span>
              <span className="block h-1.5 rounded-full bg-fg/15" style={{ width: w }} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap content-center gap-1.5 rounded-xl border border-line/80 bg-bg/50 p-3">
          {roles.map((r, i) => (
            <span
              key={r}
              className={`rounded-md border px-1.5 py-0.5 font-mono text-[0.5625rem] ${
                i === 0 ? 'border-accent-2/60 bg-accent-2/15 text-accent-2' : 'border-line bg-surface text-muted'
              }`}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PipelineArt = () => {
  const stages = ['Applied', 'Screen', 'Interview', 'Final', 'Offer'];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center gap-2 rounded-lg border border-line bg-bg/50 px-3 py-2">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <Bar w="40%" />
      </div>
      <div className="flex items-center">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`grid h-6 w-6 place-items-center rounded-full border-2 text-[0.5625rem] font-bold ${
                  i < 3 ? 'border-accent bg-accent/15 text-accent' : 'border-line bg-surface text-muted'
                }`}
              >
                {i + 1}
              </span>
              <span className="font-mono text-[0.5625rem] text-muted sm:text-[0.625rem]">{s}</span>
            </div>
            {i < stages.length - 1 && (
              <span className={`mb-4 h-0.5 flex-1 rounded-full ${i < 2 ? 'bg-accent/60' : 'bg-line'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DonorArt = () => (
  <div className="flex h-full items-center justify-center gap-5">
    <svg viewBox="0 0 64 80" className="h-24 w-auto drop-shadow-[0_10px_20px_rgb(var(--accent)/0.35)]">
      <defs>
        <linearGradient id="drop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--accent) / 0.65)" />
        </linearGradient>
      </defs>
      <path d="M32 2C32 2 4 36 4 52a28 28 0 0 0 56 0C60 36 32 2 32 2Z" fill="url(#drop)" />
      <path d="M18 52a14 14 0 0 0 10 13" stroke="white" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
    <div className="grid grid-cols-2 gap-2">
      {['A+', 'O−', 'B+', 'AB+'].map((g, i) => (
        <span
          key={g}
          className={`grid h-10 w-12 place-items-center rounded-lg border font-display text-sm font-bold ${
            i === 1 ? 'border-accent/60 bg-accent/15 text-accent' : 'border-line bg-surface text-muted'
          }`}
        >
          {g}
        </span>
      ))}
      <span className="col-span-2 flex items-center justify-center gap-1.5 rounded-lg border border-line bg-bg/50 py-1.5 font-mono text-[0.625rem] text-muted">
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-accent-2" fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
        near you
      </span>
    </div>
  </div>
);

const ART: Record<ArtKind, () => JSX.Element> = {
  kanban: KanbanArt,
  wedding: WeddingArt,
  pipeline: PipelineArt,
  donor: DonorArt,
};

const ProjectArt = ({ kind }: { kind: ArtKind }) => {
  const Art = ART[kind];
  return <Art />;
};

export default ProjectArt;
