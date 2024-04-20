import { Book } from "../data/definitions";
import { fetchBook } from "../data/data";

export default async function Bookinfo({
    id
}: {
    id: Book['id'];
}) {
    const response = await fetchBook(id)
    const currentBook = response[0]
    return (
        <>
        <div className="grid grid-cols-3 gap-4">
            <div>
                <h2 className='mb-4 text-xl md:text-2xl'>{currentBook.title}</h2>
                <p>{currentBook.author}</p>
                <p>Subject: {currentBook.subject}</p>
                <p>Binding: {currentBook.binding}</p>       
                <p>Condition: {currentBook.condition}</p>
                <p>Value: {currentBook.value} SEK</p>
                <p>Date of publication: {currentBook.date}</p>
                <p>Notes: {currentBook.notes}</p>
            </div>
            <div className="grid grid-cols-subgrid gap-4 col-span-2">
                
            </div>
        </div>
        </>
    )
    
}