import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-50 px-4 py-3.5 transition duration-300 sm:px-6 sm:py-4 ${scrolled || open ? 'is-scrolled text-ink' : 'text-white'}`}>
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between">
        <Logo scrolled={scrolled || open} />
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
        <button
          className="grid size-10 place-items-center rounded-full lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </nav>
      <div className={`mobile-menu lg:hidden ${open ? 'is-open' : ''}`}>
        <div className="mx-auto flex max-w-[1080px] flex-col px-4 py-5 sm:px-6 sm:py-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="border-b border-border py-3.5 text-[17px] font-semibold sm:py-4 sm:text-lg" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <div className="mt-6 grid gap-3">
            <a href="#" className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold" onClick={() => setOpen(false)}>
              Contact sales
            </a>
            <a href="#" className="keep-white rounded-full bg-white px-5 py-3 text-center text-sm font-semibold" style={{ color: '#050506' }} onClick={() => setOpen(false)}>
              Start for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Logo };
