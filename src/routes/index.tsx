import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/pages/dashboard";
import { getDashboard } from "@/lib/market/api";

export const Route = createFileRoute("/")({
  loader: () => getDashboard(),
  component: Home,
});

function Home() {
  const initial = Route.useLoaderData();
  return <DashboardPage initial={initial} />;
}
