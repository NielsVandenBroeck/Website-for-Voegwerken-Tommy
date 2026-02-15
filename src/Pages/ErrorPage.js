import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa'; // Added a nice icon!

function ErrorPage() {
    return (
        // min-h-[90vh] keeps the footer at the bottom of the screen
        <div className="flex min-h-[90vh] items-center justify-center bg-gray-50 p-6">

            {/* Modern Card Layout */}
            <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border-t-4 border-red-500 bg-white p-10 text-center shadow-xl md:p-16">

                {/* Warning Icon Container */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-500 shadow-sm">
                    <FaExclamationTriangle className="text-5xl" />
                </div>

                <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
                    Oeps! Er is iets misgegaan.
                </h1>

                <p className="mb-4 text-lg leading-relaxed text-gray-600">
                    We bieden onze excuses aan voor het ongemak. Ons team werkt eraan om het probleem op te lossen.
                </p>
                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                    Probeer het later opnieuw of neem contact op met ons ondersteuningsteam als het probleem aanhoudt.
                </p>

                {/* Modernized Button */}
                <Link
                    to="/home"
                    className="rounded-full bg-[#2e0747] px-8 py-4 text-lg font-bold tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#643382] hover:shadow-lg"
                >
                    Terug naar Startpagina
                </Link>
            </div>

        </div>
    );
}

export default ErrorPage;