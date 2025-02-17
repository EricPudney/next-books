import { fetchBooks } from "app/data/data";
import Filters from "app/components/Filters";
import BookListItem from "@/app/components/BookListItem";

type SearchParams = {
  [key: string]: string | undefined
}

type PageProps = {
  searchParams: SearchParams
}

export default async function ItemsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const books = await fetchBooks(params);

  return (
    <div className="flex w-full flex-col mt-16">
      <h2 className="mb-4 text-xl md:text-2xl">Books</h2>
      <div className="flex flex-wrap flex-col justify-evenly items-center mb-4 gap-2 md:flex-row">
        <Filters />
      </div>
      {!books || books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <>
          <div className="flex flex-wrap flex-col justify-evenly items-center mb-4 gap-2 md:flex-row">
            <div className="flex flex-wrap items-center justify-evenly">
              {books.map((book, i) => (
                <BookListItem book={book} key={i} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
