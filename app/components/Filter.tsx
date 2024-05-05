'use client'

import { FilterProps } from "../data/definitions"

export default function Filter(props: FilterProps) {
    return(
        <>
        <select onChange={props.onChange}>
        <option value={''} key={1}>{props.name}</option>
        {props.options.map((opt, i)=><option value={opt} key={i+2}>{opt}</option>)}
        </select>
        </>
    )
}