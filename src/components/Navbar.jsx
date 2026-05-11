import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assets, footerGroups, navLinks } from '../data/siteData.js';
import ThemeSwitch from './shared/ThemeSwitch.jsx';

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
      <div className={`mobile-menu mobile-footer-sheet lg:hidden ${open ? 'is-open' : ''}`}>
        <div className="mx-auto flex max-w-[1080px] flex-col border-t border-border/80 px-4 py-7 sm:px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-9">
            {Object.entries(footerGroups).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-muted">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[15px] font-semibold text-ink transition hover:text-brand" onClick={() => setOpen(false)}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-6">
            <a href="#" className="text-xs font-medium text-muted" onClick={() => setOpen(false)}>
              © 2026 Mintlify, Inc.
            </a>
            <ThemeSwitch compact />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Logo };
