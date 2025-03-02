"use client";

import { useState } from "react";
import { fetchChatResponse } from "@/app/actions/chat";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");


  // This async stuff shouldn't be here - needs moving
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetchChatResponse(input);
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Error fetching response." }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 border rounded-lg shadow-md bg-white p-4">
          <div className="h-80 overflow-y-auto mb-4 p-2 border">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span className={msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} 
                      style={{ padding: "6px 12px", borderRadius: "8px", display: "inline-block" }}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-1 p-2 border rounded" 
              placeholder="Ask something..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendMessage}>Send</button>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 border rounded-lg shadow-md bg-emerald-50 p-4">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Chat with AI</h2>
          <div className="space-y-4">
            <div>
              <p className="text-emerald-800 text-sm">
                I have implemented a chatbot using the GPT4o mini model via a Python backend. A system prompt guides AI responses, which could be given much more depth by implementing retrieval-augmented generation (RAG). The barrier to doing this is that I do not have enough data about myself and my book collection. A future version of this app may feature a better-informed bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}