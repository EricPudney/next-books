import { login, register } from "@/app/actions/auth";
import { LoginForm } from "@/app/components/LoginForm";
import { Suspense } from "react";

export default async function Page() {
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
