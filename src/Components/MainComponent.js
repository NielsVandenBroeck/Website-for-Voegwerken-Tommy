import React from 'react'
import NavBar from './NavBar'

import Home from '../Pages/Home'
import GevelRenovatie from '../Pages/GevelRenovatie'
import Voegwerken from '../Pages/Voegwerken'
import About from '../Pages/About'
import Fotos from '../Pages/Fotos'
import Contact from '../Pages/Contact'
import Error from '../Pages/ErrorPage'


import {Routes, Route, Redirect} from 'react-router-dom'


function Main(){
    return(
        <React.Fragment>
            <NavBar/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/gevelrenovatie' element={<GevelRenovatie/>}/>
                <Route path='/voegwerken' element={<Voegwerken/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/fotos' element={<Fotos/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>

        </React.Fragment>

    )
}

export default Main