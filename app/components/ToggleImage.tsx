'use client'

import Image from "next/image";
import { useState } from "react";

export default function ToggleImage({
    src 
}: {
    src: string,
}) {

    const [toggle, setToggle] = useState(false);

    return(
        <>
        {toggle && <div className="absolute top-0 left-0 bg-gray-500/70 w-full h-full grid place-items-center" onClick={() => setToggle(!toggle)}>
            <Image src={src} alt='an image of the book' width={540} height={960} className="rounded justify-self-center self-center max-h-screen object-contain"/>
            <span className="text-sm tracking-tight	">Click to return!</span>
            </div>}
        <div className="grid grid-cols-subgrid col-span-2 my-4 place-items-center">
            {!toggle && <><Image src={src} alt='an image of the book' width={270} height={480} className="rounded col-span-2" onClick={() => setToggle(!toggle)}/>
            <span className="text-xs col-span-2 tracking-tight	">Click to enlarge!</span></>}
        </div>
        </>
    )

}
