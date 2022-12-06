import React from 'react'
import './Contact.css'
import {FiChevronDown} from "react-icons/fi";

function Contact() {

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
            <div class="ContactContainer">
                <div class="ContactInfo">
                    <h1 class="Title">
                        Contacteer ons
                    </h1>
                    <h3 class="BodyText">
                        Vul volgend formulier in om ons te contacteren. Wij beantwoorden al je vragen zo snel mogelijk.
                        Of bel naar +32 478 20 67 28
                    </h3>
                    <button class="Button" style={{background: "red"}}>Offerte aanvragen</button>
                </div>
                <form class="InputContainer" action="" method="POST">
                    <div class="Split">
                        <label class="custom-field padding">
                            <input type="text" placeholder=" " id="contactFirstName" required/>
                            <span class="placeholder" >Voornaam</span>
                        </label>
                        <label class="custom-field">
                            <input type="text" placeholder=" " id="contactLastName" required/>
                            <span class="placeholder">Achternaam</span>
                        </label>
                    </div>
                    <label class="custom-field">
                        <input type="email" placeholder=" " id="contactEmail" required/>
                        <span class="placeholder">Email</span>
                    </label>
                    <label class="custom-field">
                        <textarea placeholder=" " rows="10" style={{resize: "none"}} id="contactMessage" type="text" required/>
                        <span class="placeholder">Bericht</span>
                    </label>
                    <button class="Button" onClick={handleQuestion} type="submit">verzenden</button>
                </form>
            </div>
            <div class="LocationContainer">
                <div class="MapsContainer">
                    <iframe class="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5145527434697!2d4.626053315974147!3d51.06205085098742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e296d26424cf%3A0xf241d24022291c0c!2sLierbaan%20163%2C%202580%20Putte!5e0!3m2!1sen!2sbe!4v1664405888844!5m2!1sen!2sbe" title="mapsLocation"></iframe>
                </div>
                <div class="LocationInfo">
                    <h1 class="Title">
                        Locatie
                    </h1>
                    <h3>
                        Lierbaan 163A 2580, Putte
                    </h3>
                </div>
            </div>
            <div class="ContactContainer">
                {/*
                -offerte voor?
                -toelichting
                -naam, email, telefoon nummer, address
                -bijlagen
                */}


                <div class="ContactInfo">
                    <h1 class="Title">
                        Offerte aanvragen
                    </h1>
                    <h3 class="BodyText">
                        Of heb je een vraag?
                    </h3>
                    <button class="Button" style={{background: "green"}}>Contacteer ons</button>
                </div>                
                <form class="InputContainer" action="" method="POST">

                    <label class="custom-field">
                        <select id="OfferteSelect" required>
                            <option value="1">Voegwerken</option>
                            <option value="2">Plaatsen van plinten</option>
                            <option value="3">Andere</option>
                        </select>
                        <span class="placeholder">Offerte voor?</span>
                        <FiChevronDown class="DropDownIcon" style={{color:"#2e0747"}}/>
                    </label>


                    <div class="Split">
                        <label class="custom-field padding">
                            <input type="text" placeholder=" " id="OfferteFirstName" required/>
                            <span class="placeholder">Voornaam</span>
                        </label>
                        <label class="custom-field">
                            <input type="text" placeholder=" " id="OfferteLastName" required/>
                            <span class="placeholder">Achternaam</span>
                        </label>
                    </div>
                    <label class="custom-field">
                        <input type="text" placeholder=" " id="OfferteTel" required/>
                        <span class="placeholder">Telefoon nummer</span>
                    </label>
                    <label class="custom-field">
                        <input type="email" placeholder=" " id="OfferteEmail" required/>
                        <span class="placeholder">Email</span>
                    </label>
                    <div class="Split">
                        <label class="custom-field padding">
                            <input type="text" placeholder=" " id="OfferteAddress" required/>
                            <span class="placeholder">Straatnaam en nummer</span>
                        </label>
                        <label class="custom-field">
                            <input type="text" placeholder=" " id="OfferteAddress" required/>
                            <span class="placeholder">postcode</span>
                        </label>
                    </div>
                    <label class="custom-field">
                        <textarea placeholder=" " rows="10" style={{resize: "none"}} id="OfferteMessage" type="text" required/>
                        <span class="placeholder">Toelichting</span>
                    </label>
                    <div class="UploadFilesContainer">
                        <label class="Upload">
                            <input type="file" multiple/>
                        </label>
                    </div>
                    <button class="Button" onClick={handleOfferte} type="submit">verzenden</button>
                </form>
            </div>
        </>
    )
}

export default Contact
