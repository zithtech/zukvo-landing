// All routes that should be prerendered + included in sitemap.
// Keep in sync with src/App.jsx <Routes>.
export const ROUTES = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/products", changefreq: "weekly", priority: 0.9 },
  { path: "/products/ticket-management", changefreq: "monthly", priority: 0.8 },
  { path: "/products/project-management", changefreq: "monthly", priority: 0.8 },
  { path: "/products/document-hub", changefreq: "monthly", priority: 0.8 },
  { path: "/products/invoice", changefreq: "monthly", priority: 0.8 },
  { path: "/products/daily-updates", changefreq: "monthly", priority: 0.8 },
  { path: "/products/time-tracking", changefreq: "monthly", priority: 0.8 },
  { path: "/products/zithport", changefreq: "monthly", priority: 0.8 },
  { path: "/products/proposals", changefreq: "monthly", priority: 0.8 },
  { path: "/products/leads-management", changefreq: "monthly", priority: 0.8 },
  { path: "/products/client-management", changefreq: "monthly", priority: 0.8 },
  { path: "/products/client-portal", changefreq: "monthly", priority: 0.8 },
  { path: "/products/performance-management", changefreq: "monthly", priority: 0.8 },
  { path: "/products/squads", changefreq: "monthly", priority: 0.8 },
  { path: "/products/accounts", changefreq: "monthly", priority: 0.8 },
  { path: "/products/mail-calendar", changefreq: "monthly", priority: 0.8 },
  { path: "/products/escalation-management", changefreq: "monthly", priority: 0.8 },
  // /signup is intentionally excluded (noindex)
];

export const SITE_URL = "https://zukvo.com";
