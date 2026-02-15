import React from 'react';
import { IoMdStar, IoIosFlag, IoMdPeople } from "react-icons/io";

// We import the images directly so React always knows exactly where they are
import HomePicture from '../Images/HomePicture.jpeg';
import RijWoning from '../Images/RijWoning.jpg';

function Home() {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <div
                className="relative h-[90vh] w-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${HomePicture})` }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 flex h-full items-center justify-center text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
                        VOEGWERK <br /> OP MAAT
                    </h1>
                </div>
            </div>

            {/* WHY US SECTION */}
            <div className="mx-auto max-w-7xl px-6 py-20">
                <h2 className="mb-16 text-center text-3xl font-extrabold text-[#2e0747] md:text-5xl">
                    Waarom kiezen voor Voegwerken Tommy?
                </h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Item 1 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 transition-transform duration-300 group-hover:scale-110">
                            <IoIosFlag className="h-12 w-12 text-orange-500" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">Kwaliteit</h3>
                        <p className="leading-relaxed text-gray-600">
                            Precisie bij voegwerk is erg belangrijk omdat het de stevigheid, duurzaamheid en uitstraling beïnvloedt. Wij gebruiken hoogwaardige materialen en moderne technieken.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 transition-transform duration-300 group-hover:scale-110">
                            <IoMdStar className="h-12 w-12 text-orange-500" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">Ervaring</h3>
                        <p className="leading-relaxed text-gray-600">
                            Als ervaren voegers bieden wij brede kennis voor nieuwbouw of gevelherstel. Wij kiezen het juiste type voegwerk en kleur voor uw behoeften.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="group flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 transition-transform duration-300 group-hover:scale-110">
                            <IoMdPeople className="h-12 w-12 text-orange-500" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">Beschikbaarheid</h3>
                        <p className="leading-relaxed text-gray-600">
                            Goede communicatie is cruciaal. Wij staan altijd klaar om vragen te beantwoorden. Bel, e-mail of stuur een bericht via deze site.
                        </p>
                    </div>
                </div>
            </div>

            {/* NUMBERS SECTION */}
            <div
                className="relative flex h-auto flex-col items-center justify-evenly gap-10 bg-cover bg-center py-20 text-white md:h-[60vh] md:flex-row md:py-0"
                style={{ backgroundImage: `url(${RijWoning})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center">
                    <div className="text-6xl font-black md:text-8xl">5</div>
                    <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Jaar ervaring</div>
                </div>
                <div className="relative z-10 text-center">
                    <div className="text-6xl font-black md:text-8xl">20+</div>
                    <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Projecten</div>
                </div>
                <div className="relative z-10 text-center">
                    <div className="text-6xl font-black md:text-8xl">100%</div>
                    <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Tevredenheid</div>
                </div>
            </div>
        </div>
    );
}

export default Home;