import { Link } from "react-router-dom";

export default function SystemIssues() {
    return (
        <div className="flex-1 p-4">
            <div className="bg-primary px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">System Issue Reports</h1>
                <div className="flex justify-between items-center mx-auto">
                    <div className="flex justify-start items-center">
                        <p className="mr-4 font-semibold text-lg">Show</p>
                        <button
                            id="dropdownDividerButton"
                            data-dropdown-toggle="dropdownDivider"
                            className="inline-flex items-center border-white bg-primary-greener hover:bg-primary-pale dark:hover:bg-primary px-5 py-2.5 border rounded-lg font-medium text-center text-sm text-white"
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
                            className="border-white px-3 py-2 border rounded-md outline-none"
                        />
                        <button className="border-white bg-primary-greener hover:bg-primary-pale ml-2 px-4 py-2 border rounded-md font-semibold text-white">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <table className="mt-4 border rounded-lg w-full">
                <thead>
                    <tr className="bg-primary-greener">
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Report No.
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Name
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Date & Time
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Complainant 1</td>
                        <td className="px-6 py-4">01-13-24 8:00 AM</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/system_issues/1"}
                                    className="text-blue hover:underline"
                                >
                                    View Details
                                </Link>
                            </ul>
                        </td>
                    </tr>
                    <tr className="border">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Complainant 2</td>
                        <td className="px-6 py-4">01-13-24 12:00 PM</td>
                        <td className="px-6 py-4">
                            <ul>
                                <Link
                                    to={"/system_issues/2"}
                                    className="text-blue hover:underline"
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
                    <span className="bottom left-0 absolute mt-2 text-sm">
                        Showing{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            1
                        </span>{" "}
                        to{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            10
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            100
                        </span>{" "}
                        Entries
                    </span>
                    <div className="inline-flex right-0 absolute">
                        <button className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-s h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray">
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
                        <button className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-e h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray">
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
