import Chat from "@/app/components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-24 md:pb-6 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ask AI</h2>
      <Chat />
      </div>
    </main>
  );
}
