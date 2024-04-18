import { sql } from "@vercel/postgres";
import { Book } from "./definitions";

export async function fetchAllBooks() {
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

