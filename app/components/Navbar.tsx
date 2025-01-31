'use client'

import { HomeIcon, ListBulletIcon, PlusCircleIcon, QuestionMarkCircleIcon, LockOpenIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


export default function Navbar() {

return(
    <nav className="flex items-center justify-around p-4 bg-orange-700 text-white">
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <div>
    <Link href='/home' className="flex items-center">
      <HomeIcon className="h-6 w-6" />
        <p className='hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg'>Home</p>
    </Link>
    </div>
    <div>
    <Link href='/home/booklist' className="flex items-center">
      <ListBulletIcon className="h-6 w-6" />
        <p className='hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg'>Booklist</p>
    </Link>
    </div>
    <div>
    <Link href='/home/add' className="flex items-center">
      <PlusCircleIcon className="h-6 w-6" />
        <p className='hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg'>Add book</p>
    </Link>
    </div>
    <div>
    <Link href='/home/about' className="flex items-center">
      <QuestionMarkCircleIcon className="h-6 w-6" />
        <p className='hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg'>About me</p>
    </Link>
    </div>
    <div></div>
    <div></div>
    <div></div>

    <Link href='/home/login' className="flex items-center">
      <LockOpenIcon className="h-6 w-6" />
        <p className='hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg'>Login</p>
    </Link>
    </nav>
)
}


