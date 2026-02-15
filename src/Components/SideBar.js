import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        // We removed the "isOpen &&" and instead use Tailwind to slide it in/out smoothly
        <div
            className={`fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-[#2e0747] transition-all duration-300 ease-in-out ${
                isOpen ? 'visible top-0 opacity-100' : 'invisible -top-full opacity-0'
            }`}
            onClick={toggle}
        >
            <div
                className="absolute right-6 top-6 cursor-pointer text-4xl text-white transition-colors hover:text-gray-300"
                onClick={toggle}
            >
                <FaTimes />
            </div>

            <div className="flex flex-col items-center gap-10">
                <Link className="text-3xl font-semibold tracking-wide text-white transition-colors hover:text-[#9a5dbf]" to="diensten" onClick={toggle}>Diensten</Link>
                <Link className="text-3xl font-semibold tracking-wide text-white transition-colors hover:text-[#9a5dbf]" to="about" onClick={toggle}>Over ons</Link>
                <Link className="text-3xl font-semibold tracking-wide text-white transition-colors hover:text-[#9a5dbf]" to="projecten" onClick={toggle}>Projecten</Link>
                <Link className="text-3xl font-semibold tracking-wide text-white transition-colors hover:text-[#9a5dbf]" to="contact" onClick={toggle}>Contacteer ons</Link>
            </div>
        </div>
    )
}

export default Sidebar