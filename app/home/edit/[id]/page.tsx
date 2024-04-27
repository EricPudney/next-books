import { editBook } from "@/app/actions/actions";
import Backbutton from "@/app/components/Backbutton";
import { fetchBook } from "@/app/data/data";

export default async function Page({ params }: { params: { id: string } }) {
    const ref = parseInt(params.id);
    const book = await fetchBook(ref);

    return (
        <>
            <h2 className='mb-4 text-xl md:text-2xl mt-16'>Edit book no. {ref}</h2>
            <form name="editedBook" action={editBook} className="flex flex-col mx-16">
                <input type="hidden" name='id' value={ref}/>
                <label>Title</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="title" defaultValue={book.title} />
                <label>Author</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="author" defaultValue={book.author}/>
                <label>Subject</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="subject" defaultValue={book.subject}/>
                <label>Binding</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="binding" defaultValue={book.binding}/>
                <label>Condition</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="condition" defaultValue={book.condition}/>
                <label>Value</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number' name="value" defaultValue={book.value}/>
                <label>Date</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number' name="date" defaultValue={book.date}/>
                <label>Notes</label><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' name="notes" defaultValue={book.notes}/>
                <button className='place-self-end bg-blue-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-4 mt-5 rounded w-32' type="submit">Submit</button>
            </form>   
        </>
    )
}