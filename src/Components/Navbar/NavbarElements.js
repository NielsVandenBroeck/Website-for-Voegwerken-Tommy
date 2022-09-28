import styled from 'styled-components'
import {Link} from 'react-router-dom' 

export const Nav = styled.div`
    background: #fff;
    display: flex;
    height: 80px;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding-right: 100px;
    padding-left: 24px;
    border-bottom: 3px solid #2e0747;

    @media screen and (max-width: 1000px) {
        padding-left: 0px;
    }
`

export const LogoContainer = styled(Link)`
    width: 210px;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const NavLogoText = styled.div`
    width: 200px;
    color: #2e0747;
    font-size: 1.5rem;
    font-weight: bold;
`

export const NavLogoImage = styled.div`
    padding-left: 5px;
    height: 60px;
    width: 60px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1000px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-left: 0px;
    @media screen and (max-width: 1000px){
        display: none;
    }
`

export const NavLinks = styled(Link)`
    border-right: 3px solid #2e0747;
    color: #2e0747;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`

export const ContactUsContainer = styled.div`
    background: #2e0747;
    border-radius: 10px;
    padding: 5px;
    margin-left: -5px;
`

export const ContactUsLink = styled(Link)`
    color: #fff;
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`