
export default async function Summary({
    text, value
}: {
    text: string, value: number;
}) {
    
    return (
        <>
        <div className="rounded-xl bg-orange-200 p-2 m-3 shadow-md w-72 h-48 text-center">
        <div className="flex p-4">
                <span className='mb-4 text-lg md:text-lg'>{text}</span>
        </div>
                <h2 className='mb-4 text-xl md:text-2xl'>{value}</h2>
        </div>
        </>
    )
    
}

