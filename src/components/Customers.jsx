import { ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from './shared/AnimatedSection.jsx';
import { customerCards } from '../data/siteData.js';

export default function Customers() {
  return (
    <AnimatedSection className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1024px] text-center">
        <h2 className="text-[32px] font-semibold leading-tight text-ink sm:text-[40px]">Loved by your favorite companies</h2>
        <p className="mx-auto mt-4 max-w-[520px] text-sm leading-6 text-muted">
          From frontier AI companies to consumer brands, leaders across industries scale knowledge with Mintlify.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1180px] gap-10 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
        {customerCards.map((card) => (
          <article key={card.name} className="min-w-0">
            <div className="overflow-hidden rounded-lg bg-[#d7d7d7]">
              <img src={card.image} alt={card.name} className="h-[222px] w-full object-cover grayscale" />
            </div>
            <p className="mt-5 text-[13px] font-medium leading-5 text-ink md:min-h-[56px]">{card.quote}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-ink">
              Read story <ArrowRight size={13} />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-12 hidden items-center justify-center gap-3">
        <button className="grid size-7 place-items-center rounded-full bg-ink text-white" aria-label="Previous slide">
          <ArrowLeft size={13} />
        </button>
        <button className="grid size-7 place-items-center rounded-full bg-ink text-white" aria-label="Next slide">
          <ArrowRight size={13} />
        </button>
      </div>
    </AnimatedSection>
  );
}
