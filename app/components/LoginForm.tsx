"use client";

import { FormState } from "../actions/auth";
import { useActionState } from "react";
import { InfoAlert } from "./InfoAlert";
import { greenButtonStyle, headingStyle, inputStyle } from "../styles";

export function LoginForm({
  name,
  func,
}: {
  name: string;
  func: (state: FormState, formData: FormData) => Promise<any>;
}) {
  const [state, action, pending] = useActionState(func, undefined);
  
  return (
    <>
      <div className="flex flex-col flex-grow md:mr-12">
        <h2 className={headingStyle}>{name}</h2>
        <form action={action}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={inputStyle}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}

          <div>
            <label htmlFor="password">Password</label>
            <input
              className={inputStyle}
              id="password"
              name="password"
              type="password"
            />
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error: string) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <button className={greenButtonStyle} type="submit">
            {name}
          </button>
          {pending && <p>...working...</p>}
          {state?.message && (
            <InfoAlert title={state.message.title} info={state.message.info} />
          )}
        </form>
      </div>
    </>
  );
}
