import { Logo } from './Navbar.jsx';
import { footerGroups } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="bg-soft px-6 py-20">
      <div className="mx-auto max-w-[1024px]">
        <div className="flex items-center justify-between border-b border-border pb-12">
          <Logo dark />
          <div className="flex items-center gap-5 text-xs font-semibold text-muted">
            <span>in</span>
            <span>X</span>
            <span className="grid size-4 place-items-center rounded-full border border-muted text-[9px]">G</span>
          </div>
        </div>
        <div className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-5">
          {Object.entries(footerGroups).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-wide text-muted">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-medium text-ink transition hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-border pt-10 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-ink">
            <span className="size-1.5 rounded-full bg-brand" />
            All systems normal
          </a>
          <p>© 2026 Mintlify, Inc.</p>
          <div className="flex gap-3">
            <span className="size-2 rounded-full bg-ink" />
            <span className="size-2 rounded-full border border-ink" />
            <span className="size-2 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </footer>
  );
}
