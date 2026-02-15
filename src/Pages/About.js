import React from 'react';
import { FaCheck } from 'react-icons/fa';

// Import the image directly so React always finds it
import OverOnsImg from '../Images/OverOns.jpg';

function About() {
    return (
        // Added min-h-[90vh] to guarantee the footer stays at the bottom
        <div className="flex min-h-[90vh] flex-col justify-center bg-gray-50 pb-20 pt-10">

            {/* Wrapper matching the exact width of your Contact and Diensten pages */}
            <div className="mx-auto grid w-[95%] max-w-[1600px] grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:px-10">

                {/* Left Column: Text Content Card */}
                <div className="flex flex-col justify-center rounded-2xl border-4 border-[#2e0747] bg-white p-8 shadow-xl md:p-12 lg:min-h-[600px]">
                    <h1 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-[#2e0747] md:text-5xl">
                        Wie we zijn
                    </h1>
                    <h3 className="mb-10 text-2xl font-semibold text-gray-500">
                        Tommy Van den Broeck
                    </h3>

                    <div className="mt-4">
                        <h4 className="mb-6 text-xl font-bold tracking-wider text-[#9a5dbf] uppercase">
                            Enkele weetjes
                        </h4>

                        {/* Modernized Checklist */}
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 shadow-sm">
                                    <FaCheck />
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Voegwerken Tommy, gelegen te Putte, is vertrouwd in het voegen van uw nieuwbouw- en renovatieproject.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 shadow-sm">
                                    <FaCheck />
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Ook kleine laswerken worden aangeboden.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 shadow-sm">
                                    <FaCheck />
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Samen met Johan garanderen we een perfect afgewerkt project.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Image Side */}
                <div
                    className="min-h-[400px] w-full rounded-2xl bg-cover bg-center shadow-xl lg:min-h-full"
                    style={{ backgroundImage: `url(${OverOnsImg})` }}
                >
                    {/* The image is handled entirely by the background-image style above */}
                </div>

            </div>
        </div>
    );
}

export default About;