import { ChangeEvent, Dispatch, SetStateAction } from "react"

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
    paramName: string,
    type: string,
    setType: Dispatch<SetStateAction<string>>
}

export const DateFilterValue: string[] = 
    ['1500s',
    '1600s',
    '1700s',
    '1800s',
    '1900s']

export const ValueFilterValue: string[] = 
    ['<250 SEK', 
    '250-500 SEK', 
    '500-1000 SEK', 
    '1000-2000 SEK', 
    '2000 SEK+']

export const SubjectFilterValue: string[] = [
    'Poetry', 
    'Drama', 
    'Literature', 
    'History', 
    'Philosophy', 
    'Science', 
    'Theology'
]
