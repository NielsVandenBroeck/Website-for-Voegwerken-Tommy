import React from 'react'
import './NavBar.css'
import {FaBars} from 'react-icons/fa'
import { ReactComponent as Logo } from '../Icons/logo.svg';
import {Link} from 'react-router-dom' 

const Navbar = ({toggle}) => {
    return (
            <div class="Nav">
                <div class="NavbarContainer">
                    <Link class="LogoContainer" to='/home'>
                        <div class="NavLogoImage"><Logo/></div>
                        <div class="NavLogoText">Voegwerken Tommy</div>
                    </Link>
                    <div class="MobileIcon" onClick={toggle}>
                        <FaBars style={{color:"#2e0747"}}/>
                    </div>
                    <div class="NavMenu">
                        <Link class="NavLinks" to="gevelrenovatie" spy={true} exact='true'>Gevelrenovatie</Link>
                        <Link class="NavLinks" to="voegwerken">Voegwerken</Link>
                        <Link class="NavLinks" to="about">Over ons</Link>
                        <Link class="NavLinks" to="projecten">Projecten</Link>
                        <div class="ContactUsContainer">
                            <Link class="ContactUsLink" to="contact">Contacteer ons</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default Navbar
