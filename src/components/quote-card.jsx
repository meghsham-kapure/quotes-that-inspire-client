export default function QuoteCard({ quote, flip }) {
  return (
    <div className="max-w-3xl w-full px-6">
      <div className="rounded-3xl bg-white p-10 shadow-sm border h-[260px] flex items-center justify-center">
        <div
          className={`w-full text-center transition-all duration-500 transform
          ${flip ? "rotateX-90 opacity-0" : "rotateX-0 opacity-100"}`}
        >
          <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
            “{quote.message}”
          </p>

          <div className="my-8 h-px w-24 bg-purple-600 mx-auto rounded-full"></div>

          <p className="text-lg font-semibold text-purple-600">
            — {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
}
