import { useState } from "react"

export function useChat() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hey! I'm your Holex Bot Assistant. Ask me anything 👋" }
  ])
  const [isLoading, setIsLoading] = useState(false)

  async function sendMessage(text) {
    const userMessage = { role: "user", content: text }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: "You are Holex Bot, a helpful and friendly AI assistant." }]
            },
            contents: updatedMessages.map((m) => ({
              role: m.role === "ai" ? "model" : "user",
              parts: [{ text: m.content }]
            }))
          })
        }
      )

      const aiMessage = {
        role: "ai",
        content: data.candidates[0].content.parts[0].text
      }

      setMessages((prev) => [...prev, aiMessage])

    } catch (error) {
      console.log("Error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, something went wrong. Please try again." }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, isLoading, sendMessage }
}