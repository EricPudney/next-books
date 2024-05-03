import { addBook } from "@/app/actions/actions"
import Backbutton from "@/app/components/Backbutton"
import BookForm from "@/app/components/BookForm"
import Uploadbutton from "@/app/components/Uploadbutton"


export default function Page() {
    return (
        <>
            <h2 className='mb-4 text-xl md:text-2xl mt-16'>Add a new book to the database</h2>
            <form name="addBook" action={addBook} className="flex flex-col mx-16">
                <BookForm />
                <div className="flex mx-24 mt-4 justify-between">
                    <Backbutton />
                    <Uploadbutton />
                </div>
            </form>   
        </>        
)
}