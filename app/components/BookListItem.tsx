import Link from "next/link";
import { Book } from "../data/definitions";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { bookDetailsButtonStyle } from "../styles";

export default function BookListItem({book}: {book: Book}) {

    return (
      <div key={book.id} className="bg-white px-3 mx-2 my-2 w-48 h-28 rounded-lg">
        <p className="truncate text-md font-semibold md:text-base my-1">
          {book.title}
        </p>
        <p className="truncate text-sm text-gray-500 sm:block mb-1">
          {book.author}
        </p>
        <div className="flex justify-between">
          <p className="truncate text-xs xs:block">{book.value} SEK</p>
          <p className="truncate text-xs xs:block">printed {book.date}</p>
        </div>
        <Link
          className="flex items-center justify-evenly"
          href={`/home/book/${book.id}`}
        >
          <button className={bookDetailsButtonStyle}>
            <BookOpenIcon className="h-6 w-6" />
            <span>More</span>
          </button>
        </Link>
      </div>
    );
}

