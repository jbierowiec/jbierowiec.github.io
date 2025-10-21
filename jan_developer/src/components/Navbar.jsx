// src/components/Navbar.jsx
import React from "react";
import Button from "../ui/Button.jsx";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider.jsx";

const goTo = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/80 transition-colors duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left logo + name */}
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700
                       shadow-md ring-2 ring-indigo-200/70 dark:ring-white/15
                       flex items-center justify-center"
            aria-label="Jan Bierowiec logo"
          >
            <span className="text-white/95 text-[11px] font-bold tracking-widest select-none">
              JB
            </span>
          </div>

          <span
            className="text-sm font-mono uppercase tracking-widest
                       text-slate-800 dark:text-white/90"
          >
            Jan Bierowiec
          </span>
        </div>

        {/* Center nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {[
            { id: "hero", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Theme toggle — even larger */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                       border border-black/10 bg-white/80 hover:bg-white shadow-md
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15
                       transition"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? (
              // Sun icon — larger, golden glow
              <svg
                className="h-9 w-9 text-yellow-400 drop-shadow-md"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon — larger, deep contrast
              <svg
                className="h-9 w-9 text-slate-800 dark:text-slate-100 drop-shadow-md"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Hire Me button */}
          <Button
            variant="ghost"
            href="#contact"
            className="hidden md:inline-flex"
          >
            <Mail className="h-4 w-4" /> Hire Me
          </Button>

          {/* Mobile quick nav arrow */}
          <a
            href="#projects"
            className="md:hidden text-slate-700 dark:text-white/70"
          >
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
