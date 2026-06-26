import "@/App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "@/pages/Landing";
import Signup from "@/pages/Signup";
import About from "@/pages/About";
import ContactSales from "@/pages/ContactSales";
import ProductsIndex from "@/pages/products/ProductsIndex";
import TicketManagement from "@/pages/products/TicketManagement";
import DocumentHub from "@/pages/products/DocumentHub";
import ProjectManagement from "@/pages/products/ProjectManagement";
import Invoice from "@/pages/products/Invoice";
import DailyUpdates from "@/pages/products/DailyUpdates";
import TimeTracking from "@/pages/products/TimeTracking";
import ZithPort from "@/pages/products/ZithPort";
import Proposals from "@/pages/products/Proposals";
import LeadsManagement from "@/pages/products/LeadsManagement";
import ClientManagement from "@/pages/products/ClientManagement";
import ClientPortal from "@/pages/products/ClientPortal";
import PerformanceManagement from "@/pages/products/PerformanceManagement";
import Squads from "@/pages/products/Squads";
import Accounts from "@/pages/products/Accounts";
import MailCalendar from "@/pages/products/MailCalendar";
import EscalationManagement from "@/pages/products/EscalationManagement";
import VerifyEmail from "@/pages/VerifyEmail";

function LoginRedirect() {
    const { search } = useLocation();
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
        const appUrl = import.meta.env.VITE_APP_URL || "http://localhost:3005";
        
        // Prevent infinite loop if VITE_APP_URL is pointing back to this landing page
        // (Handles www vs non-www discrepancy to avoid blinking/redirect loops)
        try {
            const targetUrl = new URL(appUrl);
            const targetHost = targetUrl.hostname.replace(/^www\./, '');
            const currentHost = window.location.hostname.replace(/^www\./, '');
            if (targetHost === currentHost) {
                setIsLoop(true);
                return;
            }
        } catch (e) {
            // ignore invalid URL
        }

        window.location.replace(`${appUrl}/login${search}`);
    }, [search]);

    if (isLoop) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-zinc-50 p-6 text-center text-zinc-800">
                <div className="max-w-md rounded-2xl border border-rose-200 bg-white p-8 shadow-xl">
                    <h1 className="mb-4 text-xl font-bold text-rose-600">Configuration Error</h1>
                    <p className="mb-4 text-sm text-zinc-600">
                        The landing page is trying to redirect you to the main application's login page, but the <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">VITE_APP_URL</code> environment variable is pointing back to this landing page.
                    </p>
                    <p className="text-sm text-zinc-600">
                        Please update <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">VITE_APP_URL</code> in your landing page deployment settings to point to your actual Zukvo App domain (e.g., <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">https://app.zukvo.com</code>).
                    </p>
                </div>
            </div>
        );
    }

    return null;
}

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        // If the URL has a hash, defer to native anchor scrolling.
        // Otherwise, reset the page to the top on every route change.
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname, hash]);
    return null;
}
console.log('Building Zukvo Landing Page FE...');
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<LoginRedirect />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-sales" element={<ContactSales />} />
                    <Route path="/products" element={<ProductsIndex />} />
                    <Route
                        path="/products/ticket-management"
                        element={<TicketManagement />}
                    />
                    <Route path="/products/document-hub" element={<DocumentHub />} />
                    <Route
                        path="/products/project-management"
                        element={<ProjectManagement />}
                    />
                    <Route path="/products/invoice" element={<Invoice />} />
                    <Route path="/products/daily-updates" element={<DailyUpdates />} />
                    <Route path="/products/time-tracking" element={<TimeTracking />} />
                    <Route path="/products/zithport" element={<ZithPort />} />
                    <Route path="/products/proposals" element={<Proposals />} />
                    <Route path="/products/leads-management" element={<LeadsManagement />} />
                    <Route path="/products/client-management" element={<ClientManagement />} />
                    <Route path="/products/client-portal" element={<ClientPortal />} />
                    <Route path="/products/performance-management" element={<PerformanceManagement />} />
                    <Route path="/products/squads" element={<Squads />} />
                    <Route path="/products/accounts" element={<Accounts />} />
                    <Route path="/products/mail-calendar" element={<MailCalendar />} />
                    <Route path="/products/escalation-management" element={<EscalationManagement />} />
                    <Route path="/verify-email" element={<VerifyEmail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
