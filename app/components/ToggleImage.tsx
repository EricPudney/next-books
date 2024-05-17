'use client'

import Image from "next/image";
import { useState } from "react";

export default function ToggleImage({
    src,
    width,
    height 
}: {
    src: string,
    width: number,
    height: number
}) {

    const [toggle, setToggle] = useState(false);

    return(
        <>
        {!toggle && <Image src={src} alt='an image of the book' width={270} height={480} className="rounded place-self-end col-span-2 max-h-96" onClick={() => setToggle(!toggle)}/>}
        {toggle && <Image src={src} alt='an image of the book' width={975} height={1800} onClick={() => setToggle(!toggle)}/>}
        </>
    )

}