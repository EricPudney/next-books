"use client";

import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import {
  greenButtonStyle,
  greyedOutButtonStyle,
  linkIconStyleMR,
} from "../styles";

export default function UploadButton({ active }: { active: boolean }) {
    return (
        <button
        type="submit"
        disabled={!active}
        className={`flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${
                active
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            >
    {active ? "Upload Book" : "Admin Only"}
  </button>);
  // if (active){
  //     return(
  //         <button className={greenButtonStyle} type="submit">
  //             <CloudArrowUpIcon className={linkIconStyleMR}/>
  //             <span>Upload</span>
  //         </button>
  //     )
  // }
  // return(
  //     <button className={greyedOutButtonStyle} disabled >
  //         <CloudArrowUpIcon className={linkIconStyleMR}/>
  //         <span>Upload</span>
  //     </button>)
}
