'use server'

import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';

 
const RegistrationFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})
 
type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export async function register(state: FormState, formData: FormData) {
  const validatedFields = RegistrationFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
    
  

// 2. Prepare data for insertion into database
const { email, password } = validatedFields.data
// e.g. Hash the user's password before storing it
const hashedPassword = await bcrypt.hash(password, 10)

// 3. Insert the user into the database or call an Auth Library's API
await sql`
  INSERT INTO users (email, password)
    VALUES (${email}, 
        ${hashedPassword})`

}
// 4. Create user session
// 5. Redirect user


export async function login(formData: FormData) {
}