'use client'

import { Book } from "../data/definitions";
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { greenButtonStyle, greyedOutButtonStyle } from "../styles";

export default function EditButton({
    book, active
}: {
    book: Book,
    active: boolean;
}) {
    const router = useRouter()
    if (active) {
        return(
        <button className={greenButtonStyle} onClick={()=>router.push(`/home/edit/${book.id}`)}>
            <PencilSquareIcon className="h-6 w-6 mr-1"/>
            <span>Edit</span>
        </button>)
    }
    return(
        <button className={greyedOutButtonStyle} disabled >
            <PencilSquareIcon className="h-6 w-6 mr-1"/>
            <span>Edit</span>
        </button>)
}