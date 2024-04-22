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
  
  export async function summaryData() {
    noStore()
    try {
      const data = await sql`
      SELECT COUNT(id) AS Number,
      MIN(date) AS Oldest,
      MAX(value) AS Most_expensive,
      AVG(value) AS Average_price FROM books;`
      const TotalNumberOfBooks = data.rows[0].number;
      const OldestBook = data.rows[0].oldest;
      const MostExpensiveBook = data.rows[0].most_expensive;
      const AveragePrice = data.rows[0].average_price;
      return {TotalNumberOfBooks, OldestBook, MostExpensiveBook, AveragePrice}
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch book.');
    }

  }
