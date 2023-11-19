import React, {useState} from 'react'

import Navbar from './NavBar'
import Sidebar from './SideBar'
import Footer from './Footer'

import Home from '../Pages/Home'
import Diensten from '../Pages/Diensten'
import About from '../Pages/About'
import Projecten from '../Pages/Projecten'
import Contact from '../Pages/Contact'
import Error from '../Pages/ErrorPage'
import ScrollToTop from './ScrollToTop'
import ToTopButton from './ToTopButton'


import {Routes, Route, Redirect} from 'react-router-dom'


function Main(){

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <React.Fragment>
            <title>Voegwerken Tommy</title>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/diensten' element={<Diensten/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projecten' element={<Projecten/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <ToTopButton/>
            <Footer/>
        </React.Fragment>

    )
}

export default Main