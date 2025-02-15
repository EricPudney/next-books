'use client'

import Link from "next/link";
import { Book } from "@/app/data/definitions";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, useEffect, useState } from "react";
import Filter from "@/app/components/Filter";
import { DateFilterValue, ValueFilterValue, SubjectFilterValue } from "@/app/data/definitions";
import listBooks from "@/app/components/Booklist";
import { bookDetailsButtonStyle } from "@/app/styles";

export default function Page() {

const [booklist, setBooklist] = useState<Book[]>([])
const [tempArray, setTempArray] = useState<Book[]>([])
const [dateFilter, setDateFilter] = useState<undefined | {}>(undefined)
const [valueFilter, setValueFilter] = useState<undefined | {}>(undefined)
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
        const { value } = e.target;
        DateFilterValue[value] ? setDateFilter(DateFilterValue[value]) : setDateFilter(undefined)
    }

    function filterByValue(e: ChangeEvent<HTMLSelectElement>) {
      const { value } = e.target;
      ValueFilterValue[value] ? setValueFilter(ValueFilterValue[value]) : setValueFilter(undefined)
    }
    
    function filterBySubject(e: ChangeEvent<HTMLSelectElement>) {
      setSubjectFilter(e.target.value)
    }

    function applyFilters(
      subjectFilter: string, 
      dateFilter: undefined | {min?: number, max?: number}, 
      valueFilter: undefined | {min?: number, max?: number}
    ) {
      let booksSubj: Book[] = booklist
      booksSubj = subjectFilter !== '' ? booksSubj.filter((book) => book.subject.toLowerCase().includes(subjectFilter.toLowerCase())) : booksSubj;
      
      let booksDate: Book[] = booklist
      if (dateFilter) {
        if (dateFilter.min) {booksDate = booksDate.filter((book) => book.date > dateFilter!.min!)}
        if (dateFilter.max) {booksDate = booksDate.filter((book) => book.date < dateFilter!.max!)} 
      } 
      
      let booksValue: Book[] = booklist;
      if (valueFilter) {
        if (valueFilter.min) {booksValue = booksValue.filter((book) => book.value > valueFilter!.min!)} 
        if (valueFilter.max) {booksValue = booksValue.filter((book) => book.value < valueFilter!.max!)} 
      }

      const newBooklist: Book[] = booklist.filter((book) => booksSubj.includes(book) && booksDate.includes(book) && booksValue.includes(book))
      setTempArray(newBooklist)
    }

return(
<div className="flex w-full flex-col mt-16">
      <h2 className='mb-4 text-xl md:text-2xl'>
        Books
      </h2>
      <div className="flex flex-wrap flex-col justify-evenly items-center mb-4 gap-2 md:flex-row">
        <Filter name={'Filter by date'} options={DateFilterValue} onChange={filterByDate} />
        <Filter name={'Filter by value'} options={ValueFilterValue} onChange={filterByValue} />
        <Filter name={'Filter by subject'} options={SubjectFilterValue} onChange={filterBySubject} />
      </div>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

          <div className="flex flex-wrap items-center justify-evenly">
          {booklist.length > 0 && tempArray.map((book) => {
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
                  <button className={bookDetailsButtonStyle}>
                    <BookOpenIcon className="h-6 w-6"/>
                    <span>More</span>
                  </button>
                </Link>
        </div> 
            );
        })}
        {booklist.length < 1 && <p>Loading...</p>}
        </div>
      </div>
    </div>
    )
}