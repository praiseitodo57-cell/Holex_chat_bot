import Header from "./components/Header"
import MessageList from "./components/MessageList"
import InputArea from "./components/InputArea"
import { useChat } from "./hooks/useChat"

function App() {

  const { messages, isLoading, sendMessage } = useChat()
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col h-[700px]">
        <Header />
        <MessageList messages={messages} isLoading={isLoading} />
        <InputArea onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default App