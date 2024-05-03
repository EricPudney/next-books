import { editBook } from "@/app/actions/actions";
import Uploadbutton from "@/app/components/Uploadbutton";
import Backbutton from "@/app/components/Backbutton";
import { fetchBook } from "@/app/data/data";
import BookForm from "@/app/components/BookForm";

export default async function Page({ params }: { params: { id: string } }) {
    const ref = parseInt(params.id);
    const book = await fetchBook(ref);

    return (
        <>
            <h2 className='mb-4 text-xl md:text-2xl mt-16'>Edit book no. {ref}</h2>
            <form name="editedBook" action={editBook} className="flex flex-col mx-16">
                <input type="hidden" name='id' value={ref}/>
                <BookForm />
                <div className="flex mx-24 mt-4 justify-between">
                    <Backbutton />
                    <Uploadbutton />
                </div>
            </form>   
        </>
    )
}