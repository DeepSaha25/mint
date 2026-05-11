import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection.jsx';
import { assets, enterpriseLogos } from '../data/siteData.js';

export default function Enterprise() {
  return (
    <section className="bg-soft px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <AnimatedSection className="mx-auto max-w-[1024px]">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-brand">Enterprise-reinvention</p>
            <h3 className="mt-5 max-w-[640px] text-[32px] font-semibold leading-[1.1] text-ink sm:text-[40px]">Bring intelligence to enterprise knowledge</h3>
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
        <div className="mt-14 grid gap-10 sm:mt-20 sm:gap-12 md:grid-cols-2">
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
        <a href="#" className="enterprise-story group relative mt-14 flex min-h-[480px] overflow-hidden rounded-2xl bg-ink p-5 text-white sm:mt-16 sm:min-h-[420px] sm:p-6 md:mt-20 md:p-12">
          <img src={assets.anthropic} alt="Anthropic background" className="absolute inset-0 h-full w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/20 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/20 sm:to-transparent" />
          <div className="relative z-10 flex w-full flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-white/70">Customer story</p>
              <h3 className="mt-5 max-w-[450px] text-[22px] font-semibold leading-tight sm:text-2xl">See how Anthropic accelerates AI development with Mintlify</h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Read story <ArrowRight size={15} />
              </span>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[34px] font-semibold leading-none sm:text-[42px]">2M+</p>
                <p className="mt-2 text-xs text-white/70">Monthly active developers</p>
              </div>
              <div>
                <p className="text-[34px] font-semibold leading-none sm:text-[42px]">3+</p>
                <p className="mt-2 max-w-[230px] text-xs text-white/70">Products serviced: Claude API, MCP, and Claude Code</p>
              </div>
            </div>
          </div>
        </a>
        <div className="mx-auto mt-8 flex max-w-[850px] flex-wrap items-center justify-center gap-x-8 gap-y-5 text-sm font-bold text-muted sm:gap-x-14">
          {enterpriseLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
