import { createFileRoute } from "@tanstack/react-router";
import { StockDetailPage } from "@/components/pages/stock-detail";
import { getStock } from "@/lib/market/api";

export const Route = createFileRoute("/stocks/$symbol")({
  loader: ({ params }) =>
    getStock({ data: { symbol: params.symbol, range: "6mo" } }),
  component: StockRoute,
});

function StockRoute() {
  const { symbol } = Route.useParams();
  const initial = Route.useLoaderData();
  return <StockDetailPage symbol={symbol.toUpperCase()} initial={initial} />;
}
