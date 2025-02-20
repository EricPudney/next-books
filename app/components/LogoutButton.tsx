'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { linkIconStyle, linkStyle, linkTextStyle } from "../styles";

export default function LogoutButton({deleteSession}: {deleteSession: ()=>Promise<void>}) {
    
    return (
        <>
            <button onClick={() => deleteSession()} className={linkStyle}><ArrowRightStartOnRectangleIcon className={linkIconStyle}/><span className={linkTextStyle}>Logout</span></button>
        </>
        )
}
