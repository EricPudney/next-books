import { addBook } from "@/app/actions/actions"
import BackButton from "@/app/components/BackButton"
import BookForm from "@/app/components/BookForm"
import UploadButton from "@/app/components/UploadButton"
import returnUserRole from "@/app/lib/session";
import { headingStyle } from "@/app/styles";


export default async function Page() {
    const userRole = await returnUserRole();
    
//     return (
//         <>
//             <h2 className={headingStyle}>Add a new book to the database</h2>
//             <form name="addBook" action={addBook} className="flex flex-col mx-16">
//                 <BookForm book={null}/>
//                 <div className="flex mx-24 mt-4 items-center justify-between">
//                     <BackButton />
//                     <UploadButton active={userRole === "ADMIN"}/>
//                 </div>
//             </form>   
//         </>        
// )
return (
    <main className="min-h-screen pt-20 pb-24 md:pb-6 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {userRole === "ADMIN" ? "Add New Book" : "Sorry..."}
              </h2>
              
               {(userRole === "ADMIN") ? (
                <div className="prose prose-blue">
                  <p className="text-gray-600">
                    Use this form to add a new book to the database. All fields marked with * are required.
                  </p>
                  <div className="mt-4 bg-blue-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Tips for adding books:</h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>Use clear, descriptive titles</li>
                      <li>Check condition carefully</li>
                      <li>Include detailed notes for special editions</li>
                      <li>Verify image links before submitting</li>
                    </ul>
                  </div>
                </div>
              ) : (userRole === "USER") ? (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    I can't let you add or modify books in the collection. That's why the button is greyed out. However, all books in this collection have been added via this form, so I can promise you that everything works as it should! Since you are logged in as a user, you can use the 'Booklist' link above to have a look at the collection.
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    I can't let you add or modify books in the collection. That's why the button is greyed out. However, all books in this collection have been added via this form, so I can promise you that everything works as it should! You will need to create an account or log in in order to look at the collection, but this page shouldn't work for you whatever you do.
                  </p>
                </div>)}

            </div>
          </div>

          <div className="lg:col-span-2">
            <form name="addBook" action={addBook} className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BookForm book={null} />
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <BackButton />
                <UploadButton active={userRole === "ADMIN"}/>
                {/* <button
                  type="submit"
                  disabled={userRole !== "ADMIN"}
                  className={`flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    ${userRole === "ADMIN" 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "bg-gray-400 cursor-not-allowed"}`}
                >
                  {userRole === "ADMIN" ? "Upload Book" : "Admin Only"}
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}