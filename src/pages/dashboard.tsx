import { useState, useEffect } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

type DashboardStats = {
    users: number;
    complaints: number;
    restrictedAccounts: number;
    serviceVendors: number;
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

type ServiceVendorsCountResponse = {
    count: number;
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
        serviceVendors: 0,
        pendingApplications: 0,
    });
    const [loadingStates, setLoadingStates] = useState({
        users: true,
        complaints: true,
        restrictedAccounts: true,
        serviceVendors: true,
        pendingApplications: true,
    });
    const [error, setError] = useState<string | null>(null);

    async function fetchUsersCount(): Promise<void> {
        try {
            const serverAddr = import.meta.env.VITE_BACKEND_URL;
            const url = `${serverAddr}/v1/admin/users/count`;
            const user = getSavedUser();
            if (user === null) {
                console.log("no user data found");
                return;
            }
            console.log("Fetching users count with token:", user.accessToken);

            const response = await send<UsersCountResponse>(
                user.accessToken,
                url,
                "GET"
            );
            console.log("Users count response:", response);
            setStats(function (prevStats) {
                return {
                    ...prevStats,
                    users: response.success ? response.data.count : 0,
                };
            });
        } catch (err) {
            console.error("Failed to fetch users count:", err);
            setError("Failed to fetch users count.");
        } finally {
            setLoadingStates(function (prev) {
                return { ...prev, users: false };
            });
        }
    }

    async function fetchComplaintsCount(): Promise<void> {
        try {
            const serverAddr = import.meta.env.VITE_BACKEND_URL;
            const url = `${serverAddr}/v1/admin/complaints/system/count`;
            const user = getSavedUser();
            if (user === null) {
                console.log("no user data found");
                return;
            }
            console.log(
                "Fetching complaints count with token:",
                user.accessToken
            );
            const response = await send<ComplaintsCountResponse>(
                user.accessToken,
                url,
                "GET"
            );
            console.log("Complaints count response:", response);
            setStats(function (prevStats) {
                return {
                    ...prevStats,
                    complaints: response.success ? response.data.count : 0,
                };
            });
        } catch (err) {
            console.error("Failed to fetch complaints count:", err);
            setError("Failed to fetch complaints count.");
        } finally {
            setLoadingStates(function (prev) {
                return { ...prev, complaints: false };
            });
        }
    }

    async function fetchRestrictedAccountsCount(): Promise<void> {
        try {
            const serverAddr = import.meta.env.VITE_BACKEND_URL;
            const url = `${serverAddr}/v1/admin/vendor/count?status=restricted`;
            const user = getSavedUser();
            if (user === null) {
                console.log("no user data found");
                return;
            }
            console.log(
                "Fetching restricted accounts count with token:",
                user.accessToken
            );
            const response = await send<RestrictedAccountsCountResponse>(
                user.accessToken,
                url,
                "GET"
            );
            console.log("Restricted accounts count response:", response);
            setStats(function (prevStats) {
                return {
                    ...prevStats,
                    restrictedAccounts: response.success
                        ? response.data.count
                        : 0,
                };
            });
        } catch (err) {
            console.error("Failed to fetch restricted accounts count:", err);
            setError("Failed to fetch restricted accounts count.");
        } finally {
            setLoadingStates(function (prev) {
                return { ...prev, restrictedAccounts: false };
            });
        }
    }

    async function fetchServiceProvidersCount(): Promise<void> {
        try {
            const serverAddr = import.meta.env.VITE_BACKEND_URL;
            const url = `${serverAddr}/v1/admin/vendor/count`;
            const user = getSavedUser();
            if (user === null) {
                console.log("no user data found");
                return;
            }
            console.log(
                "Fetching service vendors count with token:",
                user.accessToken
            );

            const response = await send<ServiceVendorsCountResponse>(
                user.accessToken,
                url,
                "GET"
            );
            console.log("Service vendors count response:", response);
            setStats(function (prevStats) {
                return {
                    ...prevStats,
                    serviceVendors: response.success ? response.data.count : 0,
                };
            });
        } catch (err) {
            console.error("Failed to fetch service vendors count:", err);
            setError("Failed to fetch service vendors count.");
        } finally {
            setLoadingStates(function (prev) {
                return { ...prev, serviceVendors: false };
            });
        }
    }

    async function fetchPendingApplicationsCount(): Promise<void> {
        try {
            const serverAddr = import.meta.env.VITE_BACKEND_URL;
            const url = `${serverAddr}/v1/admin/application/count?filter=pending`;
            const user = getSavedUser();
            if (user === null) {
                console.log("no user data found");
                return;
            }
            console.log(
                "Fetching pending applications count with token:",
                user.accessToken
            );

            const response = await send<PendingApplicationsCountResponse>(
                user.accessToken,
                url,
                "GET"
            );
            console.log("Pending applications count response:", response);
            setStats(function (prevStats) {
                return {
                    ...prevStats,
                    pendingApplications: response.success
                        ? response.data.count
                        : 0,
                };
            });
        } catch (err) {
            console.error("Failed to fetch pending applications count:", err);
            setError("Failed to fetch pending applications count.");
        } finally {
            setLoadingStates(function (prev) {
                return { ...prev, pendingApplications: false };
            });
        }
    }

    useEffect(function () {
        fetchUsersCount();
        fetchComplaintsCount();
        fetchRestrictedAccountsCount();
        fetchServiceProvidersCount();
        fetchPendingApplicationsCount();
    }, []);

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
                {error && (
                    <div className="mt-2 text-red-500">
                        <p>Error: {error}</p>
                    </div>
                )}
            </div>
            <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Users:
                    </h2>
                    {loadingStates.users ? (
                        <p className="font-bold text-3xl">Loading...</p>
                    ) : (
                        <p className="font-bold text-3xl text-blue">
                            {stats.users}
                        </p>
                    )}
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Complaints
                    </h2>
                    {loadingStates.complaints ? (
                        <p className="font-bold text-3xl">Loading...</p>
                    ) : (
                        <p className="font-bold text-3xl text-red">
                            {stats.complaints}
                        </p>
                    )}
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Restricted Accounts
                    </h2>
                    {loadingStates.restrictedAccounts ? (
                        <p className="font-bold text-3xl">Loading...</p>
                    ) : (
                        <p className="font-bold text-3xl text-yellow">
                            {stats.restrictedAccounts}
                        </p>
                    )}
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Service Vendors
                    </h2>
                    {loadingStates.serviceVendors ? (
                        <p className="font-bold text-3xl">Loading...</p>
                    ) : (
                        <p className="font-bold text-3xl text-primary">
                            {stats.serviceVendors}
                        </p>
                    )}
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Pending Applications
                    </h2>
                    {loadingStates.pendingApplications ? (
                        <p className="font-bold text-3xl">Loading...</p>
                    ) : (
                        <p className="font-bold text-3xl text-orange">
                            {stats.pendingApplications}
                        </p>
                    )}
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
