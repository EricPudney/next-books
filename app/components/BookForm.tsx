import { Book } from "../data/definitions";

export default function BookForm({book}: {book: Book | null}) {


  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  
  const formFields = [
    { name: 'title', label: 'Title*', type: 'text', required: true },
    { name: 'author', label: 'Author', type: 'text' },
    { name: 'subject', label: 'Subject*', type: 'text', required: true },
    { name: 'binding', label: 'Binding', type: 'text' },
    { name: 'condition', label: 'Condition', type: 'text' },
    { name: 'value', label: 'Value*', type: 'number', required: true },
    { name: 'date', label: 'Date*', type: 'number', required: true },
    { name: 'volumes', label: 'Volumes*', type: 'number', required: true },
    { name: 'notes', label: 'Notes', type: 'text' },
    { name: 'image', label: 'Image Link*', type: 'text', required: true },
  ];
  
  return (
    <>
      {formFields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label htmlFor={field.name} className={labelClass}>
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            defaultValue={book ? book[field.name as keyof typeof book] : ""}
            className={inputClass}
          />
        </div>
      ))}
    </>
  );

    // const styling = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    // return(
    //     <>
    //         <label>Title</label><input className={styling} type='text' name="title" defaultValue={book ? book.title : ""} required/>
    //         <label>Author</label><input className={styling} type='text' name="author" defaultValue={book ? book.author : ""}/>
    //         <label>Subject</label><input className={styling} type='text' name="subject" defaultValue={book ? book.subject : ""} required/>
    //         <label>Binding</label><input className={styling} type='text' name="binding" defaultValue={book ? book.binding : ""}/>
    //         <label>Condition</label><input className={styling} type='text' name="condition" defaultValue={book ? book.condition : ""}/>
    //         <label>Value</label><input className={styling} type='number' name="value" defaultValue={book ? book.value : ""} required/>
    //         <label>Date</label><input className={styling} type='number' name="date" defaultValue={book ? book.date : ""} required/>
    //         <label>Volumes</label><input className={styling} type='number' name="volumes" defaultValue={book ? book.volumes : ""} required/>
    //         <label>Notes</label><input className={styling} type='text' name="notes" defaultValue={book ? book.notes : ""}/>
    //         <label>Image link</label><input className={styling} type='text' name="image" defaultValue={book ? book.image : ""} required/>
    //     </>
    // )
}