import { api } from "./api";

export const checkHealth = async () => {
  const { data } = await api.get("/healthcheck");
  return data.includes("is running");
};

export const getRandomQuote = async () => {
  const { data } = await api.get("/getRandomQuote");
  return data;
};

export const getAllQuotes = async () => {
  const { data } = await api.get("/getAllQuotes");
  return data;
};
