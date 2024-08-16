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
    options: string[] | NumericFilter,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

type NumericFilter = {[value: string]: {min?: number, max?: number}}

export const DateFilterValue: NumericFilter = 
    {'1600s and earlier': {max: 1699},
    '1700s': {min: 1700, max: 1799},
    '1800s': {min: 1800, max: 1899},
    '1900s and later': {min: 1900}}

export const ValueFilterValue: NumericFilter = 
    {'Up to 250 SEK': {max: 250}, 
    '250-500 SEK': {min: 250, max: 500}, 
    '500-1000 SEK': {min: 500, max: 1000}, 
    '1000-2000 SEK': {min: 1000, max: 2000}, 
    '2000 SEK+': {min: 2000}}

export const SubjectFilterValue: string[] = [
    'Poetry', 
    'Drama', 
    'Literature', 
    'History', 
    'Philosophy', 
    'Science', 
    'Theology'
]
