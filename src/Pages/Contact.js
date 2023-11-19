import React from 'react'
import './Contact.css'
import {FiChevronDown} from "react-icons/fi";
import emailjs from '@emailjs/browser';

function Contact() {
    let ref1 = React.useRef();
    let ref2 = React.useRef();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };


    function handleOfferte(){

    }

    function handleQuestion(){
        var firstName = document.getElementById("contactFirstName").value;
        var lastName = document.getElementById("contactLastName").value;
        var email = document.getElementById("contactEmail").value;
        var message = document.getElementById("contactMessage").value;
        if(firstName === "" || lastName === "" || email === "" || message === ""){
            /*fix error message*/
            alert("Vul alle informatie in");
        }
        if(!validateEmail(email)){
            alert("Email niet geldig");
        }
        alert("Verzonden");
        /*fix sending email*/
    }

    return (
        <>
            <div class="ContactContainer" ref={ref1}>
                <div class="ContactInfo">
                    <h2>
                        Contacteer ons
                    </h2>
                    <h3>
                        Vul aanstaand formulier in of bereik ons via volgende contactmethoden:
                    </h3>
                    <a class="ContactMethod"  href="tel:+32 478 20 67 28" >+32 478 20 67 28</a>
                    <br/>
                    <a class="ContactMethod"  href="mailto:voegwerkentommy@gmail.com" >voegwerkentommy@gmail.com</a>
                </div>
                <form class="InputContainer" action="" method="POST">
                    <div class="Split">
                        <label class="custom-field padding">
                            <input type="text" placeholder=" " id="name" required/>
                            <span class="placeholder" >Voornaam</span>
                        </label>
                        <label class="custom-field">
                            <input type="text" placeholder=" " id="contactLastName" required/>
                            <span class="placeholder">Achternaam</span>
                        </label>
                    </div>
                    <label class="custom-field">
                        <input type="email" placeholder=" " id="email" required/>
                        <span class="placeholder">Email</span>
                    </label>
                    <label class="custom-field">
                        <textarea placeholder=" " rows="10" style={{resize: "none"}} id="message" type="text" required/>
                        <span class="placeholder">Bericht</span>
                    </label>
                    <button class="Button" type="submit">verzenden</button>
                </form>
            </div>
            <div class="LocationContainer">
                <div class="MapsContainer">
                <iframe class="Maps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.514152352386!2d4.625634776968574!3d51.06205824313875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b71615a9e9483%3A0x4f1a19aa5cde366d!2sVoegwerken%20Tommy!5e0!3m2!1sen!2sbe!4v1700409528749!5m2!1sen!2sbe" title="mapsLocation"></iframe>
                </div>
                <div class="LocationInfo">
                    <h2>
                        Locatie
                    </h2>
                    <h4>
                        Lierbaan 163A <br/>
                        2580 Putte <br/>
                        België <br/>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Contact
