import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass dark:glass-dark shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-apple-black dark:text-apple-white no-underline"
        >
          Zengying Wang
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-sm text-apple-black/70 dark:text-apple-white/70 hover:text-apple-black dark:hover:text-apple-white transition-colors no-underline"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="text-sm text-apple-black/70 dark:text-apple-white/70 hover:text-apple-black dark:hover:text-apple-white transition-colors no-underline"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="text-sm text-apple-black/70 dark:text-apple-white/70 hover:text-apple-black dark:hover:text-apple-white transition-colors no-underline"
          >
            About
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
