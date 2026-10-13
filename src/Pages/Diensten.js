import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import ScrollReveal from '../Components/ScrollReveal';

function Diensten() {
    const [currentDienst, setCurrentDienst] = useState("voegwerken");

    const dienstenData = {
        voegwerken: {
            title: "Voegwerken",
            content: "Voegwerk is een belangrijk onderdeel van metselwerk en is de techniek van het aanbrengen van voegen tussen stenen of cementblokken om ze aan elkaar te versterken en te beschermen tegen weersinvloeden. Voegwerk kan worden uitgevoerd met verschillende materialen, waaronder cement, kalk, zand en andere additieven. Het type voeg dat wordt gebruikt, hangt af van de gedeeltelijke sterkte, uiterlijk en duurzaamheid van het metselwerk. Goed voegwerk is van groot belang voor de duurzaamheid en uitstraling van een gebouw. Wij kunnen u helpen bij het kiezen van het juiste type voegwerk, kleur en het uitvoeren van de noodzakelijke reparaties.",
            image: "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            features: ["Nieuwbouw projecten", "Renovatie voegwerk", "Kleur- en type advies", "Reparaties"]
        },
        gevelrenovatie: {
            title: "Gevelrenovatie",
            content: "Gevelrenovatieprojecten spelen een cruciale rol bij het vernieuwen en versterken van de esthetiek en duurzaamheid van gebouwen. Met aandacht voor detail en vakmanschap omvatten deze projecten het herstellen van gevels, repareren van metselwerk en verbeteren van isolatie. Niet beperkt tot grootschalige bouwwerken, dragen kleine gevelrenovaties evenzeer bij aan het opfrissen van de uitstraling van woningen en bedrijfspanden. Van het herstellen van beschadigde gevels tot het upgraden van isolatiematerialen, gevelrenovatie vereist expertise en een oog voor zowel functionaliteit als esthetiek.",
            image: "https://images.pexels.com/photos/29274535/pexels-photo-29274535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            features: ["Gevel herstel", "Metselwerk reparatie", "Isolatie verbetering", "Esthetiek opfrissing"]
        },
        laswerken: {
            title: "Kleine Laswerken",
            content: "Kleine laswerkprojecten, zoals het repareren van hekwerken of het maken van tuinmeubilair, vereisen vakmanschap en precisie. Deze projecten gaan verder dan industriële toepassingen en tonen de veelzijdigheid van lassen in alledaagse behoeften. Van het op maat maken van stalen frames tot het herstellen van kapotte fietsenrekken, kleine lasprojecten hebben een tastbare impact op ons dagelijks leven. De kracht ligt niet alleen in technische bekwaamheid, maar ook in het bieden van creatieve oplossingen.",
            image: "https://images.pexels.com/photos/5846282/pexels-photo-5846282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            features: ["Hekwerken reparatie", "Tuinmeubilair op maat", "Stalen frames", "Creatieve oplossingen"]
        }
    };

    return (
        <section id="diensten" className="scroll-mt-20 bg-gray-50 py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <ScrollReveal className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-700">
                        Diensten
                    </span>
                    <h2 className="font-display text-3xl font-extrabold text-gray-900 md:text-5xl">
                        Onze Diensten
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Van voegwerken tot gevelrenovatie en kleine laswerken — wij leveren vakmanschap voor elk project.
                    </p>
                </ScrollReveal>

                {/* Tab Navigation */}
                <ScrollReveal delay={100}>
                    <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        {Object.keys(dienstenData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setCurrentDienst(key)}
                                className={`rounded-full px-6 py-3 text-lg font-bold transition-all duration-300 ${
                                    currentDienst === key
                                        ? "bg-primary-800 text-white shadow-lg shadow-primary-800/30"
                                        : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700"
                                }`}
                            >
                                {dienstenData[key].title}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Text Content */}
                    <ScrollReveal key={`text-${currentDienst}`} className="flex flex-col justify-center">
                        <h3 className="font-display mb-6 text-3xl font-bold text-primary-800 md:text-4xl">
                            {dienstenData[currentDienst].title}
                        </h3>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            {dienstenData[currentDienst].content}
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {dienstenData[currentDienst].features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <FaCheck className="text-xs" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Image */}
                    <ScrollReveal key={`img-${currentDienst}`} delay={150}>
                        <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl lg:h-full lg:min-h-[500px]">
                            <img
                                src={dienstenData[currentDienst].image}
                                alt={dienstenData[currentDienst].title}
                                className="h-full w-full animate-scaleIn object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default Diensten;
