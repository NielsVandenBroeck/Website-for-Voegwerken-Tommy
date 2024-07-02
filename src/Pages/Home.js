import React from 'react'
import './Home.css'
import{IoMdStar, IoIosFlag, IoMdPeople} from "react-icons/io";

function Home() {
    return (
        <div>
            <div class="Image1">
                <div class="TitleContainer">
                    <h1 class="TitleText">
                    VOEGWERK 
                        <br/>
                    OP MAAT
                    </h1> 
                </div>

            </div>
            <h2 class="WhyUsTitle">
            Waarom kiezen voor Voegwerken Tommy?
            </h2>
            <div class="WhyUsContainer">
                <div class="WhyUsItem">
                    <IoIosFlag class="icon"/>
                    <div class="WhyUsSubTitle">Kwaliteit</div>
                    <div class="WhyUsDescription">
                        Precisie bij voegwerk is erg belangrijk omdat het de stevigheid, duurzaamheid en uitstraling van het metselwerk beïnvloedt.
                        Daarom zorgen wij ervoor dat ons voegwerk van hoge kwaliteit is. Hiervoor maken we gebruik van hoogwaardige materialen en moderne technieken.
                    </div>
                </div>
                <div class="WhyUsItem">
                    <IoMdStar class="icon"/>
                    <div class="WhyUsSubTitle">Ervaring</div>
                    <div class="WhyUsDescription"> 
                        Als ervaren voegers kunnen wij u een brede kennis en ervaring bieden op het gebied van het voegen van uw nieuwbouw of het herstellen en reinigen van uw gevel.
                        We hebben kennis van verschillende materialen en technieken, en we zijn in staat om het juiste type voegwerk en kleur te kiezen dat bij uw specifieke behoeften past.
                    </div>
                </div>
                <div class="WhyUsItem">
                    <IoMdPeople class="icon"/>
                    <div class="WhyUsSubTitle">Beschikbaarheid</div>
                    <div class="WhyUsDescription">
                        We begrijpen hoe belangrijk het is om snel en gemakkelijk bereikbaar te zijn voor onze klanten. We hechten veel waarde aan een goede communicatie en staan altijd klaar om vragen te beantwoorden en afspraken te maken die passen bij uw planning. Zo kunt u ons bijvoorbeeld bellen, e-mailen of een bericht sturen via deze website. We zullen uw bericht zo snel mogelijk beantwoorden.
                    </div>
                </div>
            </div>
            <div class="NumberContainer">
                <div class="NumberVak">
                    <div class="Number">5</div>
                    <div class="NumberInfo">Jaar ervaring</div>
                </div>
                <div class="NumberVak">
                    <div class="Number">20+</div>
                    <div class="NumberInfo">Afgeleverde projecten</div>
                </div>
                <div class="NumberVak">
                    <div class="Number">100%</div>
                    <div class="NumberInfo">Tevredenheid</div>
                </div>
            </div>
        </div>
    )
}

export default Home
