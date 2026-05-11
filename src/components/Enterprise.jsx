import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection.jsx';
import { assets, enterpriseLogos } from '../data/siteData.js';

export default function Enterprise() {
  return (
    <section className="min-h-[1634px] bg-soft px-6 py-24 md:min-h-0">
      <AnimatedSection className="mx-auto max-w-[1024px]">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-brand">Enterprise-reinvention</p>
            <h3 className="mt-5 max-w-[640px] text-[40px] font-semibold leading-[1.1] text-ink">Bring intelligence to enterprise knowledge</h3>
            <p className="mt-5 text-sm leading-6 text-muted">Modernize without the rebuild with enterprise-grade professional service & security.</p>
          </div>
          <div className="md:text-right">
            <a
              href="#"
              className="enterprise-cta inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold transition"
            >
              Explore for enterprise
            </a>
          </div>
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <Sparkles className="mb-8 text-brand" size={22} />
            <h4 className="text-xl font-semibold text-ink">Build with partnership</h4>
            <p className="mt-4 text-sm leading-6 text-muted">
              Direct, white-glove access to our documentation experts. Dedicated migration support and guidance tailored to your setup, and elevated support SLAs.
            </p>
          </div>
          <div>
            <ShieldCheck className="mb-8 text-brand" size={22} />
            <h4 className="text-xl font-semibold text-ink">Compliance and access control</h4>
            <p className="mt-4 text-sm leading-6 text-muted">
              Compliant with SOC 2, and in the process for ISO/27001 and GDPR compliance to meet your internal and external data requirements.
            </p>
          </div>
        </div>
        <a href="#" className="group relative mt-20 block overflow-hidden rounded-2xl bg-ink text-white">
          <img src={assets.anthropic} alt="Anthropic background" className="h-full min-h-[360px] w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute left-8 top-8 md:left-12 md:top-12">
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">Customer story</p>
            <h3 className="mt-5 max-w-[450px] text-2xl font-semibold leading-tight">See how Anthropic accelerates AI development with Mintlify</h3>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              Read story <ArrowRight size={15} />
            </span>
          </div>
          <div className="absolute bottom-10 left-8 grid gap-8 md:left-12 md:grid-cols-2">
            <div>
              <p className="text-[42px] font-semibold leading-none">2M+</p>
              <p className="mt-2 text-xs text-white/70">Monthly active developers</p>
            </div>
            <div>
              <p className="text-[42px] font-semibold leading-none">3+</p>
              <p className="mt-2 max-w-[230px] text-xs text-white/70">Products serviced: Claude API, MCP, and Claude Code</p>
            </div>
          </div>
        </a>
        <div className="mx-auto mt-8 flex max-w-[850px] flex-wrap items-center justify-center gap-x-14 gap-y-5 text-sm font-bold text-muted">
          {enterpriseLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
