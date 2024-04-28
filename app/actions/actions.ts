'use server'

import { sql } from "@vercel/postgres";
// import { Book } from "../data/definitions";
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";


const TempFormSchema = z.object({
         id: z.coerce.number(), 
         title: z.string(),
         author: z.string(),
         subject: z.string(),
         binding: z.string(),
         condition: z.string(),
         value: z.coerce.number(),
         date: z.coerce.number(),
         notes: z.string(),
         image: z.coerce.string()
     });

const NewBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    subject: z.string(),
    binding: z.string(),
    condition: z.string(),
    value: z.coerce.number(),
    date: z.coerce.number(),
    notes: z.string(),
    image: z.string()
})

export async function editBook(formData: FormData) {

    const tempForm = Object.fromEntries(formData.entries());
    const editedBook = TempFormSchema.parse(tempForm);
    const imageLink = editedBook.image.replace("dl=0", "raw=1");

    // console.log(editedBook)
    const result = await sql`
    UPDATE books
    SET title = ${editedBook.title}, 
    author = ${editedBook.author}, 
    subject = ${editedBook.subject}, 
    binding = ${editedBook.binding}, 
    condition = ${editedBook.condition},
    value = ${editedBook.value},
    date = ${editedBook.date},
    notes = ${editedBook.notes},
    image = ${imageLink}
    WHERE Id = ${editedBook.id};
    `
    console.log(result);
    revalidatePath('/home/booklist');
    redirect(`/home/booklist`);
}

export async function addBook(formData: FormData) {
    const addForm = Object.fromEntries(formData.entries());
    const newBook = NewBookSchema.parse(addForm);
    const imageLink = newBook.image.replace("dl=0", "raw=1");

    const result = await sql`
    INSERT INTO books (title, author, subject, binding, condition, value, date, notes, image)
    VALUES (${newBook.title}, 
        ${newBook.author}, 
        ${newBook.subject}, 
        ${newBook.binding}, 
        ${newBook.condition},
        ${newBook.value},
        ${newBook.date},
        ${newBook.notes},
        ${imageLink})
    `
    console.log(result);
    revalidatePath('/home/booklist');
    redirect(`/home/booklist`);

}
