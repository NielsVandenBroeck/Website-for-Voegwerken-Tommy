import styled from 'styled-components'
import {Link} from 'react-router-dom' 

export const Nav = styled.nav`
    background: #7880eb;
    display: flex;
    height: 90px;
    justify-content: left;
    align-items: center;
    font-size: 1.5rem;
    top: 0;
    z-index: -1;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const LogoContainer = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const NavLogoText = styled.div`
    width: 200px;
    color: #3f4595;
    font-size: 2rem;
    font-weight: bold;
`

export const NavLogoImage = styled.div`
    height: 80px;
    width: 80px;
`



export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(Link)`
    color: #b0b6ff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
       border-bottom: 3px solid #01bf71;
    }
`