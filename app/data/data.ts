import { sql } from "@vercel/postgres";
import { Book } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchBooks(filters: { [key: string]: string }) {
  noStore()
    try {
      const data = await sql<Book>`
        SELECT * FROM books;`
      const books = data.rows;

      if (Object.keys(filters).length === 0) {
        return books;
      }
      
      const dateRange = (() => {
        switch (filters?.date) {
          case "1500s":
            return {min: 0, max: 1599};
          case "1600s":
            return {min: 1600, max: 1699};
          case "1700s":
            return {min: 1700, max: 1799};
          case "1800s":
            return {min: 1800, max: 1899};
          case "1900s":
            return {min: 1900, max: 2099};
          default:
            return null;
        }
      })();      

      const valueRange = (() => {
        switch(filters?.value) {
          case "<250 SEK":
            return {min: 0, max: 250};
          case "250-500 SEK":
            return {min: 250, max: 500};
          case "500-1000 SEK":
            return {min: 500, max: 1000};
          case "1000-2000 SEK":
            return {min: 1000, max: 2000};
          case "2000 SEK+":
            return {min: 2000, max: 250000};
          default:
            return null;
        }})();

      const subject = filters?.subject;
      let dateFilteredBooks = books;
      let valueFilteredBooks = books;
      let subjectFilteredBooks = books;
      if (dateRange) {
        dateFilteredBooks = books.filter((book) => {
          return book.date > dateRange.min && book.date < dateRange.max
        })
      }
      if (valueRange) {
        valueFilteredBooks = books.filter((book) => {
          return book.value > valueRange.min && book.value < valueRange.max
        })
      }
      if (subject?.length > 0) {
        subjectFilteredBooks = books.filter((book) => {
          return book.subject.includes(subject)
        })
      }
      const returnedBooks = books.filter((book) => {
        return dateFilteredBooks.includes(book) && valueFilteredBooks.includes(book) && subjectFilteredBooks.includes(book)
      })
      return returnedBooks;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch books.');
    }
  }

  
    // let query = db.items.findMany({ where: {} });
  
    // if (filters.category) {
    //   query.where.category = filters.category;
    // }
  
    // if (filters.price) {
    //   query.where.price = { lte: parseFloat(filters.price) };
    // }
  
    // return query;
  
  
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
      SELECT COUNT(id) AS number,
      SUM(volumes) AS number_vols,
      MIN(date) AS oldest,
      MAX(value) AS most_expensive,
      MAX(value / volumes) AS most_expensive_vol,
      MIN(value) AS least_expensive,
      AVG(value) AS average_price,
      SUM(value) / SUM(volumes) AS average_price_vol,
      SUM(value) AS total_price,
      AVG(date) AS average_date FROM books;
      `
      const TotalNumberOfEntries = data.rows[0].number;
      const TotalNumberOfVols = data.rows[0].number_vols;
      const OldestBook = data.rows[0].oldest;
      const MostExpensiveEntry = data.rows[0].most_expensive;
      const MostExpensiveVolume = data.rows[0].most_expensive_vol;
      const CheapestEntry = data.rows[0].least_expensive;
      const AveragePrice = Math.round(data.rows[0].average_price);
      const AveragePriceVolume = Math.round(data.rows[0].average_price_vol);
      const TotalPrice = data.rows[0].total_price;
      const AverageDate = Math.round(data.rows[0].average_date);
      return [{text: 'Total number of entries in the collection:', value: TotalNumberOfEntries}, 
              {text: 'Total number of volumes in the collection:', value: TotalNumberOfVols}, 
              {text: 'Oldest book in the collection printed in:', value: OldestBook}, 
              {text: 'Most expensive entry in the collection (SEK):', value: MostExpensiveEntry}, 
              {text: 'Most expensive single volume in the collection (SEK):', value: MostExpensiveVolume}, 
              {text: 'Least expensive entry in the collection (SEK):', value: CheapestEntry}, 
              {text: 'Average value of entries in the collection (SEK):', value: AveragePrice}, 
              {text: 'Average value of volumes in the collection (SEK):', value: AveragePriceVolume}, 
              {text: 'Total value of books in the collection (SEK):', value: TotalPrice}, 
              {text: 'Average date of publication in the collection:', value: AverageDate}]
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch summary data.');
    }

  }
