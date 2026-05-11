import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden pt-[82px] text-white sm:min-h-[860px] sm:pt-[90px] md:min-h-[1120px] md:pt-[96px]">
      <div
        className="hero-bg absolute inset-x-0 top-[-90px] h-[680px] bg-cover bg-center sm:h-[850px] md:top-[-94px] md:h-[1120px]"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent via-white/90 to-white sm:h-[300px] md:h-[360px]" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-4 text-center sm:px-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#" className="mb-8 flex max-w-full items-center gap-2 rounded-full bg-black/15 py-1 pl-1 pr-3 text-[12px] font-semibold backdrop-blur-md sm:mb-10 sm:gap-3 sm:text-[15px] md:mb-12">
          <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white shadow-sm">New</span>
          <span className="truncate">Workflows for self-updating knowledge management</span>
          <ArrowRight size={16} className="hidden shrink-0 sm:block" />
        </a>
        <h1 className="max-w-[720px] text-[36px] font-semibold leading-[1.02] tracking-normal sm:text-[50px] md:text-[72px] md:leading-[0.98]">
          The Intelligent Knowledge Platform
        </h1>
        <p className="mt-6 max-w-[620px] text-[16px] font-medium leading-[1.45] sm:mt-7 sm:text-[18px] md:text-xl">
          Helping teams create and maintain world-class documentation built for both humans and AI
        </p>
        <form className="mt-8 p-1 max-w-[22.5rem] w-full rounded-full border border-border-soft backdrop-blur-[12px] bg-border-soft flex items-center gap-1.5 dark">
          <input
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
              className="px-3 h-8 outline-none w-full placeholder:text-muted text-text-main text-[15px] font-medium leading-[150%] bg-transparent"
            />
            <button
              data-slot="button"
              type="submit"
              className="inline-flex items-center outline-offset-2 h-fit focus-visible:outline-2 focus-visible:outline-brand justify-center cursor-pointer gap-1.5 whitespace-nowrap rounded-full font-medium [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-3 shrink-0 transition-[color,background-color] duration-100 shadow-button-sm bg-background-invert text-text-invert border border-background-invert hover:bg-background-invert/85 text-[15px] py-[4.5px] px-3"
            >
              Start now
            </button>
          </form>
      </motion.div>
      <div className="hero-shot relative z-10 mx-auto mt-14 aspect-[1080/657] w-[min(1080px,calc(100vw-20px))] max-w-[1080px] sm:mt-20 sm:w-[min(1080px,calc(100vw-64px))] md:mt-[98px] lg:w-[min(1080px,calc(100vw-220px))]">
        <picture>
          <source srcSet={assets.heroImageDark} media="(prefers-color-scheme: dark)" />
          <img
            src={assets.heroImage}
            alt="Hero illustration"
            width="1080"
            height="657"
            className="block h-auto w-full select-none rounded-[14px] bg-white shadow-none sm:rounded-[22px]"
          />
        </picture>
      </div>
    </section>
  );
}
