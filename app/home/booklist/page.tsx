import Booklist from "@/app/components/Booklist";
import { fetchAllBooks } from "@/app/data/data"

export default async function Page() {
    const listall = await fetchAllBooks();
    return (
    <>
    <Booklist listall={listall}/>
    </>
)
}
