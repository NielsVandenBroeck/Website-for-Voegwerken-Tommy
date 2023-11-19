import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom' 
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({isOpen, toggle}) => {
    return (
        isOpen && (<div class="SidebarContainer" onClick={toggle}>
            <FaTimes class="Icon" onClick={toggle} style={{color:"#fff"}}/>
            <div class="SidebarMenu">
                    <Link class="SidebarLink" to="diensten" onClick={toggle}>Diensten</Link>
                    <Link class="SidebarLink" to="about" onClick={toggle}>Over ons</Link>
                    <Link class="SidebarLink" to="projecten" onClick={toggle}>Projecten</Link>
                    <Link class="SidebarLink" to="contact" onClick={toggle}>Contacteer ons</Link>
            </div>
        </div>)
    )
}

export default Sidebar
