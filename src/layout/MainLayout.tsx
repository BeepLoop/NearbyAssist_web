import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import useStorage from "../hooks/use_storage";

export default function MainLayout() {
    const { getSavedUser } = useStorage();

    const user = getSavedUser();
    if (user === null) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <div className="grid h-screen grid-cols-[16rem_1fr]">
            <Sidebar />
            <div className="overflow-scroll">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
