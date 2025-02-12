import { editBook } from "@/app/actions/actions";
import UploadButton from "@/app/components/UploadButton";
import Backbutton from "@/app/components/BackButton";
import { fetchBook } from "@/app/data/data";
import BookForm from "@/app/components/BookForm";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const ref = parseInt(params.id);
    const book = await fetchBook(ref);

    return (
        <>
            <h2 className='mb-4 text-xl md:text-2xl mt-16'>Edit book no. {ref}</h2>
            <form name="editedBook" action={editBook} className="flex flex-col mx-16">
                <input type="hidden" name='id' value={ref}/>
                <BookForm book={book} />
                <div className="flex mx-24 mt-4 justify-between">
                    <Backbutton />
                    <UploadButton active={true}/>
                </div>
            </form>   
        </>
    )
}