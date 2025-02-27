"use client";

import { Language } from "../page";

type LanguageSwitcherProps = {
    lang: Language;
    setLang: React.Dispatch<React.SetStateAction<Language>>;
  };
  
  export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={`p-1 rounded-lg transition-transform hover:scale-110 ${
          lang === "en" ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <span className="fi fi-gb"></span>
      </button>
      <button
        onClick={() => setLang("se")}
        className={`p-1 rounded-lg transition-transform hover:scale-110 ${
          lang === "se" ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <span className="fi fi-se"></span>
      </button>
    </div>
  );
}
