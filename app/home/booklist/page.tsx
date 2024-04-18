import Booklist from "@/app/components/Booklist";
import { fetchAllBooks } from "@/app/data/data"

export default async function Page() {
    const listall = await fetchAllBooks();
    console.log(listall)
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Booklist page</div>
    <Booklist listall={listall}/>
    <p>A page listing all books, with links to each individual book.</p>
    </main>
)
}

// 