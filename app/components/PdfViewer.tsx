"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { headingStyle } from "../styles";

export default function PdfViewer() {
  const EngCVUrl = "/EricPudneyCV(eng).pdf";
  const SweCVUrl = "/EricPudneyCV(sv).pdf";
  const [english, setEnglish] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const flagWidth = 50;
  const flagHeight = 30;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <h2 className={headingStyle}>About me</h2>
    <div className="p-4 flex flex-col items-center">
      <div className="p-4 flex flex-row gap-x-4">
        <Image
          className="cursor-pointer"
          src="/swe.png"
          alt="svenska flaggan"
          title="Sweden icons created by Freepik - Flaticon"
          width={flagWidth}
          height={flagHeight}
          onClick={() => setEnglish(false)}
          />
        <Image
          className="cursor-pointer"
          src="/eng.png"
          alt="UK flag"
          title="UK flag icons created by Freepik - Flaticon"
          width={flagWidth}
          height={flagHeight}
          onClick={() => setEnglish(true)}
          />
      </div>

      {isSmallScreen ? (
        <div className="text-center mt-4">
          <p className="mb-2">Your screen is a bit too small to display my CV, but feel free to use the download link to save a copy. Use the flag icons to choose which language you would like it in.</p>
          <a
            href={english ? EngCVUrl : SweCVUrl}
            download
            className="text-blue-600 underline"
            >
            Download CV
          </a>
        </div>
      ) : (
        <div className="w-full max-w-4xl max-h-[1137px] aspect-[1/1.414]">
          <iframe
            src={english ? EngCVUrl : SweCVUrl}
            title="My CV"
            className="w-full h-full border-0"
            />
        </div>
      )}
    </div>
    </>
  );
}
