import { createServerFn } from "@tanstack/react-start";
import type { ChartRange } from "./types";

export const getDashboard = createServerFn({ method: "POST" }).handler(async () => {
  const { fetchDashboard } = await import("./yahoo.server.ts");
  return fetchDashboard();
});

export const getQuotes = createServerFn({ method: "POST" })
  .validator((input: { symbols: string[] }) => input)
  .handler(async ({ data }) => {
    const { fetchQuotesFor } = await import("./yahoo.server.ts");
    return fetchQuotesFor(data.symbols.slice(0, 40));
  });

export const getStock = createServerFn({ method: "POST" })
  .validator((input: { symbol: string; range: ChartRange }) => input)
  .handler(async ({ data }) => {
    const { fetchStock } = await import("./yahoo.server.ts");
    return fetchStock(data.symbol, data.range);
  });

export const searchMarket = createServerFn({ method: "POST" })
  .validator((input: { query: string }) => input)
  .handler(async ({ data }) => {
    const { fetchSearch } = await import("./yahoo.server.ts");
    return fetchSearch(data.query);
  });

export const getNewsFeed = createServerFn({ method: "POST" }).handler(async () => {
  const { fetchNewsFeed } = await import("./yahoo.server.ts");
  return fetchNewsFeed();
});
