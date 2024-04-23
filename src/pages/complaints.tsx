import { Link } from "react-router-dom";
export default function Complaints() {

    return (
        <div className="flex-1 p-4">
            <div className="bg-green-600 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">User Complaints</h1>
            </div>

            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mx-auto mb-2 p-4 border rounded-md">
                <div className="flex items-center">
                    <p className="mr-4 text-xl">Show</p>
                    <button
                        id="dropdownDividerButton"
                        data-dropdown-toggle="dropdownDivider"
                        className="bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 inline-flex items-center dark:hover:bg-blue-700 dark:bg-blue-600 px-5 py-2.5 rounded-lg font-medium text-center text-sm dark:focus:ring-blue-800"
                        type="button"
                    >
                        {" "}
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
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
            <div className="border-gray-200 bg-gray-100 shadow-md mb-4 p-8 border rounded-md overflow-x-auto">
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample data, replace with dynamic data if needed */}
                        <tr>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Juan Dela Cruz</td>
                            

                            <td className="px-6 py-4">
                                
                                    <ul>
                                        <Link
                                      
                                        to={"/complaintsdetails"}
                                            
                                            className="text-blue-500 hover:underline"
                                           
                                        >
                                            View Details
                                        </Link>
                                    </ul>
                                </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">Dela Cruz Juan</td>
                            
                            <td className="px-6 py-4">
                                    <ul>
                                        <a
                                            
                                            className="text-blue-500 hover:underline"
                                          
                                        >
                                            View Details
                                        </a>
                                    </ul>
                                </td>
                        </tr>
                        {/* Add more rows with dynamic data if needed */}
                    </tbody>
                </table>
                <div className="mx-auto p-4">
                    <div className="relative">
                        {/* Help text */}
                        <span className="bottom left-0 absolute mt-2 text-gray-700 text-sm dark:text-gray-400">
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
                            </button>
                            <button className="flex justify-center items-center border-0 border-gray-700 border-s dark:border-gray-700 bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 rounded-e h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray-400">
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
