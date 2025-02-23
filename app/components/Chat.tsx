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
      console.log(response)
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Error fetching response." }]);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
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
  );
}
