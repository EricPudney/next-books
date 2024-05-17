import Backbutton from "@/app/components/Backbutton";
import Bookinfo from "@/app/components/Bookinfo"
import Editbutton from "@/app/components/Editbutton";
import { fetchBook } from "@/app/data/data";

export default async function Page({ params }: { params: { id: string } }) {
    const ref = parseInt(params.id);
    const response = await fetchBook(ref)
    const currentBook = response
    return (
        <main className="flex max-h-min flex-col items-center justify-between p-24">
            <div className="flex w-full flex-col md:col-span-4">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <Bookinfo book={currentBook} />
            <div className="flex flex-wrap items-center justify-evenly">
                <Backbutton />
                <Editbutton book={currentBook}/>
            </div>
            </div>
            </div>
        </main>
    )
    
}

