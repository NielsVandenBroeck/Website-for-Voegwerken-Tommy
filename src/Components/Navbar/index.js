import React from 'react'
import {Nav, NavbarContainer, NavLogoText, NavLogoImage, MobileIcon, NavMenu, NavItem, NavLinks, LogoContainer} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { ReactComponent as Logo } from './logo.svg';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <LogoContainer to='/home'>
                        <NavLogoImage><Logo/></NavLogoImage>
                        <NavLogoText>Voegwerken Tommy</NavLogoText>
                    </LogoContainer>

                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="gevelrenovatie">Gevelrenovatie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="voegwerken">Voegwerken</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Over ons</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="fotos">Foto's</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contacteer ons</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
