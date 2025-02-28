import BookCarousel from "../components/home/BookCarousel"

import { summaryData } from "../data/data"
import { mainStyle } from "../styles";
import Image from 'next/image';

export default async function Page() {
    const data = await summaryData();

    return (
    <>
    <main className={mainStyle}>
    <div className="max-w-screen-xl mx-auto mt-4">
    {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              About this project
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
              This project - which is still under development - began as a way for me to practice using Next.js and has turned into a portfolio site as I am starting to look for jobs. It presents most of my collection of rare, antique and collectable books. You can look at the books using the 'booklist' link, although you will need to create an account to look at individual books. I have recently added a chatbot which you can talk to via the 'Ask AI' link, although it has an (intentionally) one-track mind.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden bg-blue-100">
            <Image
              src="/bookshelf.jpg"
              alt="Library collection"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Collection Overview
          </h2>
          <BookCarousel data={data} />
        </div>

        {/* Additional Information Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              The Collection
            </h3>
            <p className="text-blue-800">
            The carousel above automatically updates whenever new books are added to the database. The data is fetched using SQL queries executed by a server action against a PostgreSQL database. <a className="text-blue-600 underline" href="https://zod.dev/">Zod</a> is used for schema validation to ensure data integrity. The carousel itself is built with <a className="text-blue-600 underline" href="https://www.npmjs.com/package/react-multi-carousel">react-multi-carousel</a>, which I've found to be an excellent, easy-to-use library. Images for the books are currently linked from a dropbox account, but I plan to migrate them to <a className="text-blue-600 underline" href="https://vercel.com/docs/storage/vercel-blob">Vercel Blob</a> for more efficient storage, faster retrieval, and better integration with the rest of the app.
            </p>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
              Security
            </h3>
            <p className="text-emerald-800">
              I have implemented authentication and authorisation using <a className="text-blue-600 underline" href="https://jose.readthedocs.io/en/latest/">JOSE</a>, with passwords hashed and salted using bcrypt before being stored in the database. Creating an account only requires an email and password — the email must be in a valid format but will not be used for any purpose, so it doesn't need to be your real address. Sessions are not currently renewed and expire after 7 days; tokens are signed but not encrypted since they contain no sensitive information. I am looking into adding oauth login via GitHub and Google as well.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              Layout & Design
            </h3>
            <p className="text-purple-800">
            I am comfortable implementing designs, but I don't consider myself to be a designer. The overall look of this site was AI-assisted, with most of the visual design generated by Claude.AI — although I've drawn inspiration from other sources as well. I'm currently refactoring the AI-generated HTML and CSS into more readable and reusable React components.
            </p>
          </div>
        </div>
      </div>
    </main>
  </>)
}
