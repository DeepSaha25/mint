import { ArrowRight, BookOpen, BadgeDollarSign } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection.jsx';
import ButtonLink from './shared/ButtonLink.jsx';

export default function CTA() {
  return (
    <AnimatedSection className="bg-white px-6 pb-64 pt-8 text-center">
      <div className="mx-auto max-w-[560px]">
        <h3 className="text-[40px] font-semibold leading-[1.05] text-ink">Make documentation your winning advantage</h3>
        <p className="mx-auto mt-5 max-w-[430px] text-sm leading-6 text-muted">Join the leaders of tomorrow to future proof your documentation today.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink>Get started for free</ButtonLink>
          <ButtonLink variant="light" className="border border-border">Get a demo</ButtonLink>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-[760px] gap-14 md:grid-cols-2">
        <a href="#" className="group text-center">
          <span className="mx-auto grid size-11 place-items-center rounded-xl border border-border bg-white text-brand shadow-sm">
            <BadgeDollarSign size={20} />
          </span>
          <h4 className="mt-7 text-lg font-semibold text-ink">Pricing on your terms</h4>
          <p className="mt-2 text-sm text-muted">Pick the plan that works best for you</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Pricing details <ArrowRight size={13} />
          </span>
        </a>
        <a href="#" className="group text-center">
          <span className="mx-auto grid size-11 place-items-center rounded-xl border border-border bg-white text-brand shadow-sm">
            <BookOpen size={20} />
          </span>
          <h4 className="mt-7 text-lg font-semibold text-ink">Start building</h4>
          <p className="mt-2 text-sm text-muted">Deploy your documentation in minutes</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Quickstart <ArrowRight size={13} />
          </span>
        </a>
      </div>
    </AnimatedSection>
  );
}
