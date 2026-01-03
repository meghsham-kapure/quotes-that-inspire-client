export default function QuoteList({ quotes, onSelect }) {
  return (
    <div className="h-full overflow-y-auto pr-2 space-y-4 hide-scrollbar">
      {quotes.map((q) => (
        <button
          key={q.quoteID}
          onClick={() => onSelect(q)}
          className="w-full text-left rounded-xl border p-4 hover:bg-purple-50 transition"
        >
          <p className="font-medium text-gray-800 line-clamp-2">
            “{q.message}”
          </p>
          <p className="mt-2 text-sm text-purple-600 font-semibold">
            — {q.author}
          </p>
        </button>
      ))}
    </div>
  );
}
