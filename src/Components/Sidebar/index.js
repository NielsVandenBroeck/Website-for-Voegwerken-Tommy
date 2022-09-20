import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                    <SidebarLink to="gevelrenovatie">Gevelrenovatie</SidebarLink>
                    <SidebarLink to="voegwerken">Voegwerken</SidebarLink>
                    <SidebarLink to="about">Over ons</SidebarLink>
                    <SidebarLink to="fotos">Foto's</SidebarLink>
                    <SidebarLink to="contact">Contacteer ons</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
