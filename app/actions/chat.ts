"use server";

export async function fetchChatResponse(message: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) throw new Error("Failed to fetch chat response");

  const data = await res.json();
  return data;
}
