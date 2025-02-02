'use client'

import { register } from "../actions/auth";
import { useActionState } from "react";

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, undefined);
  const styling = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

  return (
    <form action={action}>
      <div>
        <label htmlFor="email">Email</label>
        <input className={styling} id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input className={styling} id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white text-sm my-1 py-0.5 pr-2 pl-2 rounded" type="submit">Register</button>
      {pending && <p>...working...</p>}
    </form>
  );
}
