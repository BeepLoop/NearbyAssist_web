import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use_auth";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

interface DashboardStats {
    users: number;
    complaints: number;
    restrictedAccounts: number;
    serviceProviders: number;
    pendingApplications: number;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { send } = useRequest();
    const { getSavedUser } = useStorage();

    const [stats, setStats] = useState({
        users: 0,
        complaints: 0,
        restrictedAccounts: 0,
        serviceProviders: 0,
        pendingApplications: 0,
    });

    async function fetchDashboardData() {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/dashboard-stats`;

        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return;
        }

        try {
            const response = await send(user.accessToken, url, "GET");
            if (!response.success) {
                console.log("Request failed");
                return;
            }

            setStats(response.data as DashboardStats);
        } catch (e) {
            console.error(e);
        }
    }

    function initializeDashboard() {
        fetchDashboardData();
    }

    function useInitializeDashboard() {
        useEffect(function () {
            initializeDashboard();
        }, []);
    }

    useInitializeDashboard();

    async function handleLogout() {
        try {
            const response = await logout();
            if (!response.success) {
                throw new Error(response.error);
            }

            navigate("/login");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="flex-1 p-4">
            <div className="bg-primary px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Dashboard Overview</h1>
            </div>
            <div className="bg-white shadow-lg mt-2 mb-4 p-4">
                <h2 className="mb-2 font-semibold text-lg">Welcome Admin</h2>
                <p>
                    Welcome to the dashboard, admin. Here's an overview of the
                    current statistics:
                </p>
            </div>
            <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Users
                    </h2>
                    <p className="font-bold text-3xl text-blue">
                        {stats.users}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Complaints
                    </h2>
                    <p className="font-bold text-3xl text-red">
                        {stats.complaints}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Restricted Accounts
                    </h2>
                    <p className="font-bold text-3xl text-yellow">
                        {stats.restrictedAccounts}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Verified Service Providers
                    </h2>
                    <p className="font-bold text-3xl text-primary">
                        {stats.serviceProviders}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Pending Applications
                    </h2>
                    <p className="font-bold text-3xl text-orange">
                        {stats.pendingApplications}
                    </p>
                </div>
                <div className="col-span-3 shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-xl">Map Overview</h2>
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Map Overview"
                        className="rounded-md w-full"
                    />
                </div>
            </section>
            <button
                onClick={handleLogout}
                className="bg-red-lightred mt-4 p-2 rounded text-white"
            >
                Logout
            </button>
        </div>
    );
}
