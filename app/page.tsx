"use client";

import Image from "next/image";
import { useState } from "react";
import "../node_modules/flag-icons/css/flag-icons.min.css";

export default function Page() {
  type Language = "en" | "se";

  const [language, setLanguage] = useState<Language>("en");

  const content = {
    en: {
      title: "Software Developer",
      bio: "I am a former lecturer and researcher now completing my training as a software/web developer. My interest in development is long-standing and I taught myself programming earlier in my career. I learn extremely quickly and am passionate about making a meaningful contribution in everything I do.",
      contact: "Contact",
      skills: "Skills",
      experience: "Experience",
      jt1: "Intern",
      jt2: "Lecturer in English",
      jd2: "Lund University (and other universities)",
      country: "Sweden",
      ed: "Education",
      ed_t1: "PhD, English Literature",
      ed_d1: "Lund University",
    },
    se: {
      title: "Mjukvaruutvecklare",
      bio: "Jag har tidigare arbetat som universitetslektor och forskare och nu läser klart min utbildning som mjukvaru/webbutvecklare. Jag har länge varit intresserad av utveckling och lärde mig programmera på egen hand tidigare i karriären. Jag lär mig mycket snabbt och brinner för att göra skillnad i allt jag gör.",
      contact: "Kontaktuppgifter",
      skills: "Kompetenser",
      experience: "Arbetslivserfarenhet",
      jt1: "Praktikant",
      jt2: "Universitetslektor i engelska",
      jd2: "Lunds Universitet (och andra lärosäte)",
      country: "Sverige",
      ed: "Utbildning",
      ed_t1: "Doktorsexamen, engelsk litteratur",
      ed_d1: "Lunds Universitet",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`p-1 rounded-lg transition-transform hover:scale-110 ${
            language === "en" ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <span className="fi fi-gb"></span>
        </button>
        <button
          onClick={() => setLanguage("se")}
          className={`p-1 rounded-lg transition-transform hover:scale-110 ${
            language === "se" ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <span className="fi fi-se"></span>
        </button>
      </div>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">Eric Pudney</h1>
              <p className="text-xl text-blue-100">{content[language].title}</p>
              <p className="text-blue-200 max-w-lg">{content[language].bio}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="overflow-hidden w-48 h-48 rounded-full bg-white/10 border-4 border-white/30">
                <Image
                  src="/photo.jpg"
                  alt="A picture of me"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 ">
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800">
              {language === "en" ? "Portfolio Project" : "Portfolioprojekt"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {language === "en"
                ? "This website is a hobby project designed to showcase my programming skills. It demonstrates my ability to work with modern web technologies including React, Next.js, and TypeScript. Feel free to explore the rest of the site to see more examples of my work."
                : "Denna webbplats är ett hobbyprojekt som syftar till att visa mina programmeringsfärdigheter. Den demonstrerar min förmåga att arbeta med moderna webbteknologier som React, Next.js och TypeScript. Utforska gärna resten av webbplatsen för att se fler exempel på mitt arbete."}
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => (window.location.href = "/portfolio")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              {language === "en" ? "View Portfolio" : "Se Portfolio"}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-8">
            
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {content[language].contact}
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>📧 ericpudney@gmail.com</p>
                <p>📱 +46 703 54 22 60</p>
                <p>📍 Lund, {content[language].country}</p>
                <p>🔗 github.com/EricPudney</p>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {content[language].skills}
              </h2>
              <div className="space-y-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "AI",
                  "Java/Java Spring",
                  "Go",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {content[language].experience}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800">
                    {content[language].jt1}
                  </h3>
                  <p className="text-blue-600">Studentlitteratur • 2025 -</p>
                  <p className="text-gray-600 mt-2">.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800">
                    {content[language].jt2}
                  </h3>
                  <p className="text-blue-600">
                    {content[language].jd2} • 2017 - 2023
                  </p>
                  <p className="text-gray-600 mt-2">.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {content[language].ed}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800">
                    {content[language].ed_t1}
                  </h3>
                  <p className="text-blue-600">
                    {content[language].ed_d1} • 2012 - 2017
                  </p>
                  <p className="text-gray-600 mt-2">.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Eric Pudney</p>
        </div>
      </footer>
    </div>
  );
}
