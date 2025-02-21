"use client";

import { useState } from "react";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import * as content from "app/data/content.json";
import CVLink from "./components/CV/CVLink";
import CVSection from "./components/CV/CVSection";
import CVSkills from "./components/CV/CVSkills";
import CVHeader from "./components/CV/CVHeader";
import PortfolioBox from "./components/CV/PortfolioBox";
import JobOrSchoolDetails from "./components/CV/JobOrSchoolDetails";

export type Language = "en" | "se";
export default function Page() {
  const [language, setLanguage] = useState<Language>("en");

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

      <CVHeader title={content[language].title} bio={content[language].bio} />

      <main className="container mx-auto px-6 ">
        <PortfolioBox language={language} />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <CVSection
              title={content[language].contact}
              content={
                <div className="space-y-3 text-gray-600">
                  <p>📧 ericpudney@gmail.com</p>
                  <p>📱 +46 703 54 22 60</p>
                  <p>📍 Lund, {content[language].country}</p>
                  <p>🔗 github.com/EricPudney</p>
                </div>
              }
            />

            <CVSection
              title={content[language].skills}
              content={<CVSkills />}
            />

            <CVSection
              title={content[language].links}
              content={
                <>
                  <CVLink
                    title={content[language].link1_title}
                    text={content[language].link1_text}
                    link={
                      "https://scholar.google.com/citations?user=Csr_QDYAAAAJ&hl=en"
                    }
                  />
                  <CVLink
                    title={content[language].link2_title}
                    text={content[language].link2_text}
                    link={"https://github.com/EricPudney"}
                  />
                  <CVLink
                    title={content[language].link3_title}
                    text={content[language].link3_text}
                    link={
                      language === "en"
                        ? "/EricPudneyCV(eng).pdf"
                        : "/EricPudneyCV(sv).pdf"
                    }
                  />
                </>
              }
            />
          </div>
          <div className="md:col-span-2 space-y-8">
            <CVSection
              title={content[language].experience}
              content={
                <div className="space-y-6">
                  <JobOrSchoolDetails
                    title={content[language].jt1}
                    institution="Studentlitteratur • 2025 -"
                    text={content[language].jd1}
                  />
                  <JobOrSchoolDetails
                    title={content[language].jt2}
                    institution={`${content[language].emp2} • 2017 - 2023`}
                    text={content[language].jd2}
                  />
                </div>
              }
            />

            <CVSection
              title={content[language].ed}
              content={
                <div className="space-y-6">
                  <JobOrSchoolDetails
                    title={content[language].ed_t1}
                    institution={`${content[language].ed_sch1} • 2023 - `}
                    text={content[language].ed_t1}
                  />
                  <JobOrSchoolDetails
                    title={content[language].ed_t2}
                    institution={`${content[language].ed_sch2} • 2012 - 2017`}
                    text={content[language].ed_t2}
                  />
                </div>
              }
            />
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
