'use client'

import { Book } from "../../data/definitions";
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

export default function EditButton({
    book,
    active
}: {
    book: Book,
    active: boolean;
}) {
    const router = useRouter()
    
    return (
        <button 
            onClick={active ? () => router.push(`/home/edit/${book.id}`) : undefined}
            disabled={!active}
            className={`
                flex items-center px-4 py-2 text-sm font-medium rounded-lg
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${active 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-gray-400 text-white cursor-not-allowed"
                }
            `}
        >
            <PencilSquareIcon className="h-5 w-5 mr-2"/>
            <span>Edit</span>
        </button>
    )
}