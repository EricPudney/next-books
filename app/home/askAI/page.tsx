import Chat from "@/app/components/Chat";
import { mainStyle } from "@/app/styles";

export default function Home() {
  return (
    <main className={mainStyle}>
      <div className="max-w-screen-xl mx-auto">
      <Chat />
      </div>
    </main>
  );
}
