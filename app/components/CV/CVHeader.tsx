import Image from "next/image";

export default function CVHeader({title, bio}: {title: string, bio: string}) {
    return (
<header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">Eric Pudney</h1>
              <p className="text-xl text-blue-100">{title}</p>
              <p className="text-blue-200 max-w-lg">{bio}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="overflow-hidden w-48 h-48 rounded-full bg-white/10 border-4 border-white/30">
                <Image
                  src="/photo.jpg"
                  alt="A picture of me"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}