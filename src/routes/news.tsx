import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/pages/news-page";
import { getNewsFeed } from "@/lib/market/api";

export const Route = createFileRoute("/news")({
  loader: () => getNewsFeed(),
  component: News,
});

function News() {
  const initial = Route.useLoaderData();
  return <NewsPage initial={initial} />;
}
