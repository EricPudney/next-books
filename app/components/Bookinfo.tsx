import { Book } from "../data/definitions";
import ToggleImage from "./ToggleImage";

export default async function Bookinfo({
    book
}: {
    book: Book;
}) {
    
    return (
        <>
        <div className="grid grid-cols-3 gap-4">
            <div>
                <h2 className='mb-4 text-xl md:text-2xl'>{book.title}</h2>
                <p>{book.author}</p>
                <p>Subject: {book.subject}</p>
                <p>Binding: {book.binding}</p>       
                <p>Condition: {book.condition}</p>
                <p>Value: {book.value} SEK</p>
                <p>Date of publication: {book.date}</p>
                <p>No of volumes/items: {book.volumes}</p>
                <p>Notes: {book.notes}</p>
            </div>
            <div className="grid grid-cols-subgrid col-span-2 mb-4">
                <ToggleImage src={book.image} width={270} height={480} />
            </div>
        </div>
        </>
    )
}

//                 <Image src={book.image} alt='an image of the book' width={270} height={480} className="rounded place-self-end col-span-2 max-h-96"/>
