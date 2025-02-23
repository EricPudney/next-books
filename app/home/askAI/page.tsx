import Chat from "@/app/components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ask AI</h1>
      <Chat />
    </main>
  );
}
