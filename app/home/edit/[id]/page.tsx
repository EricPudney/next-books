export default async function Page({ params }: { params: { id: string } }) {
    const ref = parseInt(params.id);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Edit book no. {ref} 
            </div>
        </main>
    )
}