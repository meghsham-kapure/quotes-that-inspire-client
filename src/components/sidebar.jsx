import QuoteList from "./quote-list";

export default function Sidebar({ open, quotes, onClose, onSelect }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition ${open ? "visible bg-black/30" : "invisible"}`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-96 bg-white shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <h2 className="font-bold text-lg">All Quotes</h2>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        <div className="h-[calc(100%-4rem)] p-6">
          <QuoteList quotes={quotes} onSelect={onSelect} />
        </div>
      </aside>
    </>
  );
}
