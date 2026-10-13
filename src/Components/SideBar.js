import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { ReactComponent as Logo } from '../Icons/logo.svg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Over ons', href: '#about' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Projecten', href: '#projecten' },
];

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      id="sidebar"
      className={`fixed left-0 top-0 z-[999] flex h-full w-full flex-col items-center justify-center bg-primary-900 transition-all duration-300 ease-in-out ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={toggle}
    >
      <div
        className="absolute right-6 top-6 cursor-pointer text-3xl text-white transition-colors hover:text-accent-400"
        onClick={toggle}
      >
        <FaTimes />
      </div>

      <div className="mb-12 flex items-center gap-2.5">
        <div className="h-[40px] w-[40px] text-white">
          <Logo />
        </div>
        <span className="text-xl font-bold text-white">Voegwerken Tommy</span>
      </div>

      <div className="flex flex-col items-center gap-7">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="text-2xl font-semibold tracking-wide text-white/90 transition-colors hover:text-accent-400"
            href={link.href}
            onClick={toggle}
          >
            {link.label}
          </a>
        ))}
        <a
          className="mt-4 rounded-full bg-accent-500 px-8 py-3.5 text-xl font-bold text-white transition-all duration-300 hover:bg-accent-600"
          href="#contact"
          onClick={toggle}
        >
          Offerte aanvragen
        </a>
      </div>
    </div>
  )
}

export default Sidebar
