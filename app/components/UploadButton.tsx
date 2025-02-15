'use client'

import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import { greenButtonStyle, greyedOutButtonStyle } from "../styles"

export default function UploadButton({active}:{active: boolean}) {
    if (active){
        return(
            <button className={greenButtonStyle} type="submit">
                <CloudArrowUpIcon className="h-6 w-6 mr-1"/>
                <span>Upload</span>
            </button>
        )
    }
    return(
        <button className={greyedOutButtonStyle} disabled >
            <CloudArrowUpIcon className="h-6 w-6 mr-1"/>
            <span>Upload</span>
        </button>)
}