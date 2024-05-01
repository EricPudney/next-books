'use client'
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"

export default function Uploadbutton() {
    return(
        <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white text-sm my-1 py-0.5 pr-2 pl-2 rounded" type="submit">
            <CloudArrowUpIcon className="h-6 w-6 mr-1"/>
            <span>Upload</span>
        </button>
    )
}