'use client'

import { useRouter } from "next/navigation"
import { centredGreenButtonStyle } from "./styles"

export default function Page() {
    
    const router = useRouter()

    return (
    <>
        <main className="flex h-screen max-h-screen flex-col items-center justify-start xs:p-12 lg:p-24 pt-12 overflow-hidden box-border">

      <h2 className='mb-12 lg:mb-24 text-xl md:text-2xl text-center'>
        Welcome to my book collection
      </h2>
        <p className="mx-8 md:mx-16 lg:mx-32 xl:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">This hobby project showcases some of my small colection of rare, collectible, and antique books. It is built in NextJS 15, using server components and server actions rather than an API layer. Styling is in Tailwind CSS and the information is stored in a PostgreSQL database hosted on Vercel. Pictures are linked from Dropbox. I have also posted my CV here. You can create an account and log in if you like (although this does not allow you to do anything much). Passwords are of course hashed with bcrypt.</p>
        <button className={centredGreenButtonStyle} onClick={()=>router.push('/home')}>
            Enter
        </button>
        </main>
    </>
)
}