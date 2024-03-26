import { Route, Routes } from "react-router-dom";
import ExampleContextProvider from "./context/example_context";
import ExamplePage from "./pages/example_page";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import Dashboard from "./pages/dashboard";
import Complaints from "./pages/complaints";
import VendorApplication from "./pages/vendor_application";
import NotFound from "./pages/not_found";

export default function App() {
    return (
        <ExampleContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/complaints" element={<Complaints />} />
                <Route
                    path="/vendor_application"
                    element={<VendorApplication />}
                />
                <Route path="/example" element={<ExamplePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ExampleContextProvider>
    );
}
