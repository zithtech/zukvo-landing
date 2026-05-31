import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "@/pages/Landing";
import Signup from "@/pages/Signup";
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

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<Signup />} />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
