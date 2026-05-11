import { Check, Copy, FileText, Sparkles, Zap } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection.jsx';

function MiniBrowser() {
  return (
    <div className="mini-browser relative mx-auto mt-16 h-[230px] max-w-[410px]">
      <div className="absolute left-3 top-4 h-[130px] w-[230px] origin-bottom rotate-[-8deg] rounded-[14px] border border-border bg-white p-3 shadow-sm">
        <div className="h-3.5 w-24 rounded bg-soft" />
        <div className="mt-5 space-y-2">
          <div className="h-2.5 w-44 rounded bg-soft" />
          <div className="h-2.5 w-36 rounded bg-soft" />
          <div className="h-2.5 w-28 rounded bg-soft" />
        </div>
      </div>
      <div className="absolute right-9 top-11 h-[116px] w-[266px] rotate-[6deg] rounded-[14px] bg-brand p-3 shadow-lg shadow-emerald-900/10">
        <div className="flex gap-1.5">
          <div className="h-3.5 w-16 rounded bg-white/50" />
          <div className="h-3.5 w-4 rounded bg-white/50" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/20" />
          <div className="h-10 rounded-lg bg-white/20" />
          <div className="h-10 rounded-lg bg-white/20" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[111px] w-[304px] -translate-x-1/2 rounded-[14px] border border-border bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-36 rounded bg-soft" />
          <span className="rounded-full border border-border px-2 py-1 text-[10px] font-bold uppercase text-muted">Copy page</span>
        </div>
        <div className="mt-3 h-[30px] rounded-lg bg-soft" />
      </div>
      <span className="absolute left-1/2 top-[118px] grid size-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-white">
        <Copy size={16} />
      </span>
    </div>
  );
}

function AgentFlow() {
  const icons = [Check, FileText, Sparkles, Zap];
  return (
    <div className="agent-flow mt-20 flex items-center justify-center">
      {icons.map((Icon, index) => (
        <div key={index} className="flex items-center">
          <span className={`grid size-16 place-items-center rounded-full ${index === 3 ? 'bg-white' : 'bg-black/5'}`}>
            <span className={`grid size-[53px] place-items-center rounded-full ${index === 3 ? 'border-2 border-brand/30 bg-white text-brand' : 'bg-brand text-white'}`}>
              <Icon size={20} />
            </span>
          </span>
          {index < icons.length - 1 && <span className="h-px w-8 bg-border" />}
        </div>
      ))}
    </div>
  );
}

function AssistantMock() {
  return (
    <div className="assistant-mock relative mx-auto mt-16 h-[265px] max-w-[690px] overflow-hidden">
      <div className="absolute left-0 top-20 hidden h-[150px] w-[230px] rounded-xl border border-border bg-white p-4 opacity-50 md:block">
        <div className="mb-4 h-3 w-24 rounded bg-soft" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 rounded bg-soft" />
          <div className="h-8 rounded bg-soft" />
          <div className="h-8 rounded bg-soft" />
        </div>
      </div>
      <div className="absolute left-1/2 top-9 z-10 h-[240px] w-[270px] -translate-x-1/2 rounded-2xl border border-border bg-white p-4 shadow-sm">
        <div className="mb-12 h-3 w-24 rounded bg-soft" />
        <div className="space-y-3">
          <div className="h-9 rounded-lg bg-soft" />
          <div className="ml-auto h-9 w-36 rounded-lg bg-soft" />
          <div className="flex h-10 items-center rounded-full border border-border px-3 text-xs text-muted">
            Ask anything...
            <span className="ml-auto size-2 rounded-full bg-brand" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-20 hidden h-[150px] w-[230px] rounded-xl border border-border bg-white p-4 opacity-50 md:block">
        <div className="mb-3 h-3 w-24 rounded bg-soft" />
        <div className="space-y-2">
          <div className="h-6 rounded bg-soft" />
          <div className="h-6 rounded bg-soft" />
          <div className="h-6 rounded bg-soft" />
        </div>
      </div>
    </div>
  );
}

export default function Intelligence() {
  return (
    <AnimatedSection className="mx-auto max-w-[1024px] bg-white px-6 pb-36 md:pb-64">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[40px] font-semibold leading-[1.1] text-ink">Built for the intelligence age</h2>
        <p className="mt-4 text-sm leading-6 text-muted">
          Integrate AI into every part of your docs lifecycle. Woven into how your knowledge is written, maintained, and understood by both users and LLMs.
        </p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <article className="min-h-[430px] rounded-2xl border border-border p-7 md:min-h-[520px] md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand">LLMs.txt & MCP</p>
          <h3 className="mt-4 text-2xl font-semibold text-ink">Built for both people and AI</h3>
          <p className="mt-3 max-w-[390px] text-sm leading-6 text-muted">
            Ensure your product shows up in the AI workflows users already rely on. We support llms.txt, MCP, and whatever comes next.
          </p>
          <MiniBrowser />
        </article>
        <article className="min-h-[430px] rounded-2xl border border-border p-7 md:min-h-[520px] md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand">Agent</p>
          <h3 className="mt-4 text-2xl font-semibold text-ink">Self-updating knowledge management</h3>
          <p className="mt-3 max-w-[390px] text-sm leading-6 text-muted">
            Draft, edit, and maintain content with a context-aware agent. Move faster and more consistently without the documentation debt.
          </p>
          <AgentFlow />
        </article>
      </div>
      <article className="mt-5 min-h-[500px] rounded-2xl border border-border px-6 py-10 text-center md:min-h-[580px] md:px-8 md:py-12">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand">Assistant</p>
        <h4 className="mt-4 text-2xl font-semibold text-ink">Intelligent assistance for your users</h4>
        <p className="mx-auto mt-3 max-w-[440px] text-sm leading-6 text-muted">
          Turn every documentation visit into a guided conversation. Your AI assistant understands context and delivers what users need.
        </p>
        <AssistantMock />
      </article>
    </AnimatedSection>
  );
}
