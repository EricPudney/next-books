'use client'

import Link from "next/link";
import { Book } from "../data/definitions";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Filter from "./Filter";

export default function Booklist({
    listall
}: {
    listall: Book[];
}) {

const [booklist, setBooklist] = useState(listall)

    function filterByDate() {
      setBooklist(listall)
    }
    function filterByValue() {
      setBooklist(listall)
    }
    function filterBySubject() {
      setBooklist(listall)
    }

return(
<div className="flex w-full flex-col md:col-span-4 mt-16">
      <h2 className='mb-4 text-xl md:text-2xl'>
        Books
      </h2>
      <Filter name={'Filter by date'} options={['1600s and earlier', '1700s', '1800s', '1900s and later']} onChange={filterByDate} />
      <Filter name={'Filter by value'} options={['<100 SEK', '100-250 SEK', '250-500 SEK', '500-1000 SEK', '1000 SEK+']} onChange={filterByValue} />
      <Filter name={'Filter by subject'} options={['Poetry', 'Drama', 'Other literature', 'History', 'Philosophy', 'Science', 'Other']} onChange={filterBySubject} />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

          <div className="flex flex-wrap items-center justify-evenly">
          {booklist.map((book) => {
              return (
            
              <div key={book.id} className="bg-white px-3 mx-2 my-2 w-48 h-28 rounded-lg">
                  
                    <p className="truncate text-md font-semibold md:text-base my-1">
                      {book.title}
                    </p>
                    <p className="truncate text-sm text-gray-500 sm:block mb-1">
                      {book.author}
                    </p>
                <div className="flex justify-between">
                <p
                  className='truncate text-xs xs:block'
                  >
                  {book.value} SEK
                </p>
                <p className='truncate text-xs xs:block'>printed {book.date}</p>
                </div>
                <Link className="flex items-center justify-evenly" href={`/home/book/${book.id}`}>
                  <button className="flex items-center bg-orange-500 hover:bg-orange-800 text-white text-sm my-1 py-0.5 px-2 rounded">
                    <BookOpenIcon className="h-6 w-6"/>
                    <span>More</span>
                  </button>
                </Link>
        </div> 
            );
        })}
        </div>
      </div>
    </div>
    )
}