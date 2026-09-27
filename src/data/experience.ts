export interface ExperienceEntry {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  current?: boolean;
  /** Short product context shown under the title. */
  summary: string;
  /** Headline results, rendered as highlighted chips. */
  highlights: string[];
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'BlackNGreen',
    title: 'Senior Software Engineer',
    start: 'Jun 2024',
    end: 'Present',
    location: 'Gurgaon',
    current: true,
    summary: 'TryEva & Agent Foundry — multi-tenant AI agent-builder platforms',
    highlights: ['~30% faster page loads', '20+ node live flow graphs'],
    bullets: [
      'Built the frontend for agent creation and execution workflows on TryEva and Agent Foundry in React 19, reducing page load times by about 30%.',
      'Implemented real-time build progress tracking with Server-Sent Events, including retry handling and conflict resolution.',
      'Built conversation-flow visualization with @xyflow/react and dagre, supporting 20+ nodes with live updates during WebRTC voice calls.',
      'Built real-time chat and voice testing with Socket.IO and WebRTC, a streaming LLM chat UI on Azure OpenAI, and REST API integrations.',
    ],
    tags: ['React 19', 'SSE', '@xyflow/react', 'dagre', 'Socket.IO', 'WebRTC', 'Azure OpenAI', 'REST APIs'],
  },
  {
    company: 'SirionLabs',
    title: 'Software Engineer',
    start: 'May 2021',
    end: 'Jun 2024',
    location: 'Gurgaon',
    summary: 'AkiroLabs SaaS platform',
    highlights: ['+25% avg. session duration', '40% faster report generation'],
    bullets: [
      'Developed key features for the AkiroLabs SaaS platform using React.',
      'Integrated ChatGPT/OpenAI-powered capabilities that increased average session duration by 25%.',
      'Migrated legacy AngularJS modules to React, reducing technical debt.',
      'Built interactive analytics dashboards and PDF export, reducing report generation time by 40%.',
    ],
    tags: ['React', 'OpenAI', 'AngularJS → React', 'Analytics dashboards', 'PDF export'],
  },
];
