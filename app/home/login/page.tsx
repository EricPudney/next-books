import { LoginForm } from "@/app/components/Login";
import { RegisterForm } from "@/app/components/Register";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <Suspense>
        <RegisterForm />
      </Suspense>

      <Suspense>
        <LoginForm />
      </Suspense>
    </>
  );
}
