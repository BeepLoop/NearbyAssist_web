import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
    const [userCount, setUserCount] = useState(0);
    const [complaintCount, setComplaintCount] = useState(0);
    const [restrictedAccountCount, setRestrictedAccountCount] = useState(0);
    const [verifiedServiceProviderCount, setVerifiedServiceProviderCount] =
        useState(0);
    const [pendingApplicationCount, setPendingApplicationCount] = useState(0);

    useEffect(function () {
        async function fetchData() {
            try {
                const userResponse = await axios.get("/v1/admin/users/count");
                const complaintResponse = await axios.get(
                    "/v1/admin/complaints/count"
                );
                const restrictedAccountResponse = await axios.get(
                    "/v1/admin/vendor/count"
                );
                const verifiedServiceProviderResponse = await axios.get(
                    "/v1/public/vendors"
                );
                const pendingApplicationResponse = await axios.get(
                    "/v1/admin/application/count"
                );

                setUserCount(userResponse.data.count);
                setComplaintCount(complaintResponse.data.count);
                setRestrictedAccountCount(
                    restrictedAccountResponse.data.restricted
                );
                setVerifiedServiceProviderCount(
                    verifiedServiceProviderResponse.data.count
                );
                setPendingApplicationCount(
                    pendingApplicationResponse.data.count
                );
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
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
            </div>
            <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Users
                    </h2>
                    <p className="font-bold text-3xl text-blue">{userCount}</p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Complaints
                    </h2>
                    <p className="font-bold text-3xl text-red">
                        {complaintCount}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Restricted Accounts
                    </h2>
                    <p className="font-bold text-3xl text-yellow">
                        {restrictedAccountCount}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Verified Service Providers
                    </h2>
                    <p className="font-bold text-3xl text-primary">
                        {verifiedServiceProviderCount}
                    </p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Pending Applications
                    </h2>
                    <p className="font-bold text-3xl text-orange">
                        {pendingApplicationCount}
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
