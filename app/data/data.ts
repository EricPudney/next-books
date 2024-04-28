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
      const book = data.rows[0];
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
      MIN(date) AS oldest,
      MAX(value) AS most_expensive,
      MIN(value) AS least_expensive,
      AVG(value) AS average_price,
      AVG(date) AS average_date FROM books;
      `
      const TotalNumberOfBooks = data.rows[0].number;
      const OldestBook = data.rows[0].oldest;
      const MostExpensiveBook = data.rows[0].most_expensive;
      const CheapestBook = data.rows[0].least_expensive;
      const AveragePrice = Math.round(data.rows[0].average_price);
      const AverageDate = Math.round(data.rows[0].average_date);
      return {TotalNumberOfBooks, OldestBook, MostExpensiveBook, CheapestBook, AveragePrice, AverageDate}
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch book.');
    }

  }
