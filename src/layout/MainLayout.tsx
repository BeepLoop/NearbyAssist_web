import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function MainLayout() {
    const isAuthenticated = !!localStorage.getItem("accessToken");

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="grid grid-cols-[16rem_1fr] h-screen">
            <Sidebar />
            <div className="overflow-scroll">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
