import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets } from '../data/siteData.js';

export default function Hero() {
  return (
    <section className="relative min-h-[1210px] overflow-hidden pt-[96px] text-white md:min-h-[1208px] md:pt-[96px]">
      <div
        className="hero-bg absolute inset-x-0 top-[-94px] h-[1142px] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[360px] bg-gradient-to-b from-transparent via-white/90 to-white" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="#" className="mb-14 flex max-w-full items-center gap-3 rounded-full bg-black/15 py-1 pl-1 pr-3 text-[15px] font-semibold backdrop-blur-md md:mb-12">
          <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white shadow-sm">New</span>
          <span className="truncate">Workflows for self-updating knowledge management</span>
          <ArrowRight size={16} className="hidden sm:block" />
        </a>
        <h1 className="max-w-[720px] text-[48px] font-semibold leading-[0.98] tracking-normal md:text-[72px]">
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
          <button className="keep-white h-[34px] rounded-full bg-white px-4 text-[15px] font-semibold shadow-sm" style={{ color: '#050506' }}>
            Start now
          </button>
        </form>
      </motion.div>
      <div className="hero-shot relative z-10 mx-auto mt-[98px] max-w-[1074px] px-6 md:px-0">
        <picture>
          <source srcSet={assets.heroImageDark} media="(prefers-color-scheme: dark)" />
          <img src={assets.heroImage} alt="Hero illustration" className="block w-full select-none rounded-[22px] bg-white shadow-none" />
        </picture>
      </div>
    </section>
  );
}
