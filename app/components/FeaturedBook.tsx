import Image from "next/image";

export default function FeaturedBook({
  link,
  title,
  text,
}: {
  link: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4"
    >
      <div className="w-16 h-16 relative">
        <Image
          src={link}
          alt="Bookshelf"
          width={64}
          height={64}
          className="rounded-md object-cover w-full h-full"
          />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}
