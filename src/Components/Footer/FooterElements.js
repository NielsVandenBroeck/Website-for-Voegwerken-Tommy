import styled from 'styled-components'
import {Link} from 'react-router-dom' 


export const Foot = styled.div`
    background: #2e0747;
    font-size: 1rem;
    z-index: 10;
    padding: 20;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display: block;
        justify-content: space-between;
    }
`

export const FooterColumn = styled.div`
    padding: 50px;

    @media screen and (max-width: 1000px) {
        padding: 20px;
    }
`

export const FooterElement = styled.div`
    display: flex;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }
`

export const Icon = styled.div`
    padding-top: 2px;
    padding-right: 5px;
    color: #000;
`

export const Text = styled.div`
    color: #fff;
    padding-bottom: 5px;
`

export const HeaderText = styled.div`
    color: #fff;
    padding-bottom: 10px;
    font-size: 30px;
    text-align: center;
`

export const FooterLink = styled(Link)`
    display: flex;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 5px;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;    
`

export const SocialIcon = styled.div`
    padding: 5px;
    height: 40px;
    width: 40px;
`