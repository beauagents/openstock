import { createFileRoute } from "@tanstack/react-router";
import { WatchlistPage } from "@/components/pages/watchlist-page";

export const Route = createFileRoute("/watchlist")({ component: WatchlistPage });
