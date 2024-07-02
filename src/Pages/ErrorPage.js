import React from 'react'
import "./ErrorPage.css"
import {Link} from 'react-router-dom'
function ErrorPage() {
    return (
    <div class="error-container">
        <div class="error-content">
            <h1 class="oeps">Oeps! Er is iets misgegaan.</h1>
            <div class="p">We bieden onze excuses aan voor het ongemak. Ons team werkt eraan om het probleem op te lossen.</div>
            <div class="p">Probeer het later opnieuw of neem contact op met ons ondersteuningsteam als het probleem aanhoudt.</div>
            <Link class="but" to="home">Startpagina</Link>
        </div>
    </div>

    )
}

export default ErrorPage