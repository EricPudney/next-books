import { addBook } from "@/app/actions/actions"
import BackButton from "@/app/components/BackButton"
import BookForm from "@/app/components/BookForm"
import UploadButton from "@/app/components/UploadButton"
import returnUserRole from "@/app/lib/session";


export default async function Page() {
    const userRole = await returnUserRole();
    
    return (
        <>
            <h2 className='mb-4 text-xl md:text-2xl mt-16'>Add a new book to the database</h2>
            <form name="addBook" action={addBook} className="flex flex-col mx-16">
                <BookForm book={null}/>
                <div className="flex mx-24 mt-4 items-center justify-between">
                    <BackButton />
                    <UploadButton active={userRole === "ADMIN"}/>
                </div>
            </form>   
        </>        
)
}