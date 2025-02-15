import Backbutton from "@/app/components/BackButton";
import Bookinfo from "@/app/components/Bookinfo"
import EditButton from "@/app/components/EditButton";
import { InfoAlert } from "@/app/components/InfoAlert";
import { fetchBook } from "@/app/data/data";
import returnUserRole from "@/app/lib/session";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const ref = parseInt(params.id);
    const response = await fetchBook(ref);
    const currentBook = response;
    const userRole = await returnUserRole();

    if (userRole === "ADMIN" || userRole === "USER") {
        return (
            <main className="flex max-h-min flex-col items-center justify-between xs:p-12 lg:p-24 mt-12">
                <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                    <Bookinfo book={currentBook} />
                <div className="flex items-center justify-center space-x-[35%]">
                    <Backbutton />
                    <EditButton book={currentBook} active={userRole === "ADMIN"}/>
                </div>
                </div>
            </main>
        )
    }

    return (
        <main className="flex max-h-min flex-col items-center justify-between xs:p-12 lg:p-24 mt-12">
            <InfoAlert title={"Access denied!"} info={"Please create an account via the Login link in order to see more detailed information about any of my books. Your user information (email and password only) will be stored securely in a PostgreSQL database hosted by Neon, and your password will of course be hashed using bcrypt before saving."} duration={20000}/>
            <Backbutton />
        </main>
    )

}

