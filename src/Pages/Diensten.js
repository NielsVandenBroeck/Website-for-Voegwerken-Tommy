import React, { useState } from 'react';

// We import the image directly just like we did on the Home page
import DienstenImg from '../Images/Diensten.jpg';

function Diensten() {
    const [currentDienst, setCurrentDienst] = useState("voegwerken");

    const dienstenData = {
        voegwerken: {
            title: "Voegwerken",
            content: "Voegwerk is een belangrijk onderdeel van metselwerk en is de techniek van het aanbrengen van voegen tussen stenen of cementblokken om ze aan elkaar te versterken en te beschermen tegen weersinvloeden. Voegwerk kan worden uitgevoerd met verschillende materialen, waaronder cement, kalk, zand en andere additieven. Het type voeg dat wordt gebruikt, hangt af van de gedeeltelijke sterkte, uiterlijk en duurzaamheid van het metselwerk. Goed voegwerk is van groot belang voor de duurzaamheid en uitstraling van een gebouw. Wij kunnen u helpen bij het kiezen van het juiste type voegwerk, kleur en het uitvoeren van de noodzakelijke reparaties."
        },
        gevelrenovatie: {
            title: "Gevelrenovatie",
            content: "Gevelrenovatieprojecten spelen een cruciale rol bij het vernieuwen en versterken van de esthetiek en duurzaamheid van gebouwen. Met aandacht voor detail en vakmanschap omvatten deze projecten het herstellen van gevels, repareren van metselwerk en verbeteren van isolatie. Niet beperkt tot grootschalige bouwwerken, dragen kleine gevelrenovaties evenzeer bij aan het opfrissen van de uitstraling van woningen en bedrijfspanden. Van het herstellen van beschadigde gevels tot het upgraden van isolatiematerialen, gevelrenovatie vereist expertise en een oog voor zowel functionaliteit als esthetiek. Deze projecten tonen aan hoe renovaties, groot of klein, een tastbare impact hebben op de levensduur en uitstraling van gebouwen, waardoor ze beter bestand zijn tegen de tand des tijds."
        },
        laswerken: {
            title: "Kleine Laswerken",
            content: "Kleine laswerkprojecten, zoals het repareren van hekwerken of het maken van tuinmeubilair, vereisen vakmanschap en precisie. Deze projecten gaan verder dan industriële toepassingen en tonen de veelzijdigheid van lassen in alledaagse behoeften. Van het op maat maken van stalen frames tot het herstellen van kapotte fietsenrekken, kleine lasprojecten hebben een tastbare impact op ons dagelijks leven. De kracht ligt niet alleen in technische bekwaamheid, maar ook in het bieden van creatieve oplossingen. Ze laten zien hoe lassen de bouwstenen vormt van een wereld waarin precisie en functionaliteit samenkomen."
        }
    };

    return (
        // CHANGED: Added min-h-[90vh] to guarantee the footer is pushed to the bottom
        <div className="flex min-h-[90vh] flex-col justify-center bg-gray-50 pb-20 pt-10">
            <div className="mx-auto w-[95%] max-w-[1600px] px-4 lg:px-10">
                <h1 className="mb-10 text-4xl font-extrabold text-[#2e0747] md:text-5xl lg:mb-16">
                    ONZE DIENSTEN
                </h1>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Left Column: Tabs and Text Content */}
                    <div className="flex flex-col overflow-hidden rounded-2xl border-4 border-[#2e0747] bg-white shadow-xl">

                        {/* Tab Menu Navigation */}
                        <div className="flex flex-col border-b border-gray-200 bg-gray-100 sm:flex-row">
                            {Object.keys(dienstenData).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setCurrentDienst(key)}
                                    className={`flex-1 px-4 py-5 text-center text-lg font-bold transition-all duration-300 md:px-6 ${
                                        currentDienst === key
                                            ? "border-b-4 border-[#2e0747] bg-white text-[#2e0747] shadow-sm"
                                            : "border-b-4 border-transparent text-gray-500 hover:bg-gray-200 hover:text-[#2e0747]"
                                    }`}
                                >
                                    {dienstenData[key].title}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Text Content Box */}
                        {/* CHANGED: Increased the minimum height here so the page is noticeably longer */}
                        <div className="flex flex-col justify-center p-8 md:p-12 lg:min-h-[600px]">
                            <h2 className="mb-6 text-3xl font-bold text-[#2e0747]">
                                {dienstenData[currentDienst].title}
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                {dienstenData[currentDienst].content}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image Side */}
                    {/* CHANGED: Replaced bg-center with bg-top so the crucial top part is always visible */}
                    <div
                        className="min-h-[500px] w-full rounded-2xl bg-cover bg-top shadow-xl lg:min-h-full"
                        style={{ backgroundImage: `url(${DienstenImg})` }}
                    >
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Diensten;