import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { IoMdStar, IoIosFlag, IoMdPeople } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

import HomePicture from '../Images/HomePicture.webp';
import RijWoning from '../Images/RijWoning.jpg';
import OverOnsImg from '../Images/OverOns.jpg';

import ScrollReveal from '../Components/ScrollReveal';

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative flex min-h-screen scroll-mt-0 items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HomePicture})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

        <div className="relative z-10 px-6 text-center">
          <ScrollReveal>
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md">
              Specialist in voegwerk & gevelrenovatie
            </span>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
              VOEGWERK <br />
              <span className="bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">
                OP MAAT
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              Precisie en vakmanschap voor uw nieuwbouw- en renovatieproject. Gelegen te Putte, België.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-accent-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-600 hover:shadow-2xl hover:shadow-accent-500/40"
              >
                <FiPhoneCall className="text-xl transition-transform group-hover:scale-110" />
                Contacteer ons
              </a>
              <a
                href="#diensten"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                Onze diensten
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <IoIosFlag className="text-2xl text-accent-400" />
                <span className="font-semibold">5 jaar ervaring</span>
              </div>
              <div className="hidden h-6 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2">
                <IoMdStar className="text-2xl text-accent-400" />
                <span className="font-semibold">20+ projecten</span>
              </div>
              <div className="hidden h-6 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2">
                <IoMdPeople className="text-2xl text-accent-400" />
                <span className="font-semibold">100% tevredenheid</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
            <div className="h-2 w-1 animate-float rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* QUICK CONTACT BAR */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-around">
          <ScrollReveal className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
              <FiPhoneCall className="text-xl" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Bel ons direct</div>
              <a href="tel:+32478206728" className="font-bold text-gray-900 transition-colors hover:text-primary-700">
                +32 478 20 67 28
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
              <FiMail className="text-xl" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Email ons</div>
              <a href="mailto:voegwerkentommy@gmail.com" className="font-bold text-gray-900 transition-colors hover:text-primary-700">
                voegwerkentommy@gmail.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
              <FiMapPin className="text-xl" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Locatie</div>
              <span className="font-bold text-gray-900">Lierbaan 163A, Putte</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WIE WE ZIJN / OVER ONS */}
      <section id="about" className="scroll-mt-20 bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border-2 border-primary-200 lg:block" />
              <div
                className="relative min-h-[400px] w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl lg:min-h-[550px]"
                style={{ backgroundImage: `url(${OverOnsImg})` }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-700">
                Wie we zijn
              </span>
              <h2 className="font-display mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
                Tommy Van den Broeck
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Voegwerken Tommy, gelegen te Putte, is vertrouwd in het voegen van uw nieuwbouw- en renovatieproject. Samen met Johan garanderen we een perfect afgewerkt project.
              </p>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <FaCheck className="text-sm" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Voegwerken Tommy, gelegen te Putte, is vertrouwd in het voegen van uw nieuwbouw- en renovatieproject.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <FaCheck className="text-sm" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Ook kleine laswerken worden aangeboden.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <FaCheck className="text-sm" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Samen met Johan garanderen we een perfect afgewerkt project.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WAAROM KIEZEN VOOR ONS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-700">
              Waarom wij
            </span>
            <h2 className="font-display text-3xl font-extrabold text-gray-900 md:text-5xl">
              Waarom kiezen voor Voegwerken Tommy?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ScrollReveal>
              <div className="group h-full rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:bg-white hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white">
                  <IoIosFlag className="h-8 w-8 text-accent-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Kwaliteit</h3>
                <p className="leading-relaxed text-gray-600">
                  Precisie bij voegwerk is erg belangrijk omdat het de stevigheid, duurzaamheid en uitstraling beïnvloedt. Wij gebruiken hoogwaardige materialen en moderne technieken.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:bg-white hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white">
                  <IoMdStar className="h-8 w-8 text-accent-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Ervaring</h3>
                <p className="leading-relaxed text-gray-600">
                  Als ervaren voegers bieden wij brede kennis voor nieuwbouw of gevelherstel. Wij kiezen het juiste type voegwerk en kleur voor uw behoeften.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:bg-white hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white">
                  <IoMdPeople className="h-8 w-8 text-accent-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Beschikbaarheid</h3>
                <p className="leading-relaxed text-gray-600">
                  Goede communicatie is cruciaal. Wij staan altijd klaar om vragen te beantwoorden. Bel, e-mail of stuur een bericht via deze site.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NUMBERS BAND */}
      <section className="relative flex flex-col items-center justify-evenly gap-10 overflow-hidden bg-cover bg-center bg-fixed py-20 text-white md:flex-row md:py-24"
        style={{ backgroundImage: `url(${RijWoning})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <ScrollReveal className="relative z-10 text-center">
          <div className="font-display text-6xl font-black md:text-8xl">5</div>
          <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Jaar ervaring</div>
        </ScrollReveal>
        <ScrollReveal delay={100} className="relative z-10 text-center">
          <div className="font-display text-6xl font-black md:text-8xl">20+</div>
          <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Projecten</div>
        </ScrollReveal>
        <ScrollReveal delay={200} className="relative z-10 text-center">
          <div className="font-display text-6xl font-black md:text-8xl">100%</div>
          <div className="mt-2 text-xl font-semibold uppercase tracking-wider opacity-90">Tevredenheid</div>
        </ScrollReveal>
      </section>
    </>
  );
}

export default Home;
