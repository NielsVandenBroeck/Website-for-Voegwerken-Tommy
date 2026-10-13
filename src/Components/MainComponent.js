import React, { useState } from 'react'

import Navbar from './NavBar'
import Sidebar from './SideBar'
import Footer from './Footer'
import ToTopButton from './ToTopButton'

import Home from '../Pages/Home'
import Diensten from '../Pages/Diensten'
import Projecten from '../Pages/Projecten'
import Contact from '../Pages/Contact'

function Main() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <title>Voegwerken Tommy</title>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <main>
                <Home />
                <Diensten />
                <Projecten />
                <Contact />
            </main>
            <ToTopButton />
            <Footer />
        </React.Fragment>
    )
}

export default Main
