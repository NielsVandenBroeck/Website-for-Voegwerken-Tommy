import React, {useState} from 'react'

import Navbar from './NavBar'
import Sidebar from './SideBar'
import Footer from './Footer'

import Home from '../Pages/Home'
import GevelRenovatie from '../Pages/GevelRenovatie'
import Voegwerken from '../Pages/Voegwerken'
import About from '../Pages/About'
import Projecten from '../Pages/Projecten'
import Contact from '../Pages/Contact'
import Error from '../Pages/ErrorPage'
import ScrollToTop from './ScrollToTop'


import {Routes, Route, Redirect} from 'react-router-dom'


function Main(){

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <React.Fragment>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/gevelrenovatie' element={<GevelRenovatie/>}/>
                <Route path='/voegwerken' element={<Voegwerken/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projecten' element={<Projecten/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>

    )
}

export default Main