import { createFileRoute } from "@tanstack/react-router";
import { MarketsPage } from "@/components/pages/markets-page";
import { getDashboard } from "@/lib/market/api";

export const Route = createFileRoute("/markets")({
  loader: () => getDashboard(),
  component: Markets,
});

function Markets() {
  const initial = Route.useLoaderData();
  return <MarketsPage initial={initial} />;
}
