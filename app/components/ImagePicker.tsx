'use client'

import { ChangeEvent, useState } from "react";

const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function ImagePicker() {
    const fileInputContainerClass = "w-full";
    const fileInputClass = "hidden"; 
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
            <label className={fileInputLabelClass}>
              <span>Choose File</span>
              <input 
                name="image"
                type="file" 
                className={fileInputClass} 
                onChange={handleFileChange}
                />
            </label>
            <div className={fileNameDisplayClass}>{fileName}</div>
          </div>
        </div>
    );
}