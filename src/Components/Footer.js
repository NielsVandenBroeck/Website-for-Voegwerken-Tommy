import React from 'react'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaRegAddressCard } from 'react-icons/fa'
import { ReactComponent as FacebookLogo } from '../Icons/Facebook.svg';
import { ReactComponent as InstagramLogo } from '../Icons/Instagram.svg';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="z-10 flex flex-col items-center justify-center gap-10 bg-[#2e0747] py-12 text-white lg:flex-row lg:items-start lg:justify-center lg:gap-24 lg:px-20 lg:py-16">
            {/* Contact Column */}
            <div className="flex flex-col items-center lg:items-start">
                <h3 className="mb-6 text-2xl font-bold tracking-wide">Contact</h3>
                <div className="mb-3 flex items-center gap-3">
                    <FiPhoneCall className="text-xl" />
                    <a className="hover:text-gray-300" href="tel:+32478206728">+32 478 20 67 28</a>
                </div>
                <div className="mb-3 flex items-center gap-3">
                    <FiMail className="text-xl" />
                    <a className="hover:text-gray-300" href="mailto:voegwerkentommy@gmail.com">voegwerkentommy@gmail.com</a>
                </div>
                <div className="mb-3 flex items-center gap-3">
                    <HiOutlineLocationMarker className="text-xl" />
                    <a className="hover:text-gray-300" href="http://maps.google.com/?q=Lierbaan+163A+Putte" target="_blank" rel="noreferrer">Lierbaan 163A Putte</a>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegAddressCard className="text-xl" />
                    <span>BTW BE 0784.521.746</span>
                </div>
            </div>

            {/* Menu Column */}
            <div className="flex flex-col items-center lg:items-start">
                <h3 className="mb-6 text-2xl font-bold tracking-wide">Menu</h3>
                <Link className="mb-3 transition-colors hover:text-gray-300" to="home">Home</Link>
                <Link className="mb-3 transition-colors hover:text-gray-300" to="diensten">Diensten</Link>
                <Link className="mb-3 transition-colors hover:text-gray-300" to="projecten">Projecten</Link>
                <Link className="transition-colors hover:text-gray-300" to="contact">Contacteer ons</Link>
            </div>

            {/* Socials Column */}
            <div className="flex flex-col items-center lg:items-start">
                <h3 className="mb-6 text-2xl font-bold tracking-wide">Volg ons</h3>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/tommyvandenbroeck/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <InstagramLogo className="h-10 w-10" />
                    </a>
                    <a href="https://www.facebook.com/Gorkytje" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                        <FacebookLogo className="h-10 w-10" />
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer