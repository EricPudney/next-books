'use client'

import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()
    return(
        <button className="flex items-center bg-red-500 hover:bg-red-700 text-white text-sm my-1 py-0.5 pr-2 pl-1 rounded" onClick={()=>router.push('/home/booklist')}>
            <ArrowLeftCircleIcon className="h-6 w-6 mr-1"/>
            <span>Back</span>
        </button>
    )
}
