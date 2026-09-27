/**
 * Local "Ask about me" knowledge base. Questions are matched against each
 * intent's keywords; the best-scoring intent's answer is streamed back.
 * Every answer uses only facts from the résumé.
 */
export interface AssistantLink {
  label: string;
  href: string;
}

export interface AssistantIntent {
  id: string;
  keywords: string[];
  answer: string;
  link?: AssistantLink;
}

export interface SuggestedQuestion {
  label: string;
  question: string;
}

const EMAIL_LINK: AssistantLink = {
  label: 'kshitinjay20@gmail.com',
  href: 'mailto:kshitinjay20@gmail.com',
};

export const greeting =
  "Hi! Ask me about my experience, AI and real-time work, projects or skills — or tap a suggestion below.";

export const intents: AssistantIntent[] = [
  {
    id: 'experience',
    keywords: [
      'experience', 'years', 'career', 'job', 'jobs', 'background', 'company', 'companies',
      'blackngreen', 'sirion', 'sirionlabs', 'employer', 'history', 'senior', 'current',
      'akirolabs', 'worked at',
    ],
    answer:
      "I have 5+ years of experience. Since Jun 2024 I've been a Senior Software Engineer at BlackNGreen in Gurgaon, building the frontend for TryEva and Agent Foundry — multi-tenant AI agent-builder platforms. Before that, from May 2021 to Jun 2024, I was a Software Engineer at SirionLabs, developing key features for the AkiroLabs SaaS platform in React.",
  },
  {
    id: 'ai',
    keywords: [
      'ai', 'llm', 'llms', 'openai', 'gpt', 'chatgpt', 'azure', 'agent', 'agents', 'genai',
      'tryeva', 'foundry', 'chat', 'chatbot', 'machine learning',
    ],
    answer:
      'At BlackNGreen I build the frontend of TryEva and Agent Foundry, AI agent-builder platforms — including a streaming LLM chat UI on Azure OpenAI and conversation-flow views that update live during WebRTC voice calls. At SirionLabs I integrated ChatGPT/OpenAI-powered capabilities that increased average session duration by 25%.',
  },
  {
    id: 'realtime',
    keywords: [
      'real-time', 'realtime', 'real time', 'sse', 'server-sent', 'server sent', 'stream',
      'streaming', 'websocket', 'websockets', 'socket', 'socket.io', 'webrtc', 'voice', 'live',
      'xyflow', 'dagre', 'flow', 'graph',
    ],
    answer:
      'Real-time is most of my current work: build progress tracking over Server-Sent Events with retry handling and conflict resolution, chat and voice testing with Socket.IO and WebRTC, a streaming LLM chat UI, and @xyflow/react + dagre flow diagrams that handle 20+ nodes with live updates during voice calls.',
  },
  {
    id: 'projects',
    keywords: [
      'project', 'projects', 'portfolio', 'built', 'build', 'side', 'kanban', 'naukri', 'blood',
      'demo', 'demos', 'app', 'apps',
    ],
    answer:
      'Three projects, all with live demos: Kanban — a team task tracker (React 19, TypeScript, Redux Toolkit, @dnd-kit, Node.js, MongoDB) with JWT admin/member roles, a drag-and-drop board and a KPI dashboard; Naukri Board — a full-stack job application tracker across 5+ interview stages; and Blood Finder — a mobile-first donor search by blood group and location.',
    link: { label: 'See the projects', href: '#projects' },
  },
  {
    id: 'skills',
    keywords: [
      'skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'react', 'typescript',
      'javascript', 'frontend', 'front-end', 'next', 'nextjs', 'next.js', 'redux', 'tailwind',
      'css', 'language', 'languages', 'framework', 'frameworks',
    ],
    answer:
      'Frontend: React 19, Next.js, TypeScript, JavaScript, Redux Toolkit, Tailwind CSS and Material UI. Backend: Node.js, Express.js, MongoDB and REST API design. AI & real-time: LLM integration (Azure OpenAI), SSE streaming, WebRTC, Socket.IO and @xyflow/react. Quality: Jest, React Testing Library, Core Web Vitals and accessibility.',
    link: { label: 'See all skills', href: '#skills' },
  },
  {
    id: 'backend',
    keywords: [
      'backend', 'back-end', 'back end', 'node', 'nodejs', 'node.js', 'express', 'mongodb',
      'mongo', 'api', 'apis', 'rest', 'database', 'full-stack', 'fullstack', 'full stack',
      'server', 'jwt', 'mern',
    ],
    answer:
      'On the backend I work with Node.js, Express.js and MongoDB, and I design REST APIs. Kanban and Naukri Board are both full-stack MERN projects — React frontends talking to Node/Express/MongoDB APIs, with JWT auth and admin/member roles in Kanban.',
  },
  {
    id: 'quality',
    keywords: [
      'performance', 'fast', 'faster', 'speed', 'load', 'optimization', 'optimisation',
      'vitals', 'lighthouse', 'accessibility', 'a11y', 'quality', 'testing', 'test', 'tests',
      'jest', 'impact', 'metrics', 'results', 'achievement', 'achievements',
    ],
    answer:
      'At BlackNGreen I reduced page load times on the agent platforms by about 30%. At SirionLabs, analytics dashboards with PDF export cut report generation time by 40%, and OpenAI-powered features increased average session duration by 25%. I test with Jest and React Testing Library and keep an eye on Core Web Vitals and accessibility.',
  },
  {
    id: 'education',
    keywords: [
      'education', 'degree', 'college', 'university', 'btech', 'b.tech', 'study', 'studied',
      'graduate', 'graduation', 'kanpur', 'uiet',
    ],
    answer:
      'I have a B.Tech in Information Technology from University Institute of Engineering and Technology, Kanpur (2016–2020).',
  },
  {
    id: 'availability',
    keywords: [
      'notice', 'available', 'availability', 'join', 'joining', 'open', 'hiring', 'hire',
      'looking', 'location', 'where', 'based', 'live in', 'roles', 'opportunity', 'start',
    ],
    answer:
      "I'm open to senior frontend and full-stack roles on AI products, and I'm based in Gurugram, India. For notice period and start dates, the quickest route is an email.",
    link: EMAIL_LINK,
  },
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'mail', 'phone', 'call', 'reach', 'linkedin', 'github', 'connect',
      'number', 'resume', 'cv',
    ],
    answer:
      'Email is fastest: kshitinjay20@gmail.com. You can also call +91 86873 16641, or find me at linkedin.com/in/kshitinjaykumar and github.com/Kshitinjay. My résumé is linked in the header.',
    link: EMAIL_LINK,
  },
];

export const fallback: AssistantIntent = {
  id: 'fallback',
  keywords: [],
  answer:
    "I don't have a specific answer for that, but here's the short version: 5+ years building React frontends, currently a Senior Software Engineer at BlackNGreen working on AI agent platforms with SSE, WebRTC and streaming LLM chat. Try asking about my experience, projects, skills or education — or email me.",
  link: EMAIL_LINK,
};

export const suggestions: SuggestedQuestion[] = [
  { label: 'Experience', question: 'What is your experience?' },
  { label: 'AI work', question: 'What AI work have you done?' },
  { label: 'Real-time', question: 'Tell me about your real-time work' },
  { label: 'Projects', question: 'What projects have you built?' },
  { label: 'Backend', question: 'Do you do backend work?' },
  { label: 'Notice period', question: 'Are you available? What is your notice period?' },
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Scores every intent by keyword hits (whole words) and returns the best one. */
export function matchIntent(question: string): AssistantIntent {
  const q = question.toLowerCase();
  let best: AssistantIntent = fallback;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (new RegExp(`(^|[^a-z0-9])${escape(kw)}($|[^a-z0-9])`).test(q)) {
        score += kw.includes(' ') ? 2 : 1;
      }
    }
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best;
}
