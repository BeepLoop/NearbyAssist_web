import { Outlet, Route, Routes } from "react-router-dom";
import ExampleContextProvider from "./context/example_context";
import ExamplePage from "./pages/example_page";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import Dashboard from "./pages/dashboard";
import Complaints from "./pages/complaints";
import VendorApplication from "./pages/application";
import NotFound from "./pages/not_found";
import AccountRestriction from "./pages/restriction";
import AccountManagement from "./pages/management";
import MainLayout from "./layout/MainLayout";
import ComplaintsDetails from "./pages/complaintsdetails";
import ApplicationDetails from "./pages/applicationdetails";

export default function App() {
    return (
        <ExampleContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/auth"
                    element={
                        <div>
                            <Outlet />
                        </div>
                    }
                >
                    <Route path="login" element={<LoginPage />} />
                </Route>
                <Route path="/content" element={<MainLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route
                        path="complaints"
                        element={
                            <div>
                                <Outlet />
                            </div>
                        }
                    >
                        <Route index element={<Complaints />} />
                        <Route
                            path="complaintsdetails"
                            element={<ComplaintsDetails />}
                        />
                    </Route>
                    <Route path="application" element={<VendorApplication />} />
                    <Route
                        path="applicationdetails"
                        element={<ApplicationDetails />}
                    />
                    <Route
                        path="restriction"
                        element={<AccountRestriction />}
                    />
                    <Route path="management" element={<AccountManagement />} />

                    <Route path="example" element={<ExamplePage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ExampleContextProvider>
    );
}
