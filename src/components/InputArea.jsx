import { useState } from "react"
function InputArea({ onSend, isLoading }) {
  const [input, setInput] = useState("")

  function handleSend() {
    if (!input.trim()) return
    onSend(input)
    setInput("")
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-gray-200 p-4 flex items-end gap-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        rows={1}
        className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 text-sm outline-none focus:border-purple-400 transition-colors"
      />
      <button
        onClick={handleSend}
        disabled={isLoading || !input.trim()}
        className="bg-purple-600 text-white px-4 py-3 rounded-2xl text-sm font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </div>
  )
}

export default InputArea