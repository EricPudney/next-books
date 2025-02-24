"use client";

import { FilterProps } from "../../data/definitions";

export default function Filter(props: FilterProps) {

  return (
    <form className="w-full">
    <select
      id={props.name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={props.onChange}
    >
      <option value={""} key={1}>
        {props.name}
      </option>
      {props.options.map((opt, i) => (
        <option value={opt} key={i + 2}>
          {opt}
        </option>
      ))}
    </select>
  </form>
  );
}