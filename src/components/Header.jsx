function Header() {
  return (
    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-white">
      
      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
        AI
      </div>

      <div>
        <h1 className="text-sm font-semibold text-gray-900">Holex Bot Assistant</h1>
        <p className="text-xs text-green-500 font-medium">Online</p>
      </div>

    </div>
  )
}

export default Header