import { useEffect, useState } from "react";
import {
  checkHealth,
  getRandomQuote,
  getAllQuotes,
} from "../services/quote-service";

export const useQuotes = () => {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    checkHealth().then((online) => {
      setIsOnline(online);
      if (online) {
        getRandomQuote().then(setQuote);
        getAllQuotes().then(setQuotes);
      }
    });
  }, []);

  return { quote, quotes, isOnline, setQuote };
};
