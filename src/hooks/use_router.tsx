import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home_page";
import NotFound from "../pages/not_found";
import LoginPage from "../pages/login_page";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/dashboard";
import Complaints from "../pages/complaints";
import ComplaintsDetails from "../pages/complaints_details";
import VendorApplication from "../pages/application";
import AccountRestriction from "../pages/restriction";
import AccountManagement from "../pages/management";
import ExamplePage from "../pages/example_page";
import ApplicationDetails from "../pages/application_details";
import ComplaintLayout from "../layout/complaint_layout";
import ApplicationLayout from "../layout/application_layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
    },
    {
        element: <LoginPage />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "complaints",
                element: <ComplaintLayout />,
                children: [
                    {
                        path: "",
                        element: <Complaints />,
                    },
                    {
                        path: ":complaintId",
                        element: <ComplaintsDetails />,
                    },
                ],
            },
            {
                path: "application",
                element: <ApplicationLayout />,
                children: [
                    {
                        path: "",
                        element: <VendorApplication />,
                    },
                    {
                        path: ":applicationId",
                        element: <ApplicationDetails />,
                    },
                ],
            },
            {
                path: "restriction",
                element: <AccountRestriction />,
            },
            {
                path: "management",
                element: <AccountManagement />,
            },
            {
                path: "example",
                element: <ExamplePage />,
            },
        ],
    },
]);

export default function useRouter() {
    return router;
}
