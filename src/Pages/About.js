import React from 'react'
import "./About.css"
import {FaCheck} from 'react-icons/fa'

function About() {
    return (
        <div class="OverOns">
            <h2 class="AboutTitle">Wie we zijn</h2>
            <div class="UnderTitle">Tommy Van den Broeck</div>
            <div class="flex">
                <div class="Checklist">
                    <div class="Checktitle">Enkele weetjes</div>
                    <div class="Checkitem">
                        <FaCheck class="Check"/>
                        <div class="checkitemtext">Voegwerken Tommy gelegen te Putte is vertrouwd in het voegen van uw nieuwbouw- en renovatieproject. </div>
                    </div>
                    <div class="Checkitem">
                        <FaCheck class="Check"/>
                        <div class="checkitemtext">Ook kleine laswerken worden aangeboden.</div>
                    </div>
                    <div class="Checkitem">
                        <FaCheck class="Check"/>
                        <div class="checkitemtext">Samen met Johan garanderen we een perfect afgewerkt project.</div>
                    </div>
                </div>
                <div class="AboutPicture"/>
            </div>

        </div>
        
    )
}

export default About
