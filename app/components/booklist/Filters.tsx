"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  DateFilterValues,
  FilterProps,
  SubjectFilterValues,
  ValueFilterValues,
} from "../../data/definitions";
import { useState } from "react";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [date, setDate] = useState("")
  const [value, setValue] = useState("")
  const [subject, setSubject] = useState("")
  
  const filters = [{name: "date", options: DateFilterValues, type: date, setType: setDate}, 
    {name: "value", options: ValueFilterValues, type: value, setType: setValue}, 
    {name: "subject", options: SubjectFilterValues, type: subject, setType: setSubject}
  ]

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    router.push(`/home/booklist?${newParams.toString()}`);
  };
  

  function Filter({name, options, type, setType}: FilterProps) {
    
    return (
      <form className="w-full">
      <select
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setType(e.target.value);
          handleFilterChange(name, e.target.value);
        }}
        value={type}
      >
        <option value={""} key={1}>
          {"Filter by " + name}
        </option>
        {options.map((opt, i) => (
          <option value={opt} key={i + 2}>
            {opt}
          </option>
        ))}
      </select>
    </form>
    );
  }

  return (
    <>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filters.map((filter) => <Filter name={filter.name} options={filter.options} type={filter.type} setType={filter.setType} key={filter.name}/>)}
          <button type="button"
          className="md:col-start-3 justify-self-end px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-1 focus:ring-red-300 self-center" onClick={()=>{
            setDate("")
            setValue("")
            setSubject("")
            router.push("/home/booklist")
          }}>Reset Filters</button>
        </div>
      </div>
    </>
  );
}
