import { fetchBooks } from "app/data/data";
import Filters from "@/app/components/booklist/Filters";
import BookListItem from "@/app/components/booklist/BookListItem";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { mainStyle } from "@/app/styles";


export default async function ItemsPage({ searchParams }: {searchParams: Promise<any>}) {
  const params = await searchParams;
  const books = await fetchBooks(params);

  return (
    <main className={mainStyle}>
      <div className="max-w-screen-xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Book Collection</h2>
          <Filters />
        </div>

        {!books || books.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="max-w-md mx-auto">
              <BookOpenIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
