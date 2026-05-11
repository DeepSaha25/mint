import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="relative min-h-[820px] overflow-hidden pt-[96px] text-white sm:min-h-[920px] md:min-h-[1208px] md:pt-[96px]">
      <div
        className="hero-bg absolute inset-x-0 top-[-94px] h-[760px] bg-cover bg-center sm:h-[900px] md:h-[1142px]"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent via-white/90 to-white sm:h-[320px] md:h-[360px]" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#" className="mb-10 flex max-w-full items-center gap-3 rounded-full bg-black/15 py-1 pl-1 pr-3 text-[13px] font-semibold backdrop-blur-md sm:text-[15px] md:mb-12">
          <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white shadow-sm">New</span>
          <span className="truncate">Workflows for self-updating knowledge management</span>
          <ArrowRight size={16} className="hidden shrink-0 sm:block" />
        </a>
        <h1 className="max-w-[720px] text-[42px] font-semibold leading-[1.02] tracking-normal sm:text-[56px] md:text-[72px] md:leading-[0.98]">
          The Intelligent Knowledge Platform
        </h1>
        <p className="mt-7 max-w-[620px] text-[18px] font-medium leading-[1.45] md:text-xl">
          Helping teams create and maintain world-class documentation built for both humans and AI
        </p>
        <form className="mt-8 flex h-11 w-full max-w-[360px] items-center rounded-full border border-white/25 bg-white/15 p-1 shadow-sm backdrop-blur-xl">
          <input
            aria-label="Email address"
            placeholder="Email address"
            className="min-w-0 flex-1 bg-transparent px-3 text-[15px] font-semibold text-white outline-none placeholder:text-white/55"
          />
          <button className="keep-white h-[34px] shrink-0 rounded-full bg-white px-4 text-[15px] font-semibold shadow-sm" style={{ color: '#050506' }}>
            Start now
          </button>
        </form>
      </motion.div>
      <div className="hero-shot relative z-10 mx-auto mt-16 aspect-[1080/657] w-[min(1080px,calc(100vw-32px))] max-w-[1080px] sm:mt-20 sm:w-[min(1080px,calc(100vw-64px))] md:mt-[98px] lg:w-[min(1080px,calc(100vw-220px))]">
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
