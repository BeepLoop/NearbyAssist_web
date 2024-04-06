export default function Dashboard() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-gray-500 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Dashboard Overview</h1>
            </div>

            <div className="border-gray-200 bg-white shadow-md mb-4 p-4 border rounded-md">
                <h2 className="mb-2 font-semibold text-lg">Welcome Admin</h2>
                <p className="text-gray-600">
                    Welcome to the dashboard, admin. Here's an overview of the
                    current statistics:
                </p>
            </div>
            {/* Overview Section */}
            <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
                {/* Number of Users */}
                <div className="border-gray-200 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Users
                    </h2>
                    <p className="font-bold text-3xl text-blue-500">500</p>
                </div>
                {/* Number of Complaints */}
                <div className="border-gray-200 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Complaints
                    </h2>
                    <p className="font-bold text-3xl text-red-500">50</p>
                </div>
                {/* Restricted Accounts */}
                <div className="border-gray-200 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Restricted Accounts
                    </h2>
                    <p className="font-bold text-3xl text-yellow-500">10</p>
                </div>
                {/* Verified Service Providers */}
                <div className="border-gray-200 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Verified Service Providers
                    </h2>
                    <p className="font-bold text-3xl text-green-500">200</p>
                </div>
                {/* Pending Applications */}
                <div className="border-gray-200 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Pending Applications
                    </h2>
                    <p className="font-bold text-3xl text-orange-500">20</p>
                </div>
                {/* Map Overview */}
                <div className="border-gray-200 col-span-3 bg-white shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">Map Overview</h2>
                    {/* Replace the following image with your map */}
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
