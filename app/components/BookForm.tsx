import { Book } from "../data/definitions";

export default function BookForm({book}: {book: Book | null}) {

    const styling = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return(
        <>
            <label>Title</label><input className={styling} type='text' name="title" defaultValue={book ? book.title : ""} required/>
            <label>Author</label><input className={styling} type='text' name="author" defaultValue={book ? book.author : ""}/>
            <label>Subject</label><input className={styling} type='text' name="subject" defaultValue={book ? book.subject : ""} required/>
            <label>Binding</label><input className={styling} type='text' name="binding" defaultValue={book ? book.binding : ""}/>
            <label>Condition</label><input className={styling} type='text' name="condition" defaultValue={book ? book.condition : ""}/>
            <label>Value</label><input className={styling} type='number' name="value" defaultValue={book ? book.value : ""} required/>
            <label>Date</label><input className={styling} type='number' name="date" defaultValue={book ? book.date : ""} required/>
            <label>Volumes</label><input className={styling} type='number' name="volumes" defaultValue={book ? book.volumes : ""} required/>
            <label>Notes</label><input className={styling} type='text' name="notes" defaultValue={book ? book.notes : ""}/>
            <label>Image link</label><input className={styling} type='text' name="image" defaultValue={book ? book.image : ""} required/>
        </>
    )
}