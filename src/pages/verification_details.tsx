import { Link } from "react-router-dom";
import { useState } from "react";

export default function VerificationDetails() {
    const [isPromptOpen, setIsPromptOpen] = useState(false);
    const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
    const [declineReason] = useState("");

    function openDeclineModal() {
        setIsDeclineModalOpen(true);
    }

    function openPrompt() {
        setIsPromptOpen(true);
    }

    function closePrompt() {
        setIsPromptOpen(false);
    }

    function handleDecline() {
        setIsDeclineModalOpen(false);
    }

    function closeDeclineModal() {
        setIsDeclineModalOpen(false);
    }

    return (
        <div className="p-8">
            <div className="shadow-md mt-2 p-8 rounded-md">
                <h2 className="mb-2 font-semibold text-lg">
                    Identity Verification Applicant Details
                </h2>
                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-1 border">Applicant Name</th>
                            <th className="px-4 py-1 border">Address</th>
                            <th className="px-4 py-1 border">ID Type</th>
                            <th className="px-4 py-1 border">ID Number</th>
                            <th className="px-4 py-1 border">Date Applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-1 border">Applicant 1</td>
                            <td className="px-4 py-1 border">
                                Tagum City, Davao del Norte
                            </td>
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
                                Latest Picture (Selfie)
                            </td>
                            <td className="px-4 py-1 border">Image</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-1 border font-semibold">
                                Recent Picture (Holding the ID)
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
                            onClick={openPrompt}
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
                        to={"/verification"}
                    >
                        Close
                    </Link>
                </div>
            </div>

            {isPromptOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray opacity-75"></div>
                    <div className="relative z-10 bg-white shadow-md p-8 rounded-md w-full max-w-xl text-center">
                        <p className="mb-4 font-semibold text-lg">
                            Juan Dela Cruz's Identity is now verified!
                        </p>
                        <button
                            className="bg-primary hover:bg-primary-pale px-4 py-2 rounded font-bold text-white"
                            onClick={closePrompt}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isDeclineModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gray opacity-75"></div>
                    <div className="relative z-10 bg-white shadow-md p-8 rounded-md w-full max-w-2xl">
                        <button
                            className="top-2 right-2 absolute text-gray hover:text-gray-darkgray"
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
                            <p className="text-gray-darkgray"></p>
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
                                className="bg-red hover:bg-red-lightred mr-2 px-4 py-2 rounded font-bold text-white"
                                onClick={handleDecline}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
