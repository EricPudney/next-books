'use client'

import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { backButtonStyle } from "../styles"

export default function BackButton() {
    const router = useRouter()
    return(
        <button className={backButtonStyle} onClick={()=>router.push('/home/booklist')}>
            <ArrowLeftCircleIcon className="h-6 w-6 mr-1"/>
            <span>Back</span>
        </button>
    )
}
