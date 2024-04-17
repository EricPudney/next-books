'use client'

import { HomeIcon, ListBulletIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


export default function Navbar() {

return(
    <nav className="flex items-center justify-around p-4 bg-orange-700 text-white">
    <div></div>
    <div>
    <Link href='/home' className="flex items-center">
      <HomeIcon className="h-6 w-6" />
        <p className='ml-2'>Home</p>
    </Link>
    </div>
    <div>
    <Link href='/home/booklist' className="flex items-center">
      <ListBulletIcon className="h-6 w-6" />
        <p className='ml-2'>Booklist</p>
    </Link>
    </div>
    <div>
    <Link href='/home/add' className="flex items-center">
      <PlusCircleIcon className="h-6 w-6" />
        <p className='ml-2'>Add book</p>
    </Link>
    </div>
    <div></div>
    </nav>
)
}


