import React from 'react'
import { FaBars } from 'react-icons/fa'
import { ReactComponent as Logo } from '../Icons/logo.svg';
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
        <nav className="sticky top-0 z-50 flex h-[10vh] w-full items-center bg-white">
            {/* Added h-full here so the bottom border sits exactly at the bottom edge */}
            <div className="flex h-full w-full items-center justify-between border-b-2 border-[#2e0747] px-6 lg:pl-6 lg:pr-[100px]">

                {/* Logo Section */}
                <Link className="flex cursor-pointer items-center no-underline" to='/home'>
                    <div className="h-[60px] w-[60px] text-[#2e0747] pl-1"><Logo /></div>
                    {/* Added leading-tight and a <br/> to stack the text perfectly */}
                    <h1 className="ml-3 w-[200px] text-xl font-bold leading-tight text-[#2e0747] md:text-2xl">
                        Voegwerken <br /> Tommy
                    </h1>
                </Link>

                {/* Mobile Hamburger Icon */}
                <div className="block cursor-pointer text-2xl text-[#2e0747] lg:hidden" onClick={toggle}>
                    <FaBars />
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center lg:flex">
                    <Link className="border-r-[3px] border-[#2e0747] px-4 font-bold text-[#2e0747] transition-colors hover:text-[#9a5dbf]" to="diensten">Diensten</Link>
                    <Link className="border-r-[3px] border-[#2e0747] px-4 font-bold text-[#2e0747] transition-colors hover:text-[#9a5dbf]" to="about">Over ons</Link>
                    <Link className="px-4 font-bold text-[#2e0747] transition-colors hover:text-[#9a5dbf]" to="projecten">Projecten</Link>

                    <div className="ml-4 rounded-lg bg-[#9a5dbf] p-1.5 transition-colors hover:bg-[#643382]">
                        <Link className="flex font-bold text-white no-underline px-4" to="contact">Contacteer ons</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar