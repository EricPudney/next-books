'use client'

export default function Summary({
    text, value
}: {
    text: string, value: number;
}) {
    
    return (
        <>
        <div className="rounded-xl bg-orange-200 p-2 m-3 shadow-md flex-grow text-center">
        <div className="flex p-4">
            <span className='mb-4 text-lg md:text-lg'>{text}</span>
        </div>
            <h2 className='mb-4 text-xl md:text-2xl'>{value}</h2>
        </div>
        </>
    )
    
}
