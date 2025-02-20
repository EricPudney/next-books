"use client";
import { useState } from "react";
import { FilterProps } from "../data/definitions";

const options = ["Option 1", "Option 2", "Option 3"];

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
    // <form className="max-w-sm mx-auto">
    //   <select
    //     id={props.name}
    //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //     onChange={props.onChange}
    //   >
    //     <option value={""} key={1}>
    //       {props.name}
    //     </option>
    //     {props.options.map((opt, i) => (
    //       <option value={opt} key={i + 2}>
    //         {opt}
    //       </option>
    //     ))}
    //   </select>
    // </form>
  );
}

{
  /* <select
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
      </select> */
}
//   </>
// );

//const Filter = ({ name, options, onChange }) => {
//};



  


// const FilterContainer = () => {
//   // Your existing handlers and data would go here
//   const handleFilterChange = (type, value) => {
//     console.log(type, value);
//   };
  
//   // Sample data for demonstration
//   const dates = ["2024", "2023"];
//   const values = ["High", "Medium", "Low"];
//   const subjects = ["Math", "Science"];

//   return (
    
//   );
// };

// export default FilterContainer;