import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { ReactComponent as Logo } from '../Icons/logo.svg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Over ons', href: '#about' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Projecten', href: '#projecten' },
];

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 80);

      const sections = ['home', 'about', 'diensten', 'projecten', 'contact'];
      const offset = window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-400 ${
      scrolled
        ? 'bg-primary-900 shadow-lg'
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="flex cursor-pointer items-center gap-2.5 no-underline">
          <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center text-white">
            <Logo />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Voegwerken Tommy
          </span>
        </a>

        {/* Mobile Hamburger */}
        <div
          className="block cursor-pointer text-xl text-white lg:hidden"
          onClick={toggle}
        >
          <FaBars />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-3 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
              activeSection === 'contact'
                ? 'bg-accent-600 shadow-accent-600/30'
                : 'bg-accent-500 shadow-accent-500/20 hover:bg-accent-600'
            }`}
          >
            Offerte aanvragen
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
