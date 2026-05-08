import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import ProductsIndex from "@/pages/products/ProductsIndex";
import TicketManagement from "@/pages/products/TicketManagement";
import DocumentHub from "@/pages/products/DocumentHub";
import ProjectManagement from "@/pages/products/ProjectManagement";
import Invoice from "@/pages/products/Invoice";
import DailyUpdates from "@/pages/products/DailyUpdates";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
