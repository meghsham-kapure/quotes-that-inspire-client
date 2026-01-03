export default function Header({ isOnline, onOpenSidebar }) {
  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="flex h-16 w-full items-center px-6 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white font-bold">
            Q
          </div>
          <span className="text-lg font-semibold text-gray-800">QuoteApp</span>
        </div>

        {isOnline && (
          <button
            onClick={onOpenSidebar}
            className="ml-auto rounded-xl bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition"
          >
            All Quotes
          </button>
        )}
      </div>
    </header>
  );
}
