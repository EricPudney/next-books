import { Book } from "../data/definitions";

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

          <div className="flex flex-wrap items-center">
          {listall.map((book) => {
              return (
            
              <div key={book.id} className="bg-white px-6 mx-2 my-2 w-48 h-20 rounded-lg">
                  
                    <p className="truncate text-sm font-semibold md:text-base">
                      {book.title}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {book.author}
                    </p>
                <div className="flex justify-between">
                <p
                  className='truncate text-sm font-medium md:text-base'
                  >
                  {book.value} SEK
                </p>
                </div>
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