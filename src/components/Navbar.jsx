import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { assets, navLinks } from '../data/siteData.js';

function Logo({ dark = false, scrolled = false }) {
  return (
    <a href="#" className="flex items-center" aria-label="Mintlify home">
      {dark || scrolled ? (
        <span className="flex items-center gap-2 font-bold tracking-tight text-ink">
          <img src={assets.logoIcon} alt="" className="size-[20px]" />
          <span className="text-[20px] leading-none">mintlify</span>
        </span>
      ) : (
        <img src={assets.logoWordmark} alt="Mintlify" className="h-8 w-auto" />
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-50 px-6 py-4 transition duration-300 ${scrolled ? 'is-scrolled text-ink' : 'text-white'}`}>
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between">
        <Logo scrolled={scrolled} />
        <div className="hidden items-center gap-8 text-[15px] font-semibold lg:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition hover:opacity-70">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#" className="contact-link rounded-full px-4 py-2 text-[15px] font-semibold backdrop-blur transition">
            Contact sales
          </a>
          <a href="#" className="keep-white rounded-full bg-white px-4 py-2 text-[15px] font-semibold transition hover:bg-white/90" style={{ color: '#050506' }}>
            Start for free
          </a>
        </div>
        <button className="grid size-9 place-items-center rounded-full lg:hidden" aria-label="Open menu">
          <Menu size={22} strokeWidth={2} />
        </button>
      </nav>
    </header>
  );
}

export { Logo };
