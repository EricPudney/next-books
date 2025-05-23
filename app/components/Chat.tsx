"use client";

import { useEffect, useRef, useState } from "react";
import { fetchChatResponse } from "@/app/actions/chat";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false)
  const scrollDown = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollDown.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking])

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
      setThinking(true)
      const response = await fetchChatResponse(input);
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Error fetching response." }]);
    } finally {
      setThinking(false)
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 border rounded-lg shadow-md bg-white p-4">
          <div className="h-80 overflow-y-auto mb-4 p-2 border relative">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span className={msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} 
                      style={{ padding: "6px 12px", borderRadius: "8px", display: "inline-block" }}>
                  {msg.content}
                </span>
              </div>
            ))}
            {thinking && <div className="flex justify-center mt-4 text-gray-500 font-medium animate-pulse">...thinking...</div>}
            <div ref={scrollDown}/>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm" 
              placeholder="Ask something..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
            />
            <button className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700" onClick={sendMessage}>Send</button>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 border rounded-lg shadow-md bg-emerald-50 p-4">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Chat with AI</h2>
          <div className="space-y-4">
            <div>
              <p className="text-emerald-800 text-sm">
                I have implemented a chatbot using the GPT4o mini model via a Python backend. Its responses are guided by a system prompt, and it utilises basic retrieval-augmented generation (RAG), enabling access to the CV part of this site. The HTML content is parsed using BeautifulSoup. Currently, the chatbot does not store questions and answers, nor does it consider previous interactions in its responses, which can make conversations a little repetitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}