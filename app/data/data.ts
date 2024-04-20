import { sql } from "@vercel/postgres";
import { Book } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchAllBooks() {
  noStore()
    try {
      const data = await sql<Book>`
        SELECT * FROM books;`
      const books = data.rows;
      return books;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch books.');
    }
  }
  
  export async function fetchBook(id: number) {
  noStore()
    try {
      const data = await sql<Book>`
        SELECT * FROM books WHERE Id = ${id};`
      const book = data.rows;
      return book;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch book.');
    }
  }
