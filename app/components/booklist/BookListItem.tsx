import Link from "next/link";
import { Book } from "../../data/definitions";
import { BookOpenIcon, CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function BookListItem({book}: {book: Book}) {

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg bg-gray-100">
        {book.image ? (
          <Image
            src={book.image}
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpenIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {book.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-1">
          {book.author}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <CurrencyDollarIcon className="h-4 w-4 mr-1" />
            {book.value} SEK
          </span>
          <span className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {book.date}
          </span>
        </div>

        <Link
          href={`/home/book/${book.id}`}
          className="block w-full"
        >
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <BookOpenIcon className="h-5 w-5" />
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

