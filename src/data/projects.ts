// TODO: replace with each project's exact repository URL (one per project below).
export const GITHUB_REPO_PLACEHOLDER = 'https://github.com/Kshitinjay';

/** Selects the CSS/SVG illustration rendered on the card. */
export type ProjectArt = 'kanban' | 'wedding' | 'pipeline' | 'donor';

export interface Project {
  title: string;
  kind: string;
  problem: string;
  outcomes: string[];
  tags: string[];
  /** Omit for projects without a public deployment. */
  liveUrl?: string;
  /** Omit for private repositories. */
  repoUrl?: string;
  art: ProjectArt;
  /** Featured projects render as full-width cards, in array order. */
  featured?: boolean;
  /** Pill above a featured card's title. */
  badge?: string;
  /** Shown instead of the link buttons when there is no public link. */
  privateNote?: string;
}

export const projects: Project[] = [
  {
    title: 'Kanban',
    kind: 'Team task tracker · Full-stack',
    problem:
      'Teams need one place to plan, assign and discuss work — with the right permissions for each person.',
    outcomes: [
      'JWT authentication with admin and member roles',
      'Drag-and-drop board on @dnd-kit, plus a KPI dashboard',
      'Ticket CRUD with threaded comments',
    ],
    tags: ['React 19', 'TypeScript', 'Redux Toolkit', '@dnd-kit', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://kanban-weld-seven.vercel.app',
    repoUrl: GITHUB_REPO_PLACEHOLDER,
    art: 'kanban',
    featured: true,
    badge: 'Featured project',
  },
  {
    title: 'Shadi Asaan',
    kind: 'Wedding planning platform · Full-stack',
    problem:
      'One workspace for a whole wedding — events, tasks, guests and RSVP, vendors and payments — where every person sees only what their role allows.',
    outcomes: [
      'Five scoped roles — Super Admin, Admin, Organizer with 16 granular permissions, Vendor and Guest',
      'Phone + PIN sign-in with bcrypt, rotating JWT refresh tokens, lockout after five wrong PINs and HMAC-derived invitation links',
      'Per-member guest RSVP, and vendor contracts whose payment tracking refuses overpayment',
    ],
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'React Hook Form', 'Zod', 'Node.js', 'Express 5', 'MongoDB', 'Vitest'],
    art: 'wedding',
    featured: true,
    badge: 'In development',
    privateNote: 'Private repository — happy to walk you through the code.',
  },
  {
    title: 'Naukri Board',
    kind: 'Job application tracker · Full-stack',
    problem: 'Keeps every job application and interview stage in one searchable tracker.',
    outcomes: [
      'CRUD across 5+ interview stages',
      'Search and filtering across applications',
      'Frontend on Vercel, API on Render',
    ],
    tags: ['React', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://frontend-flame-beta-25.vercel.app/',
    repoUrl: GITHUB_REPO_PLACEHOLDER,
    art: 'pipeline',
  },
  {
    title: 'Blood Finder',
    kind: 'Donor search · Frontend',
    problem: 'Makes finding a matching blood donor a quick search by blood group and location.',
    outcomes: [
      'Donor search by blood group and location',
      'Responsive, mobile-first layout',
      'Data served through REST APIs',
    ],
    tags: ['React', 'REST APIs', 'Bootstrap'],
    liveUrl: 'https://online-blood-finder-major-project.vercel.app/',
    repoUrl: GITHUB_REPO_PLACEHOLDER,
    art: 'donor',
  },
];
