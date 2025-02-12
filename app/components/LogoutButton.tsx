'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid"

export default function LogoutButton({buttonAction}: {buttonAction: () => Promise<void>}) {
    return (
        <>
        
        <button onClick={() => buttonAction()} className="flex items-center text-white "><ArrowRightStartOnRectangleIcon className="h-6 w-6 mr-1"/>Logout</button>
        </>
    )
}