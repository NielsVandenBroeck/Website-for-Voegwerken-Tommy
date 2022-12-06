import React from 'react'
import './Footer.css'
import {FiPhoneCall, FiMail} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaRegAddressCard} from 'react-icons/fa'
import { ReactComponent as TwitterLogo} from '../Icons/Twitter.svg';
import { ReactComponent as FacebookLogo} from '../Icons/Facebook.svg';
import { ReactComponent as InstagramLogo} from '../Icons/Instagram.svg';
import { Link } from 'react-router-dom' 

const Footer = () => {
    return (
            <div class="Foot">
                <div class="FooterColumn">
                    <div class="HeaderText">Contact</div>
                    <div class="FooterElement">
                        <FiPhoneCall class="ContactIcon" style={{color:"#fff"}}/>
                        <div class="Text">+32 478 20 67 28</div>
                    </div>
                    <div class="FooterElement">
                        <FiMail class="ContactIcon" style={{color:"#fff"}}/>
                        <div class="Text">voegwerkentommy@gmail.com</div>
                    </div>
                    <div class="FooterElement">
                        <HiOutlineLocationMarker class="ContactIcon" style={{color:"#fff"}}/>
                        <div class="Text">Lierbaan 163A Putte</div>
                    </div>
                    <div class="FooterElement">
                        <FaRegAddressCard class="ContactIcon" style={{color:"#fff"}}/>
                        <div class="Text">BTW BE...</div>
                    </div>
                </div>
                <div class="FooterColumn">
                    <div class="HeaderText">Menu</div>
                    <Link class="FooterLink" to="home">Home</Link>
                    <Link class="FooterLink" to="gevelrenovatie">Gevelrenovatie</Link>
                    <Link class="FooterLink" to="voegwerken">Voegwerken</Link>
                    <Link class="FooterLink" to="projecten">Projecten</Link>
                    <Link class="FooterLink" to="contact">Contacteer ons</Link>
                </div>
                <div class="FooterColumn">
                    <div class="HeaderText">Volg ons</div>
                    <div class="Socials">
                            <a class="SocialIcon" href="https://www.instagram.com/tommyvandenbroeck/" target="_blank"><InstagramLogo/></a>
                            <a class="SocialIcon" href="" target="_blank"><TwitterLogo/></a>
                            <a class="SocialIcon" href="https://www.facebook.com/Gorkytje" target="_blank"><FacebookLogo/></a>
                    </div>
                </div>
            </div>
    )
}

export default Footer
