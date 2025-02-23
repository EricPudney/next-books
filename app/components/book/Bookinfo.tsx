import { Book } from "../../data/definitions";
import ToggleImage from "./ToggleImage";

export default async function Bookinfo({
    book
}: {
    book: Book;
}) {
    
    return (
        <>
        <div className="md:grid md:grid-cols-3 md:gap-4 sm:flex-row">
            <div>
                <h2 className='mb-4 text-lg md:text-2xl'>{book.title}</h2>
                <p>{book.author}</p>
                <p>Subject: {book.subject}</p>
                <p>Binding: {book.binding}</p>       
                <p>Condition: {book.condition}</p>
                <p>Value: {book.value} SEK</p>
                <p>Date of publication: {book.date}</p>
                <p>No of volumes/items: {book.volumes}</p>
                <p>Notes: {book.notes}</p>
            </div>
                <ToggleImage src={book.image} />
        </div>
        </>
    )
}
