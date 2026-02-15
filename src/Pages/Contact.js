import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    // We add a little state to make the button show "Aan het verzenden..." while working!
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert("Bedankt! Uw bericht is succesvol verzonden. Wij nemen zo snel mogelijk contact met u op.");
                setIsSubmitting(false);
                e.target.reset(); // Clears the form after sending
            }, (error) => {
                console.log(error.text);
                alert("Oeps, er ging iets mis. Probeer het later opnieuw of mail ons direct op voegwerkentommy@gmail.com.");
                setIsSubmitting(false);
            });
    };

    return (
        <div className="bg-gray-50 pb-20 pt-10">
            <div className="mx-auto grid w-[95%] max-w-[1600px] grid-cols-1 gap-12 p-4 md:grid-cols-3 lg:p-10">

                {/* Text Info Side */}
                <div className="flex flex-col justify-center md:col-span-1">
                    <h2 className="mb-6 text-4xl font-extrabold text-[#2e0747]">
                        Contacteer ons
                    </h2>
                    <h3 className="mb-8 text-xl font-medium text-gray-700">
                        Vul aanstaand formulier in of bereik ons direct via:
                    </h3>

                    <div className="flex flex-col gap-4 text-lg">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#9a5dbf]">Telefoon:</span>
                            <a className="font-semibold text-gray-900 transition-colors hover:text-[#2e0747]" href="tel:+32478206728">+32 478 20 67 28</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#9a5dbf]">Email:</span>
                            <a className="font-semibold text-gray-900 transition-colors hover:text-[#2e0747]" href="mailto:voegwerkentommy@gmail.com">voegwerkentommy@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex w-full flex-col gap-6 rounded-2xl border-t-4 border-[#2e0747] bg-white p-8 shadow-xl md:col-span-2"
                >
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="relative w-full">
                            <input type="text" id="name" name="user_name" className="peer w-full rounded-md border-2 border-gray-200 bg-transparent px-4 pb-2 pt-6 text-lg outline-none transition-colors focus:border-[#2e0747]" placeholder=" " required />
                            <label htmlFor="name" className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#2e0747] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-[#2e0747]">
                                Voornaam
                            </label>
                        </div>

                        <div className="relative w-full">
                            <input type="text" id="contactLastName" name="user_lastname" className="peer w-full rounded-md border-2 border-gray-200 bg-transparent px-4 pb-2 pt-6 text-lg outline-none transition-colors focus:border-[#2e0747]" placeholder=" " required />
                            <label htmlFor="contactLastName" className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#2e0747] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-[#2e0747]">
                                Achternaam
                            </label>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <input type="email" id="email" name="user_email" className="peer w-full rounded-md border-2 border-gray-200 bg-transparent px-4 pb-2 pt-6 text-lg outline-none transition-colors focus:border-[#2e0747]" placeholder=" " required />
                        <label htmlFor="email" className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#2e0747] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-[#2e0747]">
                            Email
                        </label>
                    </div>

                    <div className="relative w-full">
                        <textarea id="message" name="message" rows="6" className="peer w-full resize-none rounded-md border-2 border-gray-200 bg-transparent px-4 pb-2 pt-6 text-lg outline-none transition-colors focus:border-[#2e0747]" placeholder=" " required />
                        <label htmlFor="message" className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#2e0747] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-[#2e0747]">
                            Bericht
                        </label>
                    </div>

                    <button
                        disabled={isSubmitting}
                        className="mt-4 w-full rounded-full bg-[#2e0747] py-4 text-xl font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#643382] hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 lg:w-[250px]"
                        type="submit"
                    >
                        {isSubmitting ? 'Aan het verzenden...' : 'Verzenden'}
                    </button>
                </form>
            </div>

            {/* LOCATION / MAPS SECTION */}
            <div className="mx-auto grid w-[95%] max-w-[1600px] grid-cols-1 gap-12 p-4 md:grid-cols-3 lg:p-10">
                <div className="w-full overflow-hidden rounded-2xl border-4 border-[#2e0747] shadow-xl md:col-span-2">
                    <iframe className="h-[400px] w-full border-none lg:h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.514152352386!2d4.625634776968574!3d51.06205824313875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b71615a9e9483%3A0x4f1a19aa5cde366d!2sVoegwerken%20Tommy!5e0!3m2!1sen!2sbe!4v1700409528749!5m2!1sen!2sbe" title="mapsLocation"></iframe>
                </div>

                <div className="flex w-full flex-col justify-center text-center md:col-span-1 md:text-left">
                    <h2 className="mb-6 text-4xl font-extrabold text-[#2e0747]">
                        Locatie
                    </h2>
                    <h4 className="text-2xl font-medium leading-relaxed text-gray-800">
                        Lierbaan 163A <br/>
                        2580 Putte <br/>
                        België
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Contact;