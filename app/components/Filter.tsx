'use client'

import { FilterProps } from "../data/definitions"

export default function Filter(props: FilterProps) {
    return(
        <>
        <select onChange={props.onChange}>
        <option value={''}>{props.name}</option>
        {props.options.map((opt)=><option value={opt}>{opt}</option>)}
        </select>
        </>
    )
}