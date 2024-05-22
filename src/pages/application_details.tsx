import { Link } from "react-router-dom";
import { useState } from "react";

export default function ApplicationDetails() {
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
    const [declineReason] = useState("");

    function openDeclineModal() {
        setIsDeclineModalOpen(true);
    }

    function openSecondModal() {
        setIsSecondModalOpen(true);
    }

    function closeSecondModal() {
        setIsSecondModalOpen(false);
    }

    function handleDecline() {
        setIsDeclineModalOpen(false);
    }
    function closeDeclineModal() {
        setIsDeclineModalOpen(false);
    }

    return (
        <div className="p-8">
            <div className="bg-primary px-4 py-2 rounded-lg text-white">
                <h1 className="font-semibold text-2xl">Vendor Details</h1>
            </div>

            <div className="shadow-md mt-2 p-8 rounded-md">
                <h2 className="mb-2 font-semibold text-lg">
                    Applicant Information
                </h2>
                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-1 border">Applicant Name</th>
                            <th className="px-4 py-1 border">ID Type</th>
                            <th className="px-4 py-1 border">ID Number</th>
                            <th className="px-4 py-1 border">Date Applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-1 border">Applicant 1</td>
                            <td className="px-4 py-1 border">
                                Driver's License
                            </td>
                            <td className="px-4 py-1 border">123456789</td>
                            <td className="px-4 py-1 border">2024-04-10</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="mb-2 font-semibold text-lg">File Attachments</h2>
                <table className="border-collapse mb-4 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-1 border">File Name</th>
                            <th className="px-4 py-1 border">File Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-1 border font-semibold">
                                ID Picture (Front)
                            </td>
                            <td className="px-4 py-1 border">Front Image</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-1 border font-semibold">
                                ID Picture (Back)
                            </td>
                            <td className="px-4 py-1 border">Back Image</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-1 border font-semibold">
                                Others (if any)
                            </td>
                            <td className="px-4 py-1 border">Image</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-1 border font-semibold">
                                Recent Picture
                            </td>
                            <td className="px-4 py-1 border">Image</td>
                        </tr>
                    </tbody>
                </table>

                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-1 border">Action</th>
                        </tr>
                    </thead>

                    <div className="flex justify-center px-4 py-6">
                        <button
                            className="bg-primary hover:bg-primary-pale mr-2 px-4 py-2 rounded font-bold text-white"
                            onClick={openSecondModal}
                        >
                            Accept
                        </button>
                        <button
                            className="bg-red hover:bg-red-lightred px-4 py-2 rounded font-bold text-white"
                            onClick={openDeclineModal}
                        >
                            Decline
                        </button>
                    </div>
                </table>

                <div className="flex justify-end">
                    <Link
                        className="bg-red hover:bg-red-lightred ml-auto px-4 py-2 rounded font-bold text-white"
                        to={"/application"}
                    >
                        Close
                    </Link>
                </div>
            </div>
            {isSecondModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray opacity-75"></div>
                    <div className="relative z-10 bg-white shadow-md p-8 rounded-md w-full max-w-xl">
                        <button
                            className="top-2 right-2 absolute text-gray hover:text-gray-darkgray"
                            onClick={closeSecondModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                                />
                            </svg>
                        </button>
                        <h2 className="mb-2 font-semibold text-lg">
                            Attachment Checklist
                        </h2>
                        <ul className="mb-4">
                            <li>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox w-5 h-5 text-green"
                                    />
                                    <span className="ml-2">ID cards</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox w-5 h-5"
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
                                        className="form-checkbox w-5 h-5"
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
                                        className="form-checkbox w-5 h-5"
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
                        <div className="flex justify-center">
                            <button
                                className="border-primary hover:bg-primary mr-4 px-4 py-2 border rounded font-semibold text-primary hover:text-white"
                                onClick={openSecondModal}
                            >
                                Semi-verified
                            </button>
                            <button
                                className="border-primary hover:bg-primary ml-4 px-4 py-2 border rounded font-semibold text-primary hover:text-white"
                                onClick={openSecondModal}
                            >
                                Fully-verified
                            </button>
                        </div>

                        <div className="flex justify-center py-2">
                            <button
                                className="bg-primary hover:bg-primary-pale px-4 py-2 rounded font-bold text-white"
                                onClick={openSecondModal}
                            >
                                Accept Application
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isDeclineModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray opacity-75"></div>
                    <div className="relative z-10 bg-white shadow-md p-8 rounded-md w-full max-w-2xl">
                        <button
                            className="top-2 right-2 absolute text-tgray hover:text-gray-darkgray"
                            onClick={closeDeclineModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                                />
                            </svg>
                        </button>
                        <h2 className="mb-2 font-semibold text-lg text-red">
                            Decline Application
                        </h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold">
                                Applicant Name:
                            </label>
                            <p className="text-gray-900"></p>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold">
                                Reason for Decline:
                            </label>
                            <textarea
                                className="px-3 py-2 border rounded-md w-full"
                                rows={4}
                                value={declineReason}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-primary hover:bg-primary-pale mr-2 px-4 py-2 rounded font-bold text-white"
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
