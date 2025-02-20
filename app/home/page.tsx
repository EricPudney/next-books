import BookCarousel from "../components/BookCarousel"

import { summaryData } from "../data/data"
import { carouselContainer, headingStyle, mainStyle } from "../styles";

export default async function Page() {
    const data = await summaryData();

    return (
    <>
       {/* <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Collection Overview
      </h2>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <BookCarousel data={data} />
      </div>
    </div> */}

    <main className={mainStyle}>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover Our Collection
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                Explore our carefully curated collection of books, featuring works from
                renowned authors across various genres. Whether you're interested in
                classic literature, contemporary fiction, or academic resources, our
                library has something for every reader.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden bg-blue-100">
            <img
              src="/api/placeholder/600/400"
              alt="Library collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Collection Overview
          </h2>
          <BookCarousel data={data} />
        </div>

        {/* Additional Information Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              How to Access
            </h3>
            <p className="text-blue-800">
              Our collection is available both online and in person. Members can
              browse and reserve books through our digital catalog or visit our
              physical location during opening hours.
            </p>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
              New Additions
            </h3>
            <p className="text-emerald-800">
              We regularly update our collection with the latest releases and
              important works. Check back often to discover new additions to our
              shelves.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              Special Collections
            </h3>
            <p className="text-purple-800">
              Explore our special collections featuring rare editions, historical
              documents, and curated themed selections.
            </p>
          </div>
        </div>
      </div>
    </main>
    {/* <h2 className="mb-4 text-xl md:text-2xl">
        Information about the collection:
      </h2>
      <div className="flex grow flex flex-wrap items-center justify-evenly rounded-xl bg-gray-50 p-4 mt-8 mt-auto mx-auto overflow-hidden">
        <BookCarousel data={data} />
      </div> */}
    </>
)
}
