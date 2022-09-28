import React from 'react'
import {Nav, NavbarContainer, NavLogoText, NavLogoImage, MobileIcon, NavMenu, NavLinks, LogoContainer, ContactUsContainer, ContactUsLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { ReactComponent as Logo } from '../../Icons/logo.svg';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <LogoContainer to='/home'>
                        <NavLogoImage><Logo/></NavLogoImage>
                        <NavLogoText>Voegwerken Tommy</NavLogoText>
                    </LogoContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars style={{color:"#2e0747"}}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavLinks to="gevelrenovatie" spy={true} exact='true'>Gevelrenovatie</NavLinks>
                        <NavLinks to="voegwerken">Voegwerken</NavLinks>
                        <NavLinks to="about">Over ons</NavLinks>
                        <NavLinks to="fotos">Foto's</NavLinks>
                        <ContactUsContainer>
                            <ContactUsLink to="contact">Contacteer ons</ContactUsLink>
                        </ContactUsContainer>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
