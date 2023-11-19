import React from 'react'
//import brick from "../Images/BrickTest1.png"
import "./ErrorPage.css"
import {Link} from 'react-router-dom'
//<img class="Image" src={brick} alt="cracked brick"></img>
function ErrorPage() {
    return (
        <div class="Container">
           
            <div class="Title">Error 404 </div>
            <div class="Subtext"> Deze webpagina werd niet gevonden. </div>
            <div class="ButtonContainer">
                <button class="Button" onclick="history.back()">Ga terug</button>
                <Link class="Button" to="home">Startpagina</Link>
            </div>
        </div>

    )
}

export default ErrorPage
