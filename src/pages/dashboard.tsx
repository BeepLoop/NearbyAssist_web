import { useState, useEffect } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

type DashboardStats = {
    users: number;
    complaints: number;
    restrictedAccounts: number;
    serviceProviders: number;
    pendingApplications: number;
};

type UsersCountResponse = {
    count: number;
};

type ComplaintsCountResponse = {
    count: number;
};

type RestrictedAccountsCountResponse = {
    count: number;
};

type ServiceProvidersResponse = {
    length: number;
};

type PendingApplicationsCountResponse = {
    count: number;
};

export default function Dashboard() {
    const { send } = useRequest();
    const { getSavedUser } = useStorage();
    const [stats, setStats] = useState<DashboardStats>({
        users: 0,
        complaints: 0,
        restrictedAccounts: 0,
        serviceProviders: 0,
        pendingApplications: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchUsersCount(): Promise<number> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/admin/users/count`;
        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return 0;
        }
        const response = await send<UsersCountResponse>(
            user.accessToken,
            url,
            "GET"
        );
        return response.success ? response.data.count : 0;
    }

    async function fetchComplaintsCount(): Promise<number> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/admin/complaints/count`;
        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return 0;
        }
        const response = await send<ComplaintsCountResponse>(
            user.accessToken,
            url,
            "GET"
        );
        return response.success ? response.data.count : 0;
    }

    async function fetchRestrictedAccountsCount(): Promise<number> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/admin/vendor/count`;
        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return 0;
        }
        const response = await send<RestrictedAccountsCountResponse>(
            user.accessToken,
            url,
            "GET"
        );
        return response.success ? response.data.count : 0;
    }

    async function fetchServiceProvidersCount(): Promise<number> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/public/services`;
        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return 0;
        }
        const response = await send<ServiceProvidersResponse>(
            user.accessToken,
            url,
            "GET"
        );
        return response.success ? response.data.length : 0;
    }

    async function fetchPendingApplicationsCount(): Promise<number> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/admin/application/count`;
        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return 0;
        }
        const response = await send<PendingApplicationsCountResponse>(
            user.accessToken,
            url,
            "GET"
        );
        return response.success ? response.data.count : 0;
    }

    async function fetchDashboardData() {
        try {
            setLoading(true);
            setError(null);

            const [
                users,
                complaints,
                restrictedAccounts,
                serviceProviders,
                pendingApplications,
            ] = await Promise.all([
                fetchUsersCount(),
                fetchComplaintsCount(),
                fetchRestrictedAccountsCount(),
                fetchServiceProvidersCount(),
                fetchPendingApplicationsCount(),
            ]);

            setStats({
                users,
                complaints,
                restrictedAccounts,
                serviceProviders,
                pendingApplications,
            });
        } catch (err) {
            setError("Failed to fetch dashboard data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(function () {
        fetchDashboardData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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
        </div>
    );
}
