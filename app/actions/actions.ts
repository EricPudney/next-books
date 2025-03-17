'use server'

import { sql } from "@vercel/postgres";
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { put } from '@vercel/blob';


const TempFormSchema = z.object({
         id: z.coerce.number(), 
         title: z.string(),
         author: z.string(),
         subject: z.string(),
         binding: z.string(),
         condition: z.string(),
         value: z.coerce.number(),
         date: z.coerce.number(),
         volumes: z.coerce.number(),
         notes: z.string(),
         image: z.coerce.string()
     });


export async function editBook(formData: FormData) {

    const tempForm = Object.fromEntries(formData.entries());
    const editedBook = TempFormSchema.parse(tempForm);
    const imageLink = editedBook.image.replace("dl=0", "raw=1");

    await sql`
    UPDATE books
    SET title = ${editedBook.title}, 
    author = ${editedBook.author}, 
    subject = ${editedBook.subject}, 
    binding = ${editedBook.binding}, 
    condition = ${editedBook.condition},
    value = ${editedBook.value},
    date = ${editedBook.date},
    volumes = ${editedBook.volumes},
    notes = ${editedBook.notes},
    image = ${imageLink}
    WHERE Id = ${editedBook.id};
    `
    revalidatePath('/home/booklist');
    redirect(`/home/book/${editedBook.id}`);
}

const NewBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    subject: z.string(),
    binding: z.string(),
    condition: z.string(),
    value: z.coerce.number(),
    date: z.coerce.number(),
    volumes: z.coerce.number(),
    notes: z.string(),
})

export async function addBook(formData: FormData) {
    const imageFile = formData.get('image') as File;
    const blob = await addImage(imageFile)
    const addForm = Object.fromEntries(formData.entries());
    const newBook = NewBookSchema.parse(addForm);

    await sql`
    INSERT INTO books (title, author, subject, binding, condition, value, date, volumes, notes, image)
    VALUES (${newBook.title}, 
        ${newBook.author}, 
        ${newBook.subject}, 
        ${newBook.binding}, 
        ${newBook.condition},
        ${newBook.value},
        ${newBook.date},
        ${newBook.volumes},
        ${newBook.notes},
        ${blob.url})
    `

    revalidatePath('/home/booklist');    
    redirect('/home/booklist');    
}

async function addImage(image: File) {
    const blob = await put(image.name, image, {
      access: 'public',
    });
    return blob;
}