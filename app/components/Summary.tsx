'use client'

import { useRouter } from "next/navigation"
import { carouselCardStyle, greenButtonStyle, headingStyle } from "../styles";

export default function Summary({
    text, value, bookLink
}: {
    text: string, value: number, bookLink?: string;
}) {

    //const router = useRouter()
    
    return (
        <>
        <div className="bg-gray-50 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col h-full">
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {text}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-auto">
          {value}
        </h3>
      </div>
    </div>
        {/* <div className={carouselCardStyle}>
        <div className="flex p-4">
            <span className='mb-4 text-xs md:text-sm'>{text}</span>
        </div>
            <h2 className={headingStyle}>{value}</h2>
            {/* <div className="flex jutify-center">
            {bookLink ? <button className={greenButtonStyle} onClick={()=>router.push(bookLink)}>Check it out!</button> : <button className={greenButtonStyle} onClick={()=>router.push('/home/booklist')}>To the books!</button>}
        </div> 
            </div> */}
        </>
    )
    
}
