"use client";

export default function Summary({
  text,
  value,
}: {
  text: string;
  value: number;
}) {
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col h-full">
          <p className="text-sm md:text-base text-gray-600 mb-4">{text}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-auto">
            {value}
          </h3>
        </div>
      </div>
    </>
  );
}
