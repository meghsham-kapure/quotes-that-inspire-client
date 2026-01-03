import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import QuoteCard from "./components/quote-card";
import MaintenanceCard from "./components/maintenance-card";
import Sidebar from "./components/sidebar";
import {
  checkHealth,
  getRandomQuote,
  getAllQuotes,
} from "./services/quote-service";

const API = "http://localhost:4040";

function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [flip, setFlip] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [healthLoaded, setHealthLoaded] = useState(false);

  useEffect(() => {
    checkHealth().then((online) => {
      setIsOnline(online);
      setHealthLoaded(true);

      if (online) {
        loadRandomQuote();
        loadAllQuotes();
      }
    });
  }, []);

  const loadRandomQuote = async () => {
    setFlip(true);
    const data = await getRandomQuote();
    setTimeout(() => {
      setQuote(data);
      setFlip(false);
    }, 300);
  };

  const loadAllQuotes = async () => {
    const data = await getAllQuotes();
    setQuotes(data);
  };

  if (!healthLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse h-[260px] w-full max-w-3xl rounded-3xl bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header isOnline={isOnline} onOpenSidebar={() => setSidebarOpen(true)} />

      <section className="flex-1 w-full flex flex-col items-center justify-center py-20 bg-gray-50">
        {healthLoaded && !isOnline ? (
          <MaintenanceCard />
        ) : (
          <>
            {quote && <QuoteCard quote={quote} flip={flip} />}
            <button
              onClick={loadRandomQuote}
              className="mt-12 rounded-2xl bg-purple-600 px-10 py-4 text-lg font-bold text-white hover:bg-purple-700 transition"
            >
              New Quote
            </button>
          </>
        )}
      </section>

      <Sidebar
        open={sidebarOpen}
        quotes={quotes}
        onClose={() => setSidebarOpen(false)}
        onSelect={(q) => {
          setQuote(q);
          setSidebarOpen(false);
        }}
      />
    </div>
  );
}

export default App;
