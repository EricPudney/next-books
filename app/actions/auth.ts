'use server'

import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { sql } from "@vercel/postgres";
import { createSession } from './session';

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
 
export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: {
        title?: string,
        info?: string
      }
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
    
  try {
    const { email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, 
    ${hashedPassword})
    RETURNING *`

    await createSession(user.rows[0].id, user.rows[0].role)

    return { message: {title: 'Success!', info: 'You have successfully registered an account and are now logged in.'}};
  } 
  catch (error) {
    console.error('Registration error: ', error);
    return { 
      message: {title: 'Oops!', info: 'An unexpected error occurred during registration. This has never happened as far as I know, so I hope you\u0027re not seeing this.' }
    };
  }
}

export async function login(state: FormState, formData: FormData) {  
  const credentials = RegistrationFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!credentials.success) {
    return {
      errors: credentials.error.flatten().fieldErrors,
    }
  }

  const { email, password } = credentials.data

  const user = await sql`
    SELECT * FROM users
    WHERE email = ${email}`

  if (user.rows.length === 0) {
    return { message: {title: "Error", info: "Unable to log in - email address not found."}}
  }
  
  const authenticated: boolean = await bcrypt.compare(password, user.rows[0].password)
  if (!authenticated) {
    return { message: {title: "Error", info: "Unable to log in - please check your password and try again."}}
  }
  
  await createSession(user.rows[0].id, user.rows[0].role)
  return { message: {title: 'Success!', info: 'You have successfully logged in! Welcome back.'} };
}
