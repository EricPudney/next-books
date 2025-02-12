import { LoginForm } from "@/app/components/Login";
import { RegisterForm } from "@/app/components/Register";

export default async function Page() {
  return (
    <>
      <RegisterForm />

      <LoginForm />

    </>
  );
}
