import Carousel from "../components/Carousel"

import { summaryData } from "../data/data"

export default async function Page() {
    const data = await summaryData();

    return (
    <>

      <h2 className='mb-4 text-xl md:text-2xl mt-16'>
        Information about the collection:
      </h2>
      <div className="flex grow flex flex-wrap items-center justify-evenly rounded-xl bg-gray-50 p-4 mt-24 mx-72">
        <Carousel data={data} />
      </div>
    </>
)
}
