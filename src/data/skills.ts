/** Icon keys are mapped to lucide icons in the Skills section. */
export type SkillIcon = 'frontend' | 'backend' | 'ai' | 'quality' | 'tools';

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  blurb: string;
  items: string[];
  /** Spans two columns on wide screens. */
  wide?: boolean;
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    blurb: 'Languages, frameworks and UI libraries',
    items: [
      'React 19',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Redux Toolkit',
      'Context API',
      'Tailwind CSS',
      'Material UI',
      'Styled Components',
      'Chart.js',
      'HTML',
      'CSS',
      'SCSS',
    ],
    wide: true,
  },
  {
    title: 'Backend',
    icon: 'backend',
    blurb: 'APIs and data',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST API design'],
  },
  {
    title: 'AI & Real-time',
    icon: 'ai',
    blurb: 'Streaming, voice and live graphs',
    items: ['LLM integration (Azure OpenAI)', 'SSE streaming', 'WebRTC', 'Socket.IO', '@xyflow/react'],
  },
  {
    title: 'Testing & Quality',
    icon: 'quality',
    blurb: 'Correct, fast and accessible',
    items: [
      'Jest',
      'React Testing Library',
      'Core Web Vitals',
      'Performance optimization',
      'Accessibility',
      'Code reviews',
    ],
  },
  {
    title: 'Tools',
    icon: 'tools',
    blurb: 'How I work',
    items: ['Git', 'Agile / Scrum', 'Cursor', 'Claude'],
  },
];
