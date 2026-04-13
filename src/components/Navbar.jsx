import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, CloseIcon } from './Icons';

const NAV_SECTIONS = [
  { id: 'product', label: 'Product' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'nutrition', label: 'Nutrition' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDark, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          OLIPOP
        </a>

        <div className="nav-links">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <div className="nav-hamburger" onClick={() => setMobileOpen(true)}>
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </button>
        {NAV_SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </>
  );
}
