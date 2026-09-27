// Vite fingerprints the file (e.g. /assets/…-a1b2c3.pdf), so replacing the PDF
// always ships the new version instead of a cached copy.
import resumePdf from '../assets/Kshitinjay Resume 15Sep 5Yrs.pdf';

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const profile = {
  name: 'Kshitinjay Kumar',
  firstName: 'Kshitinjay',
  lastName: 'Kumar',
  role: ['Senior Software Engineer', 'Frontend & Full-stack', 'AI Products'],
  pitch:
    'I build the real-time interfaces of AI products — streaming LLM chat, WebRTC voice, and agent-flow editors — with React, TypeScript and Node.js.',
  status: 'Open to work',
  location: 'Gurugram, India',

  email: 'kshitinjay20@gmail.com',
  phone: '+91 86873 16641',
  phoneHref: 'tel:+918687316641',
  linkedin: 'https://linkedin.com/in/kshitinjaykumar',
  linkedinLabel: 'linkedin.com/in/kshitinjaykumar',
  github: 'https://github.com/Kshitinjay',
  githubLabel: 'github.com/Kshitinjay',
  /** To update: replace the PDF in src/assets and change the import above. */
  resumeUrl: resumePdf,
  /** Name the file is saved as when downloaded. */
  resumeFileName: 'Kshitinjay-Kumar-Resume.pdf',

  stats: [
    { value: '5+', label: 'years experience' },
    { value: '30%', label: 'faster page loads' },
    { value: '40%', label: 'faster report generation' },
    { value: '25%', label: 'longer AI session duration' },
  ] satisfies Stat[],

  about: [
    "I'm a senior software engineer at BlackNGreen in Gurugram, where I build the frontend for TryEva and Agent Foundry — platforms where teams create and run AI agents. Most of my work is the real-time part: build progress streamed over Server-Sent Events, chat and voice testing over Socket.IO and WebRTC, and flow diagrams that update while a voice call is live.",
    'Before that I spent three years at SirionLabs on the AkiroLabs SaaS platform, shipping React features, adding OpenAI-powered capabilities, moving legacy AngularJS modules to React and building analytics dashboards with PDF export. I care about pages that load fast, work for everyone, and stay easy for the next engineer to change.',
  ],

  education: {
    degree: 'B.Tech in Information Technology',
    school: 'University Institute of Engineering and Technology, Kanpur',
    years: '2016 – 2020',
  },

  contactLine:
    "I'm open to senior frontend and full-stack roles on AI products. Email is the fastest way to reach me.",
};

export const nav: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
