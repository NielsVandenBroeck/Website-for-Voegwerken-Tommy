import React, {useEffect, useState} from 'react'
import './Diensten.css'




function Diensten() {

    const [currentDienst, setCurrentDienst] = useState("voegwerken");

    useEffect(()=>{
        document.getElementById(currentDienst).classList.add("active")
        document.getElementById("info"+currentDienst).classList.add("active")
    }, [currentDienst])

    function setActive(dienst){
        if(dienst === currentDienst) return;
        document.getElementById(currentDienst).classList.remove("active")
        document.getElementById("info"+currentDienst).classList.remove("active")
        setCurrentDienst(dienst)
    }

    return (
        <div class="Diensten">
            <div class="DienstTitle">DIENSTEN</div>
            <div class="grid">
                <div class="WhatWeDoContainer">
                    <div class="navbar">
                        <button id="voegwerken" class="navitem left active" onClick={() => setActive("voegwerken")}>Voegwerken</button>
                        <button id="gevelrenovatie" class="navitem" onClick={() => setActive("gevelrenovatie")}>Gevelrenovatie</button>
                        <button id="laswerken" class="navitem right" onClick={() => setActive("laswerken")}>Kleine Laswerken</button>
                    </div>
                    <div class="InfoContainer">
                        <div id="infovoegwerken" class="InfoItem active">
                            Voegwerk is een belangrijk onderdeel van metselwerk en is de techniek van het aanbrengen van voegen tussen stenen, cementblokken om ze aan elkaar te versterken en te beschermen tegen weersinvloeden. Voegwerk kan worden uitgevoerd met verschillende materialen, waaronder cement, kalk, zand en andere additieven. Het type voeg dat wordt gebruikt, hangt af van de gedeeltelijke sterkte, uiterlijk en duurzaamheid van het metselwerk. Goed voegwerk is van groot belang voor de duurzaamheid en uitstraling van een gebouw. Wij kunnen u helpen bij het kiezen van het juiste type voegwerk, kleur en het uitvoeren van de noodzakelijke reparaties.
                        </div>
                        <div id="infogevelrenovatie" class="InfoItem">
                            Gevelrenovatieprojecten spelen een cruciale rol bij het vernieuwen en versterken van de esthetiek en duurzaamheid van gebouwen. Met aandacht voor detail en vakmanschap omvatten deze projecten het herstellen van gevels, repareren van metselwerk en verbeteren van isolatie. Niet beperkt tot grootschalige bouwwerken, dragen kleine gevelrenovaties evenzeer bij aan het opfrissen van de uitstraling van woningen en bedrijfspanden. Van het herstellen van beschadigde gevels tot het upgraden van isolatiematerialen, gevelrenovatie vereist expertise en een oog voor zowel functionaliteit als esthetiek. Deze projecten tonen aan hoe renovaties, groot of klein, een tastbare impact hebben op de levensduur en uitstraling van gebouwen, waardoor ze beter bestand zijn tegen de tand des tijds.                        </div>
                        <div id="infolaswerken" class="InfoItem">
                            Kleine laswerkprojecten, zoals het repareren van hekwerken of het maken van tuinmeubilair, vereisen vakmanschap en precisie. Deze projecten gaan verder dan industriële toepassingen en tonen de veelzijdigheid van lassen in alledaagse behoeften. Van het op maat maken van stalen frames tot het herstellen van kapotte fietsenrekken, kleine lasprojecten hebben een tastbare impact op ons dagelijks leven. De kracht ligt niet alleen in technische bekwaamheid, maar ook in het bieden van creatieve oplossingen. Ze laten zien hoe lassen de bouwstenen vormt van een wereld waarin precisie en functionaliteit samenkomen.
                        </div>
                    </div>
                </div>
                <div class="WhatWeDoImage"/>
            </div>
        </div>

    )
}

export default Diensten
