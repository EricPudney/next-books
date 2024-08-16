'use client'

import { useRouter } from "next/navigation"

export default function Page() {
    
    const router = useRouter()

    return (
    <>
        <main className="flex h-screen flex-col items-center justify-start xs:p-12 lg:p-24 mt-12">

      <h2 className='mb-48 text-xl md:text-2xl'>
        Welcome to my book collection
      </h2>
        <p className="mx-48 text-md">This hobby project showcases some of my small colection of rare, collectible, and antique books. It is built in NextJS 14, using server components and server actions rather than an API layer. Styling is in Tailwind CSS and the information is stored in a PostgreSQL database hosted on Vercel. Pictures are linked from Dropbox. At the time of writing this is still work in progress and may well look strange on some screens as I haven't yet dealt with responsivity.</p>
        <button className="flex items-center bg-green-600 hover:bg-green-800 text-white text-xl px-4 py-2 rounded align-self-center mt-24" onClick={()=>router.push('/home')}>
            Enter
        </button>
        </main>
    </>
)
}