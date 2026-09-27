import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUp, Cpu, Sparkles } from 'lucide-react';
import { greeting, matchIntent, suggestions, type AssistantLink } from '../../data/assistant';
import Section from '../ui/Section';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  link?: AssistantLink;
  done: boolean;
}

type Status = 'idle' | 'thinking' | 'streaming';

const THINK_MS = 450;
const TOKEN_MS = 38;
const MAX_MESSAGES = 10;

const STATUS_LABEL: Record<Status, string> = {
  idle: 'ready',
  thinking: 'reasoning…',
  streaming: 'streaming',
};

const TOPICS = ['Experience', 'AI & LLMs', 'Real-time', 'Projects', 'Skills', 'Backend', 'Education', 'Availability'];

/**
 * "Ask about me" — a local, backend-free assistant. The question is matched to
 * an intent in data/assistant.ts and the answer is streamed token by token.
 */
const AskMe = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'assistant', text: greeting, done: true },
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const nextId = useRef(1);
  const pending = useRef<{ id: number; full: string } | null>(null);
  const thinkTimer = useRef<ReturnType<typeof setTimeout>>();
  const streamTimer = useRef<ReturnType<typeof setInterval>>();
  const threadRef = useRef<HTMLDivElement>(null);

  const setText = (id: number, text: string, done: boolean) =>
    setMessages((list) => list.map((m) => (m.id === id ? { ...m, text, done } : m)));

  const stopTimers = () => {
    clearTimeout(thinkTimer.current);
    clearInterval(streamTimer.current);
  };

  useEffect(() => stopTimers, []);

  useEffect(() => {
    const el = threadRef.current;
    if (el && messages.length > 1) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const ask = (raw: string) => {
    const question = raw.trim();
    if (!question) return;

    // A new question finishes the current answer instantly.
    stopTimers();
    if (pending.current) setText(pending.current.id, pending.current.full, true);

    const intent = matchIntent(question);
    const userId = nextId.current++;
    const botId = nextId.current++;
    pending.current = { id: botId, full: intent.answer };

    setInput('');
    setMessages((list) =>
      [
        ...list,
        { id: userId, role: 'user' as const, text: question, done: true },
        { id: botId, role: 'assistant' as const, text: '', link: intent.link, done: false },
      ].slice(-MAX_MESSAGES)
    );

    const finish = () => {
      stopTimers();
      setText(botId, intent.answer, true);
      pending.current = null;
      setStatus('idle');
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    setStatus('thinking');
    thinkTimer.current = setTimeout(() => {
      const tokens = intent.answer.match(/\S+\s*/g) ?? [intent.answer];
      let i = 0;
      setStatus('streaming');
      streamTimer.current = setInterval(() => {
        i += 1;
        if (i >= tokens.length) finish();
        else setText(botId, tokens.slice(0, i).join(''), false);
      }, TOKEN_MS);
    }, THINK_MS);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const busy = status !== 'idle';

  return (
    <Section
      id="ask"
      alt
      eyebrow="Ask about me"
      title={
        <>
          Skip the scroll. <span className="text-gradient">Just ask.</span>
        </>
      }
      intro="Type a question about my experience, projects or skills and get a streamed answer — like a tiny LLM chat, built from my résumé."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="card reveal overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              ask-kshitinjay
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${busy ? 'bg-accent-2' : 'bg-emerald-400'}`}
              />
              {STATUS_LABEL[status]}
            </span>
          </div>

          <div
            ref={threadRef}
            role="log"
            aria-live="polite"
            aria-busy={busy}
            aria-label="Conversation"
            className="h-72 space-y-4 overflow-y-auto px-4 py-5 sm:h-80 sm:px-5"
          >
            {messages.map((m) =>
              m.role === 'user' ? (
                <div key={m.id} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-sm font-medium text-on-accent">
                    {m.text}
                  </p>
                </div>
              ) : (
                <div key={m.id} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-[0.625rem] font-extrabold text-on-accent"
                  >
                    KK
                  </span>
                  <div className="min-w-0 max-w-[90%] rounded-2xl rounded-tl-md border border-line bg-bg/50 px-4 py-2.5 text-sm leading-relaxed text-fg">
                    {m.text === '' && !m.done ? (
                      <span className="flex h-5 items-center gap-1">
                        <span className="sr-only">Thinking…</span>
                        <span className="typing-dot" />
                        <span className="typing-dot [animation-delay:.15s]" />
                        <span className="typing-dot [animation-delay:.3s]" />
                      </span>
                    ) : (
                      <p>
                        {m.text}
                        {!m.done && <span className="stream-cursor" aria-hidden="true" />}
                      </p>
                    )}
                    {m.done && m.link && (
                      <a
                        href={m.link.href}
                        className="mt-2 inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
                      >
                        {m.link.label} →
                      </a>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="border-t border-line p-3 sm:p-4">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <label htmlFor="ask-input" className="sr-only">
                Ask a question about Kshitinjay
              </label>
              <input
                id="ask-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. What real-time work have you done?"
                autoComplete="off"
                maxLength={200}
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-line bg-bg/60 px-4 text-sm text-fg placeholder:text-muted/80 focus:border-accent-2/70 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/60"
              />
              <button
                type="submit"
                className="btn btn-primary h-11 w-11 shrink-0 !px-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send question"
                disabled={!input.trim()}
              >
                <ArrowUp aria-hidden="true" />
              </button>
            </form>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Suggested questions">
              {suggestions.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    onClick={() => ask(s.question)}
                    className="rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="card reveal flex flex-col gap-5 p-6" style={{ transitionDelay: '.1s' }}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
              <Cpu className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold">How it works</h3>
          </div>
          <ol className="space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="font-mono text-accent">01</span>
              Runs entirely in your browser — no backend, nothing sent anywhere.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-accent">02</span>
              Matches your question to a topic from my résumé.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-accent">03</span>
              Streams the answer token by token, the way the LLM chat UIs I build do.
            </li>
          </ol>
          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Topics</h4>
            <ul className="flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default AskMe;
