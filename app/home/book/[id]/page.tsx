import Backbutton from "@/app/components/BackButton";
import Bookinfo from "@/app/components/Bookinfo"
import EditButton from "@/app/components/EditButton";
import { fetchBook } from "@/app/data/data";
import returnUserRole from "@/app/lib/session";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const ref = parseInt(params.id);
    const response = await fetchBook(ref);
    const currentBook = response;
    const userRole = await returnUserRole();

    return (
        <main className="flex max-h-min flex-col items-center justify-between xs:p-12 lg:p-24 mt-12">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <Bookinfo book={currentBook} />
            <div className="flex flex-wrap items-center justify-evenly">
                <Backbutton />
                <EditButton book={currentBook} active={userRole === "ADMIN"}/>
            </div>
            </div>
        </main>
    )
}

