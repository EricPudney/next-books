"use client";

import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { backButtonStyle } from "../styles";

export default function BackButton() {
  const router = useRouter();
  return (
    // <button className={backButtonStyle} onClick={()=>router.push('/home/booklist')}>
    //     <ArrowLeftCircleIcon className="h-6 w-6 mr-1"/>
    //     <span>Back</span>
    // </button>
    <button
      type="button"
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={() => window.history.back()}
    >
      ← Back
    </button>
  );
}
