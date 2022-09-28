import React from 'react'
import './Contact.css'
import SendButton from '../Components/Buttons/SendButton'

function Contact() {
    return (
        <>
            <div class="ContactContainer">
                <div class="ContactInfo">
                    <h1>
                        Contacteer ons
                    </h1>
                    <h3>
                        Vul volgend formulier in om ons te contacteren. Wij beantwoorden al je vragen zo snel mogelijk.
                        Of bel naar +32 478 20 67 28
                        Offerte aanvragen
                    </h3>
                </div>
                <div class="InputContainer">
                    <div class="Names">
                        <label class="custom-field padding">
                            <input type="text" placeholder=" "/>
                            <span class="placeholder">Voornaam</span>
                        </label>
                        <label class="custom-field">
                            <input type="text" placeholder=" "/>
                            <span class="placeholder">Achternaam</span>
                        </label>
                    </div>
                    <label class="custom-field">
                        <input type="text" class="email" placeholder=" "/>
                        <span class="placeholder">Email</span>
                    </label>
                    <label class="custom-field">
                        <textarea placeholder=" " rows="10" style={{resize: "none"}}/>
                        <span class="placeholder">Bericht</span>
                    </label>
                    <SendButton/>
                </div>
            </div>
            <p>
                <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5145527434697!2d4.626053315974147!3d51.06205085098742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e296d26424cf%3A0xf241d24022291c0c!2sLierbaan%20163%2C%202580%20Putte!5e0!3m2!1sen!2sbe!4v1664405888844!5m2!1sen!2sbe"></iframe>
            </p>
        </>
    )
}

export default Contact
