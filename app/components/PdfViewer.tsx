'use client'
import { useState } from "react";
import Image from "next/image";


export default function PdfViewer() {
    const EngCVUrl = "/EricPudneyCV(eng).pdf"; 
    const SweCVUrl = "/EricPudneyCV(sv).pdf"
    const [english, setEnglish] = useState(true);
    const flagWidth = 50
    const flagHeight = 30
  
    return (
      <div className="p-4 flex flex-col items-center">
        <div className="p-4 flex flex-row gap-x-4">
        <Image className="cursor-pointer" src="/swe.png" alt="svenska flaggan" title="Sweden icons created by Freepik - Flaticon" width={flagWidth} height={flagHeight} onClick={() => setEnglish(false)}/>
        <Image className="cursor-pointer" src="/eng.png" alt="UK flag" title="UK flag icons created by Freepik - Flaticon" width={flagWidth} height={flagHeight} onClick={() => setEnglish(true)}/>
        </div>
        
        <div className="w-full max-w-4xl max-h-[1137px] aspect-[1/1.414]">
          <iframe
            src={english ? EngCVUrl : SweCVUrl}
            title="My CV"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    );
  }