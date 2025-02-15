'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";



export default function LogoutButton({deleteSession}: {deleteSession: ()=>Promise<void>}) {
    const iconStyle = "h-6 w-6";
    const textStyle =
    "hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg";

    return (
        <>
            <button onClick={() => deleteSession()} className="flex items-center text-white "><ArrowRightStartOnRectangleIcon className={iconStyle}/>Logout</button>
        </>
        )
}

