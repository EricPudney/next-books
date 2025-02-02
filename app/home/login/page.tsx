import { RegisterForm } from "@/app/components/Register";
import { Suspense } from "react";

export default function Page() {

  return (
    <>
      <h2 className="mb-4 text-xl md:text-2xl mt-16">Register</h2>
        <div>
        <Suspense>
            <RegisterForm/>
        </Suspense>
      </div>

      <h2 className="mb-4 text-xl md:text-2xl mt-16">Login</h2>
        <div>
        <Suspense>
            // add Login component here
        </Suspense>
      </div>
    </>
  );
}
