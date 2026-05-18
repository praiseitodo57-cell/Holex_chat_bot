import { useState } from "react"
import ReactMarkdown from "react-markdown"

function MessageBubble({ message }) {
  const isUser = message.role === "user"
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 group`}>

      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mr-2 shrink-0">
          AI
        </div>
      )}

      <div className="flex flex-col gap-1">
        <div
          className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? "bg-purple-600 text-white rounded-br-sm"
              : "bg-gray-100 text-gray-800 rounded-bl-sm"
          }`}
        >
          {isUser ? (
            message.content
          ) : (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="text-sm">{children}</li>,
                code: ({ inline, children }) =>
                  inline ? (
                    <code className="bg-gray-200 text-purple-700 px-1 py-0.5 rounded text-xs font-mono">{children}</code>
                  ) : (
                    <pre className="bg-gray-800 text-green-400 p-3 rounded-lg mt-2 mb-2 overflow-x-auto">
                      <code className="text-xs font-mono">{children}</code>
                    </pre>
                  ),
                h1: ({ children }) => <h1 className="text-base font-semibold mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-sm font-semibold mb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-sm font-semibold mb-1">{children}</h3>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="self-end text-xs text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity px-1"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

    </div>
  )
}

export default MessageBubble