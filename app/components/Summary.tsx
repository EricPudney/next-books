
export default async function Summary({
    data, text,
}: {
    data: number, text: string;
}) {
    
    return (
        <>
        <div className="rounded-xl bg-orange-200 p-2 shadow-sm w-72 h-48 text-center">
        <div className="flex p-4">
                <span className='mb-4 text-lg md:text-lg'>{text}</span>
        </div>
                <h2 className='mb-4 text-xl md:text-2xl'>{data}</h2>
        </div>
        </>
    )
    
}

