import { ChangeEvent } from "react"

export type Book = {
    id: number,
    title: string, 
    author: string, 
    binding: string,
    condition: string,
    notes: string,
    subject: string,
    value: number,
    date: number,
    volumes: number, 
    image: string
}

export type FilterProps = {
    name: string,
    options: string[],
    onChange: (e: ChangeEvent<HTMLSelectElement>)=>void
}