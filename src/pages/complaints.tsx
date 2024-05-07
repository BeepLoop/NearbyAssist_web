import { Link } from "react-router-dom";

export default function Complaints() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-green-600 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">User Complaints</h1>
            </div>
            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mx-auto mb-2 p-4 border rounded-md">
                <div className="flex justify-start items-center">
                    <p className="mr-4 text-m">Show</p>
                    <button
                        id="dropdownDividerButton"
                        data-dropdown-toggle="dropdownDivider"
                        className="inline-flex items-center bg-green-600 hover:bg-green-800 dark:hover:bg-green-700 dark:bg-green-600 px-5 py-2.5 rounded-lg font-medium text-center text-sm text-white"
                        type="button"
                    >
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
                    <button className="bg-green-600 hover:bg-green-800 ml-2 px-4 py-2 rounded-md text-white">
                        Search
                    </button>
                </div>
            </div>
            <table className="border-gray-300 border rounded-lg w-full">
                <thead>
                    <tr className="border-gray-800 bg-green-600 border">
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Number of Complaints
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Complainant Name
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-gray-800 border">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Complainant 1</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/content/complaintsdetails"}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </ul>
                        </td>
                    </tr>
                    <tr className="border-gray-800 border">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Complainant 2</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/content/complaintsdetails"}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Details
                                </Link>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mx-auto p-4">
                <div className="relative">
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
    );
}
