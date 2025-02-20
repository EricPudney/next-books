"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { basicCentredCol, flagStyle, rowSmallGap } from "../styles";

export default function PdfViewer() {
  const EngCVUrl = "/EricPudneyCV(eng).pdf";
  const SweCVUrl = "/EricPudneyCV(sv).pdf";
  const [english, setEnglish] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const flagWidth = 20;
  const flagHeight = 12;

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
    <div className={basicCentredCol}>
      <div className={rowSmallGap}>
        <Image
          className={flagStyle}
          src="/swe.png"
          alt="svenska flaggan"
          layout="intrinsic"
          width={flagWidth}
          height={flagHeight}
          onClick={() => setEnglish(false)}
          />
        <Image
          className={flagStyle}
          src="/eng.png"
          alt="UK flag"
          layout="intrinsic"
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
