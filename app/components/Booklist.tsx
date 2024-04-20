import Link from "next/link";
import { Book } from "../data/definitions";
import { BookOpenIcon } from "@heroicons/react/16/solid";

export default function Booklist({
    listall
}: {
    listall: Book[];
}) {
    return(

<div className="flex w-full flex-col md:col-span-4">
      <h2 className='mb-4 text-xl md:text-2xl'>
        Books
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

          <div className="flex flex-wrap items-center justify-evenly">
          {listall.map((book) => {
              return (
            
              <div key={book.id} className="bg-white px-3 mx-2 my-2 w-48 h-28 rounded-lg">
                  
                    <p className="truncate text-md font-semibold md:text-base my-1">
                      {book.title}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block mb-1">
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
                  <button className="flex items-center bg-blue-300 hover:bg-blue-600 text-white text-sm my-1 py-0.5 px-2 rounded-full">
                    <BookOpenIcon className="h-6 w-6"/>
                    <span>More</span>
                  </button>
                </Link>

        </div> 
            );
        })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
    )
}