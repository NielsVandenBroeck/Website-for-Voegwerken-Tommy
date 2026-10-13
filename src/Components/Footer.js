import React from 'react'
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'
import { ReactComponent as FacebookLogo } from '../Icons/Facebook.svg';
import { ReactComponent as InstagramLogo } from '../Icons/Instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <h3 className="font-display mb-4 text-2xl font-bold">Voegwerken Tommy</h3>
            <p className="mb-6 leading-relaxed text-white/60">
              Specialist in voegwerken, gevelrenovatie en kleine laswerken. Gelegen te Putte, België.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tommyvandenbroeck/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all hover:scale-110 hover:bg-accent-500"
              >
                <InstagramLogo className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Gorkytje"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all hover:scale-110 hover:bg-accent-500"
              >
                <FacebookLogo className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold uppercase tracking-wider text-white/80">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <FiPhoneCall className="text-lg text-accent-400" />
                <a className="text-white/70 transition-colors hover:text-white" href="tel:+32478206728">+32 478 20 67 28</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-lg text-accent-400" />
                <a className="text-white/70 transition-colors hover:text-white" href="mailto:voegwerkentommy@gmail.com">voegwerkentommy@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-lg text-accent-400" />
                <a className="text-white/70 transition-colors hover:text-white" href="http://maps.google.com/?q=Lierbaan+163A+Putte" target="_blank" rel="noreferrer">Lierbaan 163A, 2580 Putte</a>
              </li>
              <li className="flex items-center gap-3">
                <FaRegAddressCard className="text-lg text-accent-400" />
                <span className="text-white/70">BTW BE 0784.521.746</span>
              </li>
            </ul>
          </div>

          {/* Menu Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold uppercase tracking-wider text-white/80">Navigatie</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#home" className="text-white/70 transition-colors hover:text-white">Home</a></li>
              <li><a href="#about" className="text-white/70 transition-colors hover:text-white">Over ons</a></li>
              <li><a href="#diensten" className="text-white/70 transition-colors hover:text-white">Diensten</a></li>
              <li><a href="#projecten" className="text-white/70 transition-colors hover:text-white">Projecten</a></li>
              <li><a href="#contact" className="text-white/70 transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Voegwerken Tommy. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
}

export default Footer
