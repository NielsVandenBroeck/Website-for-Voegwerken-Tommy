import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaRegAddressCard } from 'react-icons/fa';
import ScrollReveal from '../Components/ScrollReveal';

function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus('success');
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                setStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="scroll-mt-20 bg-gray-50 py-20 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* Contact Info Card */}
                    <ScrollReveal>
                        <div className="flex h-full flex-col gap-6 rounded-3xl bg-primary-900 p-8 text-white shadow-xl lg:p-10">
                            <div>
                                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-400">
                                    Contact
                                </span>
                                <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
                                    Bereik ons direct
                                </h2>
                                <p className="mt-3 text-white/70">
                                    We staan klaar om uw vragen te beantwoorden en uw project te bespreken.
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 mt-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                                        <FiPhoneCall className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/60">Telefoon</div>
                                        <a href="tel:+32478206728" className="font-semibold transition-colors hover:text-accent-400">
                                            +32 478 20 67 28
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/60">Email</div>
                                        <a href="mailto:voegwerkentommy@gmail.com" className="font-semibold transition-colors hover:text-accent-400">
                                            voegwerkentommy@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/60">Locatie</div>
                                        <a href="http://maps.google.com/?q=Lierbaan+163A+Putte" target="_blank" rel="noreferrer" className="font-semibold transition-colors hover:text-accent-400">
                                            Lierbaan 163A, 2580 Putte
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                                        <FaRegAddressCard className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/60">BTW</div>
                                        <span className="font-semibold">BE 0784.521.746</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto overflow-hidden rounded-2xl border border-white/10">
                                <iframe
                                    className="h-[200px] w-full border-none"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.514152352386!2d4.625634776968574!3d51.06205824313875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b71615a9e9483%3A0x4f1a19aa5cde366d!2sVoegwerken%20Tommy!5e0!3m2!1sen!2sbe!4v1700409528749!5m2!1sen!2sbe"
                                    title="Locatie Voegwerken Tommy"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form Card */}
                    <ScrollReveal delay={150}>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex h-full flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl lg:p-10"
                        >
                            <div className="mb-2">
                                <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-700">
                                    Offerte
                                </span>
                                <h2 className="font-display text-3xl font-extrabold text-gray-900 md:text-4xl">
                                    Vraag uw offerte aan
                                </h2>
                                <p className="mt-3 text-gray-500">
                                    Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 sm:flex-row">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        className="peer w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 pb-2 pt-6 text-lg outline-none transition-all focus:border-primary-700 focus:bg-white"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-primary-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-primary-700"
                                    >
                                        Voornaam
                                    </label>
                                </div>

                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        id="contactLastName"
                                        name="user_lastname"
                                        className="peer w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 pb-2 pt-6 text-lg outline-none transition-all focus:border-primary-700 focus:bg-white"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="contactLastName"
                                        className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-primary-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-primary-700"
                                    >
                                        Achternaam
                                    </label>
                                </div>
                            </div>

                            <div className="relative w-full">
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="peer w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 pb-2 pt-6 text-lg outline-none transition-all focus:border-primary-700 focus:bg-white"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-primary-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-primary-700"
                                >
                                    Email
                                </label>
                            </div>

                            <div className="relative w-full">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="peer w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 pb-2 pt-6 text-lg outline-none transition-all focus:border-primary-700 focus:bg-white"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="pointer-events-none absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-primary-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-primary-700"
                                >
                                    Bericht
                                </label>
                            </div>

                            {status === 'success' && (
                                <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                                    Bedankt! Uw bericht is succesvol verzonden. Wij nemen zo snel mogelijk contact met u op.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                    Oeps, er ging iets mis. Probeer het later opnieuw of mail ons direct op voegwerkentommy@gmail.com.
                                </div>
                            )}

                            <button
                                disabled={isSubmitting}
                                className="group mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-600 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400"
                                type="submit"
                            >
                                <FiSend className="transition-transform group-hover:translate-x-1" />
                                {isSubmitting ? 'Aan het verzenden...' : 'Verzenden'}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default Contact;
