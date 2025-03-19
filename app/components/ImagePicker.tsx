'use client'

import { ChangeEvent, useState } from "react";

export default function ImagePicker({active}: {active: boolean}) {
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";
    const fileInputContainerClass = "w-full";
    const fileInputClass = "hidden"; 
    const disabledFileInputLabelClass = "inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg shadow-sm bg-gray-50 text-gray-400 text-sm";
    const fileInputLabelClass = "inline-flex items-center px-3 py-2 border border-blue-500 rounded-lg shadow-sm bg-blue-50 text-blue-700 text-sm hover:bg-blue-100 cursor-pointer";
    const fileNameDisplayClass = "mt-2 text-sm text-gray-500";
    
    const [fileName, setFileName] = useState("No file chosen");
      
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) { 
            e.target.files[0].name && setFileName(e.target.files[0].name);
        } else {
          setFileName("No file chosen");
        }
    };    
   
      return (
      <div className={fileInputContainerClass}>
          <label className={labelClass}>Upload File</label>
          <div>
            <label className={active ? fileInputLabelClass : disabledFileInputLabelClass} >
              <span>Choose File</span>
              {active && <input 
                name="image"
                type="file" 
                className={fileInputClass} 
                onChange={handleFileChange}
                
                />}
            </label>
          {active && <div className={fileNameDisplayClass}>{fileName}</div>}
          </div>
        </div>
      )
}