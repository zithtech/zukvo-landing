import {
    Ticket,
    KanbanSquare,
    Timer,
    Megaphone,
    FolderTree,
    CalendarRange,
    FileSignature,
    Sparkles,
    UsersRound,
    Handshake,
    TrendingUp,
    Calculator,
    Receipt,
    Mail,
} from "lucide-react";

// Central product catalog — used by nav dropdown and /products page
export const PRODUCTS = [
    {
        slug: "ticket-management",
        name: "Ticket Management",
        tagline: "Ship work, not chaos.",
        kicker: "Work",
        icon: Ticket,
        accent: "indigo",
        description:
            "A fast, keyboard-first ticketing system with nested subtasks, statuses, types, priorities, watchers, SLAs, and deep links to docs, sprints, buckets & bugs.",
        bullets: [
            "Custom statuses & workflows",
            "AI ticket creation with Zai",
            "Bulk edit, filters, saved views",
            "Attachments, threaded comments",
        ],
    },
    {
        slug: "project-management",
        name: "Project Management",
        tagline: "Sprints, buckets, bugs — one workspace.",
        kicker: "Work",
        icon: KanbanSquare,
        accent: "indigo",
        description:
            "Run sprint cycles, group work into buckets, track bugs, and manage backlog grooming — all with optional AI breakdown and estimation.",
        bullets: [
            "Sprint cycles + velocity",
            "Kanban buckets & swimlanes",
            "Backlog + roadmap",
            "Bug list module",
        ],
    },
    {
        slug: "time-tracking",
        name: "Time Tracking",
        tagline: "Real hours, without the friction.",
        kicker: "Operate",
        icon: Timer,
        accent: "emerald",
        description:
            "Start a timer on any ticket, log manually, or import from calendar. Time rolls into invoices and performance with zero copy-paste.",
        bullets: [
            "Per-ticket timers",
            "Manual entries & imports",
            "Billable vs. internal",
            "Client-ready summaries",
        ],
    },
    {
        slug: "daily-updates",
        name: "Daily Updates",
        tagline: "Async standups your team actually does.",
        kicker: "Operate",
        icon: Megaphone,
        accent: "indigo",
        description:
            "Scheduled daily prompts, Slack/email delivery, and automatic rollups to managers — including blockers and sprint health.",
        bullets: [
            "Scheduled prompts",
            "Slack + email delivery",
            "Manager rollups",
            "AI summary of the week",
        ],
    },
    {
        slug: "document-hub",
        name: "Document Hub",
        tagline: "Docs that talk to your tickets.",
        kicker: "Knowledge",
        icon: FolderTree,
        accent: "violet",
        description:
            "A workspace-wide hub with public/private sharing, ticket linking, AI-drafted docs, soft-delete trash and full version history.",
        bullets: [
            "Public / private share links",
            "Ticket + project linking",
            "AI document creation",
            "Trash & restore",
        ],
    },
    {
        slug: "time-sheet",
        name: "Time Sheet",
        tagline: "Approvals without spreadsheets.",
        kicker: "Operate",
        icon: CalendarRange,
        accent: "emerald",
        description:
            "Weekly time sheets for every team member with manager approvals, lock-after-submit, and automated pay-period exports.",
        bullets: [
            "Weekly submission + approvals",
            "Lock after submit",
            "Payroll-friendly exports",
            "Policy + overtime rules",
        ],
    },
    {
        slug: "proposals",
        name: "Proposals",
        tagline: "Win more. Write less.",
        kicker: "Grow",
        icon: FileSignature,
        accent: "indigo",
        description:
            "Zai drafts on-brand proposals from a single brief. Send trackable links, collect e-sign, and convert to a project the moment it's accepted.",
        bullets: [
            "AI-drafted proposals",
            "Trackable share links",
            "E-sign & accept",
            "One-click convert to project",
        ],
    },
    {
        slug: "leads-management",
        name: "Leads Management",
        tagline: "A pipeline that actually closes.",
        kicker: "Grow",
        icon: Sparkles,
        accent: "amber",
        description:
            "Capture leads from Zithport, score them with BidIQ, assign to owners, and run them through a pipeline built for freelance work.",
        bullets: [
            "Zithport capture",
            "BidIQ AI verdicts",
            "Owner + source tracking",
            "Stage automations",
        ],
    },
    {
        slug: "squads",
        name: "Squads",
        tagline: "Organize by outcome, not org chart.",
        kicker: "Team",
        icon: UsersRound,
        accent: "violet",
        description:
            "Create cross-functional squads for long-running initiatives with shared tickets, docs, standups and dashboards.",
        bullets: [
            "Cross-functional groups",
            "Shared workspaces",
            "Squad-level metrics",
            "Rotating leads",
        ],
    },
    {
        slug: "client-management",
        name: "Client Management",
        tagline: "Every client, every detail — one place.",
        kicker: "Grow",
        icon: Handshake,
        accent: "indigo",
        description:
            "Central client records with contacts, billing info, linked projects, proposals, invoices, documents and communication history.",
        bullets: [
            "Contact + billing records",
            "Linked projects & invoices",
            "Client portal",
            "Communication timeline",
        ],
    },
    {
        slug: "performance-management",
        name: "Performance Management",
        tagline: "Transparent growth for every teammate.",
        kicker: "Team",
        icon: TrendingUp,
        accent: "emerald",
        description:
            "Goals, continuous feedback, reviews and auto-pulled metrics from tickets, sprints and time — so reviews aren't guesswork.",
        bullets: [
            "OKRs & goals",
            "Continuous feedback",
            "360° reviews",
            "Auto-pulled metrics",
        ],
    },
    {
        slug: "accounts",
        name: "Accounts",
        tagline: "A ledger your accountant will love.",
        kicker: "Finance",
        icon: Calculator,
        accent: "emerald",
        description:
            "Track income, expenses, taxes and reconciliations. Export in every format your accountant asks for.",
        bullets: [
            "Income & expenses",
            "Tax categories",
            "Reconciliation",
            "Clean exports",
        ],
    },
    {
        slug: "invoice",
        name: "Invoice",
        tagline: "Polished invoices — sent, paid, closed.",
        kicker: "Finance",
        icon: Receipt,
        accent: "emerald",
        description:
            "Generate invoices from tracked time or fixed scopes, send branded PDFs, collect payments and reconcile against accounts.",
        bullets: [
            "Time-based & fixed invoices",
            "Branded PDF templates",
            "Payment collection",
            "Auto-reconcile to accounts",
        ],
    },
    {
        slug: "mail-calendar",
        name: "Mail & Calendar",
        tagline: "Your inbox and calendar, inside Zukvo.",
        kicker: "Integrations",
        icon: Mail,
        accent: "violet",
        description:
            "Two-way Gmail, Outlook and Google/Apple Calendar sync. Email threads become tickets. Meetings auto-log to time.",
        bullets: [
            "Gmail / Outlook sync",
            "Google + Apple calendars",
            "Email → ticket",
            "Meetings → time entries",
        ],
    },
];

export const ACCENT_CLASSES = {
    indigo: {
        bg: "bg-zukvo-500/10",
        border: "border-zukvo-500/30",
        text: "text-zukvo-400",
        ring: "ring-zukvo-500/30",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-400/30",
        text: "text-emerald-300",
        ring: "ring-emerald-400/30",
    },
    amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-400/30",
        text: "text-amber-300",
        ring: "ring-amber-400/30",
    },
    violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-400/30",
        text: "text-violet-300",
        ring: "ring-violet-400/30",
    },
};
