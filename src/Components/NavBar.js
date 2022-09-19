import React, {Component} from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems'
import "./NavBar.css"

class NavBar extends React.Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className='NavBarItems'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h1 className="navbar-logo">Voegwerken Tommy<i class="fa fa-cloud"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-car' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar

//<div>
//    <img style={{width: 100, height: 100, borderWidth: 5}} src={logo}/>
//    <Link to='/gevelrenovatie' style={{ textDecoration: 'none' }}>Gevelrenovatie</Link>
//    <Link to='/voegwerken' style={{ textDecoration: 'none' }}>Voegwerken</Link>
//    <Link to='/about' style={{ textDecoration: 'none' }}>Over Ons</Link>
//    <Link to='/fotos' style={{ textDecoration: 'none' }}>Foto's</Link>
//    <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link> 
//    Meer:
//</div>