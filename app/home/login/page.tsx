import { login, register } from "@/app/actions/auth";
import { LoginForm } from "@/app/components/LoginForm";
import returnUserRole from "@/app/lib/session";
import { headingStyle } from "@/app/styles";
import { Suspense } from "react";

export default async function Page() {
  const userRole = await returnUserRole();

  if (userRole === "ADMIN") {
    return (
      <>
      <h2 className={headingStyle}>Hi Eric</h2>
      </>
    )
  }
  if (userRole === "USER") {
    return (
      <>
      <h2 className={headingStyle}>Hello there.</h2>
      <p>You are currently signed in with standard user access. This means you can have a closer look at individual books in the collection, but you are still not allowed to edit or upload books. Only I get to do that, for obvious reasons.</p>
      </>
    )
  }
  return (
    <>
    <div className="flex flex-col md:flex-row">
      <Suspense>
      <LoginForm name={"Register"} func={register}/>
      </Suspense>

      <Suspense>
        <LoginForm name={"Login"} func={login}/>
      </Suspense>
    </div>
    </>
  );
}
