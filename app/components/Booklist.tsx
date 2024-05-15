'use server'

import { fetchAllBooks } from "@/app/data/data"


    const listBooks = async () => await fetchAllBooks()
    .then((res) => {return(res)})
    
    export default listBooks;
