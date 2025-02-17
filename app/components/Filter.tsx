'use client'

import { FilterProps } from "../data/definitions"

export default function Filter(props: FilterProps) {
  return (
    <>
      <select
        onChange={props.onChange}
        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
    </>
  );
}
