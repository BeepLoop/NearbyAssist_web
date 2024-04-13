import { SetStateAction, useState } from "react";
export default function VendorApplication() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
    const [declineReason, setDeclineReason] = useState("");

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function openSecondModal() {
        setIsSecondModalOpen(true);
    }

    function closeSecondModal() {
        setIsSecondModalOpen(false);
    }

    function openDeclineModal() {
        setIsDeclineModalOpen(true);
    }

    function closeDeclineModal() {
        setIsDeclineModalOpen(false);
    }

    function handleDecline() {
        closeDeclineModal();
    }

    function handleDeclineReasonChange(event: {
        target: { value: SetStateAction<string> };
    }) {
        setDeclineReason(event.target.value);
    }
    return (
        <div className="flex-1 p-4">
            <div className="bg-gray-500 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">
                    Service Vendor Application
                </h1>
            </div>
            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mx-auto mb-2 p-4 border rounded-md">
                <h2 className="mb-2 font-semibold text-lg">Service Vendors</h2>
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
            <div className="border-gray-200 bg-gray-100 shadow-md mx-auto mt-4 mb-4 p-8 border rounded-md overflow-x-auto">
                <table className="border-gray-300 border rounded-lg w-full">
                    <thead>
                        <tr className="bg-gray-600">
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Name
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Status
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Date Applied
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4">John Doe</td>
                            <td className="px-6 py-4 text-orange-500">
                                Pending
                            </td>
                            <td className="px-6 py-4">2024-03-20</td>
                            <td className="px-6 py-4">
                                <ul>
                                    <button
                                        onClick={openModal}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Application
                                    </button>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">Jane Smith</td>

                            <td className="px-4 py-2 text-green-500">
                                Approved
                            </td>

                            <td className="px-6 py-4">2024-03-19</td>
                            <td className="px-6 py-4">
                                <ul>
                                    <button
                                        onClick={openModal}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Application
                                    </button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="mx-auto p-4">
                    <div className="relative">
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
            // First Modal
            {isModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    <div className="z-10 bg-white shadow-md p-8 rounded-md max-w-xl">
                        <h2 className="mb-2 font-semibold text-lg">
                            Applicant Information
                        </h2>
                        <table className="border-collapse mb-2 w-full">
                            <thead className="bg-gray-600 text-white">
                                <tr>
                                    <th className="px-4 py-1 border">
                                        Applicant Name
                                    </th>
                                    <th className="px-4 py-1 border">
                                        ID Type
                                    </th>
                                    <th className="px-4 py-1 border">
                                        ID Number
                                    </th>
                                    <th className="px-4 py-1 border">
                                        Date Applied
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="px-4 py-1 border">
                                        John Doe
                                    </td>
                                    <td className="px-4 py-1 border">
                                        Driver's License
                                    </td>
                                    <td className="px-4 py-1 border">
                                        123456789
                                    </td>
                                    <td className="px-4 py-1 border">
                                        2024-04-10
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="mb-2 font-semibold text-lg">
                            File Attachments
                        </h2>
                        <table className="border-collapse mb-4 w-full">
                            <thead className="bg-gray-600 text-white">
                                <tr>
                                    <th className="px-4 py-1 border">
                                        File Name
                                    </th>
                                    <th className="px-4 py-1 border">
                                        File Type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="px-4 py-1 border">
                                        ID Picture (Front)
                                    </td>
                                    <td className="px-4 py-1 border">Image</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-1 border">
                                        ID Picture (Back)
                                    </td>
                                    <td className="px-4 py-1 border">Image</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-1 border">
                                        Others (if any)
                                    </td>
                                    <td className="px-4 py-1 border">Image</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-1 border">
                                        Recent Picture
                                    </td>
                                    <td className="px-4 py-1 border">Image</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="mb-2 font-semibold text-lg">
                            Applicant Status
                        </h2>
                        <table className="border-collapse mb-4 w-full">
                            <thead className="bg-gray-600 text-white">
                                <tr>
                                    <th className="px-4 py-1 border">Status</th>
                                    <th className="px-4 py-1 border">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border text-orange-500">
                                        Pending
                                    </td>
                                    <td className="flex justify-center px-4 py-2 border">
                                        <button
                                            className="bg-green-600 hover:bg-green-700 mr-2 px-4 py-2 rounded font-bold text-white"
                                            onClick={openSecondModal}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold text-white"
                                            onClick={openDeclineModal}
                                        >
                                            Decline
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex justify-end">
                            <button
                                className="bg-red-500 hover:bg-red-600 ml-auto px-4 py-2 rounded font-bold text-white"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    // Second Modal
                    {isSecondModalOpen && (
                        <div className="z-50 fixed inset-0 flex justify-center items-center">
                            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                            <div className="z-10 bg-white shadow-md p-8 rounded-md max-w-xl">
                                <h2 className="mb-2 font-semibold text-lg">
                                    Attachment Checklist
                                </h2>

                                <ul className="mb-4">
                                    <li>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox w-5 h-5 text-green-600"
                                            />
                                            <span className="ml-2">
                                                ID cards
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox w-5 h-5 text-green-600"
                                            />
                                            <span className="ml-2">
                                                Business permits
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox w-5 h-5 text-green-600"
                                            />
                                            <span className="ml-2">
                                                Other Certifications (NC2)
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox w-5 h-5 text-green-600"
                                            />
                                            <span className="ml-2">
                                                Latest picture taken
                                            </span>
                                        </label>
                                    </li>
                                </ul>

                                <h2 className="mb-2 font-semibold text-lg">
                                    Account Type
                                </h2>
                                <div className="flex">
                                    <button
                                        className="border-green-600 hover:bg-green-600 mr-2 px-4 py-2 border rounded font-bold text-green-600 hover:text-white"
                                        onClick={closeSecondModal}
                                    >
                                        Semi-verified
                                    </button>
                                    <button
                                        className="border-green-600 hover:bg-green-600 px-4 py-2 border rounded font-bold text-green-600 hover:text-white"
                                        onClick={closeSecondModal}
                                    >
                                        Fully-verified
                                    </button>
                                </div>

                                <div className="flex justify-end py-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 ml-auto px-4 py-2 rounded font-bold text-white"
                                        onClick={closeSecondModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            // Decline Modal
            {isDeclineModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    <div className="z-10 bg-white shadow-md p-8 rounded-md w-full max-w-2xl">
                        <h2 className="mb-2 font-semibold text-lg text-red-600">
                            Decline Application
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">
                                Applicant Name:
                            </label>
                            <p className="text-gray-900"></p>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">
                                Reason for Decline:
                            </label>
                            <textarea
                                className="px-3 py-2 border rounded-md w-full"
                                rows={4}
                                value={declineReason}
                                onChange={handleDeclineReasonChange}
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="bg-green-500 hover:bg-green-600 mr-2 px-4 py-2 rounded font-bold text-white"
                                onClick={handleDecline}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
