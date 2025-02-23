import { login, register } from "@/app/actions/auth";
import FeaturedBook from "@/app/components/login/FeaturedBook";
import { LoginForm } from "@/app/components/login/LoginForm";
import { getRandomBooks } from "@/app/data/data";
import returnUserRole from "@/app/lib/session";
import Image from "next/image";

import { Suspense } from "react";

export default async function Page() {
  const userRole = await returnUserRole();

  // generated code from Claude.ai. Only I will see this in the front end so replacing it is not a priority
  if (userRole === "ADMIN") {
    return (
      <main className="min-h-screen pt-20 pb-24 md:pb-6 px-4 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hi Eric</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Collection Stats</h3>
                <p className="text-blue-700">Your book collection is growing!</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Recent Activity</h3>
                <p className="text-green-700">Latest updates and changes</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Quick Actions</h3>
                <p className="text-purple-700">Manage your collection</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  
  if (userRole === "USER") {
    const bookData = await getRandomBooks(3);
    return (
      <main className="min-h-screen pt-20 pb-24 md:pb-6 px-4 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello there.</h2>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 leading-relaxed">
                You are currently signed in with standard user access. This means you can have a closer 
                look at individual books in the collection, but you are still not allowed to edit or 
                upload books. Only I get to do that, for obvious reasons. Below this are three books from my collection. These are picked at random each time you log in from the database.
              </p>
              
              {/* Featured Books Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Books</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {bookData.map((book) => {
                    return <FeaturedBook key={book.id} title={book.title} text={book.notes} link={book.image} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-24 md:pb-6 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column with welcome message and decoration */}
          <div className="hidden md:flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
            <p className="text-gray-600 mb-8">Create an account or log in here. Passwords are hashed before storage using bcrypt (HS256 algorithm).</p>
            
            {/* Decorative Element */}
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform -rotate-6"></div>
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <Image
                  src="/bookshelf.jpg"
                  alt="Decorative book illustration"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right column with forms */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="space-y-8">
              <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
                <LoginForm name="Register" func={register} />
              </Suspense>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
                <LoginForm name="Login" func={login} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}