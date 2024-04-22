import { QueryResultRow } from "@vercel/postgres";

export default async function Summary({
    data, text,
}: {
    data: number, text: string;
}) {
    
    return (
        <>
        <div className="bg-white px-3 mx-2 my-2 rounded-lg">

        <div className="grid grid-cols-2 gap-4">
                <h2 className='mb-4 text-xl md:text-2xl'>{text}</h2>
                <p>{data}</p>
                
        </div>
        </div>
        </>
    )
    
}