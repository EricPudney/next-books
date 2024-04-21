import { PencilSquareIcon } from "@heroicons/react/24/solid"

export default function Editbutton() {
    return(
        <button className="flex items-center bg-green-500 hover:bg-green-700 text-white text-sm my-1 py-0.5 pr-2 pl-2 rounded-full" >
            <PencilSquareIcon className="h-6 w-6 mr-1"/>
            <span>Edit</span>
        </button>
    )
}