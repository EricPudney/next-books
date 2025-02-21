import { Language } from "@/app/page";
import * as content from "app/data/content.json";

export default function PortfolioBox({language}: {language: Language}) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800">
            {language === "en" ? "Portfolio Project" : "Portfolioprojekt"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {content[language].project_text}
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => (window.location.href = "/home")}
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
  );
}
