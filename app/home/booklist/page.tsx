'use client'

import Link from "next/link";
import { Book } from "@/app/data/definitions";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, useEffect, useState } from "react";
import Filter from "@/app/components/Filter";
import listBooks from "@/app/components/Booklist";

export default function Page() {

const [booklist, setBooklist] = useState<Book[]>([])
const [tempArray, setTempArray] = useState<Book[]>([])
const [dateFilter, setDateFilter] = useState({min: -1, max: -1})
const [valueFilter, setValueFilter] = useState({min: -1, max: -1})
const [subjectFilter, setSubjectFilter] = useState('')

useEffect(() => {
    const fetch = async () => {
    const books = await listBooks()
    setBooklist(books) 
  }
  fetch();
}, [])

useEffect(() => {
  setTempArray(booklist)
}, [booklist])

useEffect(() => {
  applyFilters(subjectFilter, dateFilter, valueFilter)
}, [dateFilter, valueFilter, subjectFilter])

    function filterByDate(e: ChangeEvent<HTMLSelectElement>) {
        const filterValue = e.target.value;
        switch (filterValue) {
          case '1600s and earlier':
            setDateFilter({min: 0, max: 1699})
            break;
          case '1700s':
            setDateFilter({min: 1700, max: 1799})
            break;
          case '1800s':
            setDateFilter({min: 1800, max: 1899})    
            break;
          case '1900s and later':
            setDateFilter({min: 1900, max: 2500})
            break;
          default:
            setDateFilter({min: -1, max: -1})
          }
    }

    function filterByValue(e: ChangeEvent<HTMLSelectElement>) {
      const filterValue = e.target.value;
      switch (filterValue) {
        case 'Up to 250 SEK':
          setValueFilter({min: 0, max: 250})    
          break;
        case '250-500 SEK':
          setValueFilter({min: 250, max: 500})    
          break;
        case '500-1000 SEK':
          setValueFilter({min: 500, max: 1000})    
          break;
        case '1000-2000 SEK':
          setValueFilter({min: 1000, max: 2000})    
          break;
        case '2000 SEK+':
          setValueFilter({min: 2000, max: 15000})
          break;
        default:
          setValueFilter({min: -1, max: -1})
      }    
    }
    
    function filterBySubject(e: ChangeEvent<HTMLSelectElement>) {
      setSubjectFilter(e.target.value)
    }

    function applyFilters(subjectFilter: string, dateFilter: {min: number, max: number}, valueFilter: {min: number, max: number}) {
      let booksSubj: Book[] = booklist
      booksSubj = subjectFilter !== '' ? booksSubj.filter((book) => book.subject.toLowerCase().includes(subjectFilter.toLowerCase())) : booksSubj;
      let booksDate: Book[] = booklist
      booksDate = dateFilter.min !== -1 ? booksDate.filter((book) => book.date > dateFilter.min) : booksDate;
      booksDate = dateFilter.max !== -1 ? booksDate.filter((book) => book.date < dateFilter.max) : booksDate;
      let booksValue: Book[] = booklist;
      booksValue = valueFilter.min !== -1 ? booksValue.filter((book) => book.value > valueFilter.min): booksValue;
      booksValue = valueFilter.max !== -1 ? booksValue.filter((book) => book.value < valueFilter.max) : booksValue;
      const newBooklist: Book[] = booklist.filter((book) => booksSubj.includes(book) && booksDate.includes(book) && booksValue.includes(book))
      setTempArray(newBooklist)
    }

return(
<div className="flex w-full flex-col md:col-span-4 mt-16">
      <h2 className='mb-4 text-xl md:text-2xl'>
        Books
      </h2>
      <div className="flex flex-wrap justify-evenly items-center mb-4">
        <Filter name={'Filter by date'} options={['1600s and earlier', '1700s', '1800s', '1900s and later']} onChange={filterByDate} />
        <Filter name={'Filter by value'} options={['Up to 250 SEK', '250-500 SEK', '500-1000 SEK', '1000-2000 SEK', '2000 SEK+']} onChange={filterByValue} />
        <Filter name={'Filter by subject'} options={['Poetry', 'Drama', 'Literature', 'History', 'Philosophy', 'Science']} onChange={filterBySubject} />
      </div>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

          <div className="flex flex-wrap items-center justify-evenly">
          {booklist && tempArray.map((book) => {
              return (
              <div key={book.id} className="bg-white px-3 mx-2 my-2 w-48 h-28 rounded-lg">
                  
                    <p className="truncate text-md font-semibold md:text-base my-1">
                      {book.title}
                    </p>
                    <p className="truncate text-sm text-gray-500 sm:block mb-1">
                      {book.author}
                    </p>
                <div className="flex justify-between">
                <p
                  className='truncate text-xs xs:block'
                  >
                  {book.value} SEK
                </p>
                <p className='truncate text-xs xs:block'>printed {book.date}</p>
                </div>
                <Link className="flex items-center justify-evenly" href={`/home/book/${book.id}`}>
                  <button className="flex items-center bg-orange-500 hover:bg-orange-800 text-white text-sm my-1 py-0.5 px-2 rounded">
                    <BookOpenIcon className="h-6 w-6"/>
                    <span>More</span>
                  </button>
                </Link>
        </div> 
            );
        })}
        </div>
      </div>
    </div>
    )
}