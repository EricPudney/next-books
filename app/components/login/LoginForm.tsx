"use client";

import { FormState } from "../actions/auth";
import { useActionState } from "react";
import { InfoAlert } from "./InfoAlert";

export function LoginForm({
  name,
  func,
}: {
  name: string;
  func: (state: FormState, formData: FormData) => Promise<any>;
}) {
  const [state, action, pending] = useActionState(func, undefined);
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <form action={action} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-600">{state.errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="password"
            name="password"
            type="password"
          />
          {state?.errors?.password && (
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm font-medium text-red-800 mb-2">Password must:</p>
              <ul className="text-sm text-red-700 list-disc list-inside">
                {state.errors.password.map((error: string) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          type="submit"
        >
          {pending ? (
            <span className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            name
          )}
        </button>
        
        {state?.message && (
          <div className="mt-4">
            <InfoAlert title={state.message.title} info={state.message.info} />
          </div>
        )}
      </form>
    </div>
  ); 
  
  
  
  
  
  
  
  // return (
  //   <>
  //     <div className="flex flex-col flex-grow w-full min-w-0 md:mr-12">
  //       <h2 className={headingStyle}>{name}</h2>
  //       <form action={action}>
  //         <div>
  //           <label htmlFor="email">Email</label>
  //           <input
  //             className={inputStyle}
  //             id="email"
  //             name="email"
  //             type="email"
  //             placeholder="Email"
  //           />
  //         </div>
  //         {state?.errors?.email && <p>{state.errors.email}</p>}

  //         <div>
  //           <label htmlFor="password">Password</label>
  //           <input
  //             className={inputStyle}
  //             id="password"
  //             name="password"
  //             type="password"
  //           />
  //         </div>
  //         {state?.errors?.password && (
  //           <div>
  //             <p>Password must:</p>
  //             <ul>
  //               {state.errors.password.map((error: string) => (
  //                 <li key={error}>- {error}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //         <button className={greenButtonStyle} type="submit">
  //           {name}
  //         </button>
  //         {pending && <p>...working...</p>}
  //       </form>
  //     <div className="flex flex-row items-center">
  //         {state?.message && (
  //             <InfoAlert title={state.message.title} info={state.message.info} />
  //         )}
  //     </div>
  //     </div>
  //   </>
  // );
}
