import { Link } from "react-router-dom";

export default function SystemIssuesDetails() {
    return (
        <div className="p-4 min-h-screen">
            <div className="bg-white shadow-md p-6 rounded-lg">
                <div>
                    <h2 className="mb-2 font-semibold text-xl">
                        System Issue Report Details
                    </h2>
                    <table className="border-collapse mt-4 w-full">
                        <thead>
                            <tr className="bg-gray-darkgray text-white">
                                <th className="px-4 py-2 border w-1/3">
                                    Attribute
                                </th>
                                <th className="px-4 py-2 border w-2/3">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bg-primary-greener px-4 py-2 border w-1/3 font-semibold text-white">
                                    Report ID:
                                </td>
                                <td className="px-4 py-2 border w-2/3">1</td>
                            </tr>
                            <tr>
                                <td className="bg-primary-greener px-4 py-2 border w-1/3 font-semibold text-white">
                                    Date & Time:
                                </td>
                                <td className="px-4 py-2 border w-2/3">
                                    01-28-2022 8:00 AM
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-primary-greener px-4 py-2 border w-1/3 font-semibold text-white">
                                    Complainant Name:
                                </td>
                                <td className="px-4 py-2 border w-2/3">
                                    Complainant 1
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-primary-greener px-4 py-2 border w-1/3 font-semibold text-white">
                                    Report Type:
                                </td>
                                <td className="px-4 py-2 border w-2/3">
                                    Type 1
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-4">
                    <h2 className="mb-2 font-semibold text-xl">Details</h2>
                    <textarea
                        className="p-3 border rounded w-full"
                        rows={2}
                        readOnly
                        value="Complaint details text here..."
                    />
                </div>
                <div className="mt-2">
                    <h2 className="mb-2 font-semibold text-xl">
                        Attached Files
                    </h2>
                    <div className="gap-4 grid grid-cols-2">
                        <img alt="File 1" className="border w-full h-9" />
                        <img alt="File 2" className="border w-full h-9" />
                    </div>
                </div>

                <h2 className="mt-4 font-semibold text-xl">Take Action</h2>

                <div className="mt-2 mr-4 w-full">
                    <div className="mb-4">
                        <label className="block mb-2 font-bold text-gray">
                            Remarks:
                        </label>
                        <textarea
                            className="px-3 py-2 border rounded-md w-full"
                            rows={4}
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-end space-x-2">
                    <button className="bg-primary hover:bg-primary-pale px-4 py-2 rounded font-bold text-white">
                        Notify
                    </button>
                    <Link
                        className="bg-red hover:bg-red-lightred px-4 py-2 rounded font-bold text-white"
                        to="/system_issues"
                    >
                        Close
                    </Link>
                </div>
            </div>
        </div>
    );
}
