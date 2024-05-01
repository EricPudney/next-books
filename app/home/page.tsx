import Summary from "../components/Summary"
import { summaryData } from "../data/data"

export default async function Page() {

    const data = await summaryData()
    console.log(data)
    

    return (
    <>
      <h2 className='mb-4 text-xl md:text-2xl mt-16'>
        Information about the collection:
      </h2>
      <div className="flex grow flex flex-wrap items-center justify-evenly rounded-xl bg-gray-50 p-4">
        <Summary data={data.TotalNumberOfBooks} text='Total number of books in the collection:' />
        <Summary data={data.MostExpensiveBook} text='Most expensive book in the collection (SEK):' />
        <Summary data={data.CheapestBook} text='Least expensive book in the collection (SEK):' />
        <Summary data={data.AveragePrice} text='Average value of books in the collection (SEK):' />
        <Summary data={data.TotalPrice} text='Total value of books in the collection (SEK):' />
        <Summary data={data.OldestBook} text='Oldest book in the collection printed in: ' />
        <Summary data={data.AverageDate} text='Average date of publication in the collection: ' />
        </div>
    </>
)
}