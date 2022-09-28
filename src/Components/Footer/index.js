import React from 'react'
import {Foot,FooterColumn, Icon, Text, FooterElement, HeaderText, FooterLink, Socials, SocialIcon} from './FooterElements'
import {FiPhoneCall, FiMail} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaRegAddressCard} from 'react-icons/fa'
import { ReactComponent as TwitterLogo} from '../../Icons/Twitter.svg';
import { ReactComponent as FacebookLogo} from '../../Icons/Facebook.svg';
import { ReactComponent as InstagramLogo} from '../../Icons/Instagram.svg';

const Footer = () => {
    return (
        <>
            <Foot>
                <FooterColumn>
                    <HeaderText>Contact</HeaderText>
                    <FooterElement>
                        <Icon>
                            <FiPhoneCall style={{color:"#fff"}}/>
                        </Icon>
                        <Text>+32 478 20 67 28</Text>
                    </FooterElement>
                    <FooterElement>
                        <Icon>
                            <FiMail style={{color:"#fff"}}/>
                        </Icon>
                        <Text>voegwerkentommy@gmail.com</Text>
                    </FooterElement>
                    <FooterElement>
                        <Icon>
                            <HiOutlineLocationMarker style={{color:"#fff"}}/>
                        </Icon>
                        <Text>Lierbaan 163A Putte</Text>
                    </FooterElement>
                    <FooterElement>
                        <Icon>
                            <FaRegAddressCard style={{color:"#fff"}}/>
                        </Icon>
                        <Text>BTW BE...</Text>
                    </FooterElement>
                </FooterColumn>
                <FooterColumn>
                    <HeaderText>Menu</HeaderText>
                    <FooterLink to="home">Home</FooterLink>
                    <FooterLink to="gevelrenovatie">Gevelrenovatie</FooterLink>
                    <FooterLink to="voegwerken">Voegwerken</FooterLink>
                    <FooterLink to="fotos">Foto's</FooterLink>
                    <FooterLink to="contact">Contacteer ons</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <HeaderText>Volg ons</HeaderText>
                    <Socials>
                        <SocialIcon>
                            <a href="https://www.instagram.com/tommyvandenbroeck/" target="_blank"><InstagramLogo/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href="" target="_blank"><TwitterLogo/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href="https://www.facebook.com/Gorkytje" target="_blank"><FacebookLogo/></a>
                        </SocialIcon>
                    </Socials>

                </FooterColumn>
            </Foot>
        </>
    )
}

export default Footer
