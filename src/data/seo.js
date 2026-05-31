export const SITE = {
  name: "Zukvo",
  url: "https://zukvo.com",
  defaultTitle: "Zukvo — The Work OS for Freelancers, Teams & Companies",
  defaultDescription:
    "Zukvo is the all-in-one Work OS for freelancers, agencies and companies. Run tickets, projects, time, invoices, proposals, leads, and client portals in one place.",
  twitter: "@zukvo",
  ogImage: "/og-image.png",
  locale: "en_US",
};

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/og-image.png`,
  sameAs: [],
};

export const SOFTWARE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE.url,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

// Per-route SEO. Title is wrapped automatically as "<title> | Zukvo" unless `titleExact: true`.
export const ROUTES = {
  "/": {
    title: "Zukvo — The Work OS for Freelancers, Teams & Companies",
    titleExact: true,
    description:
      "One workspace for tickets, projects, time, invoices, proposals, leads and client portals. Built for freelancers, agencies and modern teams.",
    keywords: [
      "work os",
      "freelancer software",
      "agency management software",
      "project management",
      "client portal",
      "invoice and time tracking",
    ],
    jsonLd: [ORG_JSON_LD, SOFTWARE_JSON_LD],
  },
  "/signup": {
    title: "Sign up",
    description:
      "Create your free Zukvo account and start running your work, clients and finances in one place.",
    noindex: true,
  },
  "/products": {
    title: "Products",
    description:
      "Explore every Zukvo module — tickets, projects, time, invoices, proposals, leads, client portal, performance, accounts and more.",
    keywords: ["zukvo products", "work os modules", "all-in-one freelance tools"],
  },
  "/about": {
    title: "About",
    description:
      "Zukvo is built by Zithtech — a product studio that turns ideas into scalable digital realities. Zukvo is our flagship work OS.",
    keywords: ["about zukvo", "zithtech", "zukvo company", "who built zukvo"],
  },
  "/contact-sales": {
    title: "Contact Sales",
    description:
      "Schedule a personalized Zukvo walkthrough. Pricing, deployment, migration and your first 90 days — mapped to your stack. Avg response under 1 hour.",
    keywords: [
      "contact zukvo sales",
      "zukvo demo",
      "book a walkthrough",
      "talk to zukvo sales",
    ],
    noindex: false,
  },

  "/products/zithport": {
    title: "ZithPort — Upwork Job Capture Chrome Extension",
    titleExact: true,
    description:
      "Capture Upwork jobs in one click. ZithPort scores each post, runs a skill match against your profile, and saves qualified leads to your Zukvo pipeline.",
    keywords: [
      "upwork chrome extension",
      "upwork job scraper",
      "upwork lead capture",
      "freelance lead tracking",
    ],
  },
  "/products/ticket-management": {
    title: "Ticket Management Software",
    description:
      "A fast, keyboard-first ticketing system with nested subtasks, custom workflows, AI ticket creation, watchers, SLAs and deep links to docs and sprints.",
    keywords: [
      "ticket management software",
      "issue tracker",
      "ai ticket creation",
      "sprint ticket tool",
    ],
  },
  "/products/project-management":
    {
      title: "Project Management Software",
      description:
        "Run sprint cycles, group work into buckets, track bugs and groom backlogs — with optional AI breakdown and estimation. Built for shipping teams.",
      keywords: [
        "project management software",
        "sprint planning tool",
        "agile project management",
        "kanban for teams",
      ],
    },
  "/products/document-hub": {
    title: "Document Hub — Docs Linked to Your Tickets",
    titleExact: true,
    description:
      "Workspace-wide knowledge hub with public/private sharing, ticket linking, AI-drafted docs, soft-delete trash and full version history.",
    keywords: [
      "team documentation software",
      "internal knowledge base",
      "ai documents",
      "wiki linked to tickets",
    ],
  },
  "/products/invoice": {
    title: "Invoice Software for Freelancers & Agencies",
    titleExact: true,
    description:
      "Generate invoices from tracked time or fixed scopes. Send branded PDFs, collect payments and auto-reconcile against your accounts.",
    keywords: [
      "freelance invoice software",
      "agency invoicing",
      "time-based invoicing",
      "branded invoice templates",
    ],
  },
  "/products/daily-updates": {
    title: "Daily Updates — Async Standups That Actually Happen",
    titleExact: true,
    description:
      "Scheduled daily prompts, Slack and email delivery, manager rollups with blockers and sprint health — async standups your team actually does.",
    keywords: [
      "async standup tool",
      "daily standup software",
      "slack standup",
      "team status updates",
    ],
  },
  "/products/time-tracking": {
    title: "Time Tracking for Teams & Freelancers",
    titleExact: true,
    description:
      "Start timers on any ticket, log manually, or import from calendar. Time rolls into invoices and performance reviews with zero copy-paste.",
    keywords: [
      "team time tracking",
      "freelance time tracker",
      "billable hours tracking",
      "timesheet software",
    ],
  },
  "/products/proposals": {
    title: "AI Proposal Software — Win More, Write Less",
    titleExact: true,
    description:
      "Zai drafts on-brand proposals from a single brief. Send trackable links, collect e-sign, and convert to a project the moment it's accepted.",
    keywords: [
      "ai proposal software",
      "freelance proposal generator",
      "agency proposals",
      "proposal e-sign",
    ],
  },
  "/products/leads-management": {
    title: "Leads Management & Pipeline for Freelancers",
    titleExact: true,
    description:
      "Capture leads from ZithPort, score them with BidIQ, assign owners, and run them through a pipeline built for freelance and agency work.",
    keywords: [
      "freelance crm",
      "agency lead pipeline",
      "upwork lead tracking",
      "sales pipeline software",
    ],
  },
  "/products/client-management": {
    title: "Client Management Software for Agencies",
    titleExact: true,
    description:
      "Central client records with contacts, billing, linked projects, proposals, invoices, documents and the full communication timeline.",
    keywords: [
      "client management software",
      "agency crm",
      "client database",
      "client communication tracking",
    ],
  },
  "/products/client-portal": {
    title: "Client Portal Software — Branded & Secure",
    titleExact: true,
    description:
      "Give clients a branded, secure portal to track project progress, review deliverables, approve proposals, pay invoices and message your team.",
    keywords: [
      "client portal software",
      "branded client portal",
      "agency client dashboard",
      "secure project sharing",
    ],
  },
  "/products/performance-management": {
    title: "Performance Management for Modern Teams",
    titleExact: true,
    description:
      "Goals, continuous feedback, 360° reviews and auto-pulled metrics from tickets, sprints and time — performance reviews without guesswork.",
    keywords: [
      "performance management software",
      "360 reviews",
      "okr tracking",
      "team performance metrics",
    ],
  },
  "/products/squads": {
    title: "Squads — Cross-Functional Teams in Zukvo",
    titleExact: true,
    description:
      "Create cross-functional squads for long-running initiatives with shared tickets, docs, standups and dashboards.",
    keywords: [
      "cross-functional teams",
      "squad model software",
      "team collaboration",
    ],
  },
  "/products/accounts": {
    title: "Accounts — Income, Expenses, Taxes & Reconciliation",
    titleExact: true,
    description:
      "Track income, expenses, taxes and reconciliations. Export in every format your accountant asks for — clean and audit-ready.",
    keywords: [
      "freelance accounting software",
      "agency bookkeeping",
      "expense tracking",
      "tax-ready exports",
    ],
  },
  "/products/mail-calendar": {
    title: "Mail & Calendar — Inbox and Schedule Inside Zukvo",
    titleExact: true,
    description:
      "Two-way Gmail, Outlook and Google/Apple Calendar sync. Turn email threads into tickets and meetings into time entries.",
    keywords: [
      "gmail integration",
      "outlook calendar sync",
      "email to ticket",
      "calendar time tracking",
    ],
  },
  "/products/escalation-management": {
    title: "Escalation Management — 24h Review SLA",
    titleExact: true,
    description:
      "Raise quality and performance escalations with evidence, route to leads, and resolve against a 24-hour SLA — categories, priorities and statuses you control.",
    keywords: [
      "escalation management software",
      "quality escalation tool",
      "incident review sla",
    ],
  },
};

export function getRouteSEO(path) {
  return ROUTES[path] || null;
}
