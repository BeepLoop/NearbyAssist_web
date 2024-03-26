export default function Complaints() {
    return (
        <div>
            <header className="bg-green-500 py-4 text-white">
                <div className="flex justify-between items-center mx-auto px-4 container">
                    <h1 className="font-semibold text-2xl">User Complaints</h1>
                    {/* Navigation Links */}
                </div>
            </header>
            <br></br>
            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mx-auto mb-2 p-4 border rounded-md container">
                <h2 className="mb-2 font-semibold text-lg">Users</h2>
                <div className="flex justify-end mb-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-2 border rounded-md outline-none"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 ml-2 px-4 py-2 rounded-md text-white">
                        Search
                    </button>
                </div>
            </div>
            {/* Complaints Table */}
            <div className="border-gray-200 bg-gray-100 shadow-md mx-auto mb-4 p-4 border rounded-md overflow-x-auto container">
                <table className="border-gray-300 border rounded-lg w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 font-medium text-gray-700 text-left">
                                # of Complaints
                            </th>
                            <th className="px-6 py-3 font-medium text-gray-700 text-left">
                                Complainant Name
                            </th>
                            <th className="px-6 py-3 font-medium text-gray-700 text-left">
                                Status
                            </th>
                            <th className="px-6 py-3 font-medium text-gray-700 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample data, replace with dynamic data if needed */}
                        <tr>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Juan Dela Cruz</td>
                            <td className="px-6 py-4 rounded-md text-orange-500">
                                Pending
                            </td>

                            <td className="px-6 py-4">
                                <button className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 px-4 py-2 rounded-md text-white focus:outline-none">
                                    Take Action
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">Dela Cruz Juan</td>
                            <td className="px-6 py-4 text-green-500">
                                Resolved
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 px-4 py-2 rounded-md text-white focus:outline-none">
                                    Take Action
                                </button>
                            </td>
                        </tr>
                        {/* Add more rows with dynamic data if needed */}
                    </tbody>
                </table>
                <div className="mx-auto p-4 container">
                    <div className="relative">
                        {/* Help text */}
                        <span className="bottom left-0 absolute mt-4 text-gray-700 text-sm dark:text-gray-400">
                            Showing{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                1
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                10
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                100
                            </span>{" "}
                            Entries
                        </span>
                        <div className="inline-flex right-0 absolute">
                            {/* Buttons */}
                            <button className="flex justify-center items-center dark:border-gray-700 bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 rounded-s h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray-400">
                                <svg
                                    className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 5H1m0 0 4 4M1 5l4-4"
                                    />
                                </svg>
                                Prev
                            </button>
                            <button className="flex justify-center items-center border-0 border-gray-700 border-s dark:border-gray-700 bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 rounded-e h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray-400">
                                Next
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
