import { Menu } from 'lucide-react';
import { navLinks } from '../data/siteData.js';

function Logo({ dark = false }) {
  return (
    <a href="#" className={`flex items-center gap-2 font-bold tracking-tight ${dark ? 'text-ink' : 'text-white'}`}>
      <span className="relative grid size-[22px] place-items-center rounded-[7px] bg-brand">
        <span className="absolute left-1 top-1 h-3 w-2 rotate-45 rounded-full bg-teal-300/90" />
        <span className="absolute bottom-1 right-1 h-3 w-2 rotate-45 rounded-full bg-emerald-700/50" />
      </span>
      <span className="text-[26px] leading-none">mintlify</span>
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-4 text-white">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 text-[15px] font-semibold lg:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white/70">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#" className="rounded-full bg-white/5 px-4 py-2 text-[15px] font-semibold backdrop-blur transition hover:bg-white/10">
            Contact sales
          </a>
          <a href="#" className="keep-white rounded-full bg-white px-4 py-2 text-[15px] font-semibold transition hover:bg-white/90" style={{ color: '#050506' }}>
            Start for free
          </a>
        </div>
        <button className="grid size-9 place-items-center rounded-full text-white lg:hidden" aria-label="Open menu">
          <Menu size={22} strokeWidth={2} />
        </button>
      </nav>
    </header>
  );
}

export { Logo };
