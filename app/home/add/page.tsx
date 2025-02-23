import { addBook } from "@/app/actions/actions"
import BackButton from "@/app/components/buttons/BackButton"
import BookForm from "@/app/components/BookForm"
import UploadButton from "@/app/components/buttons/UploadButton"
import returnUserRole from "@/app/lib/session";


export default async function Page() {
    const userRole = await returnUserRole();
    
return (
    <main className="pt-20 pb-24 md:pb-6 px-4 bg-gray-50 overflow-hidden">
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
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Hi Eric. Add a book!</h3>
                    
                  </div>
                </div>
              ) : (userRole === "USER") ? (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    This form is for adding new books to the database; since you are not logged in as me (I am the only user with admin rights) the upload button is greyed out. However, all books in this collection have been added via this form, so I can promise you that everything works as it should! Since you are logged in as a user, you can look at individual books in the collection as well as the list of books via the booklist page.
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                  This form is for adding new books to the database; since you are not logged in as me the upload button is greyed out. However, all books in this collection have been added via this form, so I can promise you that everything works as it should! You will need to create an account or log in in order to look individual items in the collection, but even without logging in, you can look at the booklist page and check that the filters work. Filtering and rendering of the list is done on the server side in this app.
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}