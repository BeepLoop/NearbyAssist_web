export default function Dashboard() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-primary px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Dashboard Overview</h1>
            </div>
            <div className="bg-white shadow-md mt-2 mb-4 p-4">
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
                    <p className="font-bold text-3xl text-blue">500</p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Number of Complaints
                    </h2>
                    <p className="font-bold text-3xl text-red">50</p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Restricted Accounts
                    </h2>
                    <p className="font-bold text-3xl text-yellow">10</p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Verified Service Providers
                    </h2>
                    <p className="font-bold text-3xl text-primary">200</p>
                </div>
                <div className="shadow-md p-4 border rounded-md">
                    <h2 className="mb-2 font-semibold text-lg">
                        Pending Applications
                    </h2>
                    <p className="font-bold text-3xl text-orange">20</p>
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
