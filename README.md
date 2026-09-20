# OpenStock

Open market terminal: live quotes, sector heatmap, local watchlist, price alerts, and company pages. Inspired by [Open Dev Society / OpenStock](https://github.com/Open-Dev-Society/OpenStock).

Not a brokerage. Quotes may be delayed. Nothing here is financial advice.

This tree is a **TanStack Start** port on the Grok App Builder harness (`scripts/`, `server/`, Vite + Nitro). Same stack the live preview uses.

## Stack

- TanStack Start + Router + Query
- React 19, Tailwind v4, Radix UI
- Zustand watchlist (this browser only)
- Yahoo Finance public endpoints for quotes, charts, and news
- Optional Grok briefing via `XAI_API_KEY` (server-side, user-initiated)

## Scripts

```bash
npm install
npm run dev          # 0.0.0.0:8080
npm run build
npm run typecheck
```

`startup.sh` brings the preview back if port 8080 is down.

## Product

- **Dashboard** — index strip, heatmap, universe table, movers, news
- **Markets** — full heatmap and sector ETFs
- **Watchlist** — pin names, set above/below alerts
- **Stock page** — range chart, stats, related news, Ask Grok
- **Search** — ⌘K / Ctrl+K
