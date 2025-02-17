"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Filter from "./Filter";
import { DateFilterValue, SubjectFilterValue, ValueFilterValue } from "../data/definitions";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    router.push(`/home/booklist?${newParams.toString()}`);
  };

  const dates = DateFilterValue;
  const values = ValueFilterValue;
  const subjects = SubjectFilterValue;

  return (
    <>
    <Filter name={"Filter by date"} options={dates} onChange={(e) => handleFilterChange("date", e.target.value)}/>
    <Filter name={"Filter by value"} options={values} onChange={(e) => handleFilterChange("value", e.target.value)}/>
    <Filter name={"Filter by subject"} options={subjects} onChange={(e) => handleFilterChange("subject", e.target.value)}/>
    </>
  );
}
