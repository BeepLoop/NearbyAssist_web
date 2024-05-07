import { Link } from "react-router-dom";

export default function ComplaintsDetails() {
    return (
        <div className="p-4">
            <div className="border-gray-900 bg-green-600 mb-4 px-4 py-2 border rounded-lg text-white">
                <h1 className="font-semibold text-2xl">Complaint Details</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="border-collapse border-gray-900 border rounded-lg w-full">
                    <tbody>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                Numbers of Complaint:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border"></td>
                        </tr>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                Complainant Name:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border"></td>
                        </tr>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                Complaint Type:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border"></td>
                        </tr>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                Nature of Complaint:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border"></td>
                        </tr>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                Complaint Details:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border font-semibold text-lg">
                                <textarea
                                    className="border-gray-900 p-2 border rounded w-full"
                                    rows={3}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="border-gray-900 bg-green-900 px-4 py-2 border font-semibold text-lg text-white">
                                File:
                            </td>
                            <td className="border-gray-900 px-4 py-2 border">
                                <img alt="File" className="max-w-full h-auto" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end space-x-4 mt-4 p-4">
                <Link
                    className="bg-red-500 hover:bg-red-600 ml-auto px-4 py-2 rounded font-bold text-white"
                    to={"/content/complaints"}
                >
                    Close
                </Link>
            </div>
        </div>
    );
}
