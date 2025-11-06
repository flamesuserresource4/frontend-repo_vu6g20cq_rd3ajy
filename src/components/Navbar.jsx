import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">GetaiCertified</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-black transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50"
            >
              <User className="h-4 w-4" /> Login
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-md px-3 py-2 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#login"
                className="rounded-md border border-slate-300 px-3 py-2 text-center"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
