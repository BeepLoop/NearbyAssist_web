import { Link } from "react-router-dom";

export default function ComplaintsDetails() {
    return (
        <div className="p-4">
            <div className="bg-primary mb-4 px-4 py-2 border rounded-lg text-white">
                <h1 className="font-semibold text-2xl">Complaint </h1>
            </div>

            <div className="shadow-md mt-2 p-2 rounded-md">
                <h2 className="mb-2 font-semibold text-lg">
                    Complaint Details
                </h2>
                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-4 border">
                                Number of Complainants
                            </th>
                            <th className="px-4 py-4 border">
                                Complainant Name
                            </th>
                            <th className="px-4 py-4 border">Contact ID</th>
                            <th className="px-4 py-4 border">Complainee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-4 border">20</td>
                            <td className="px-4 py-4 border">Complainant 1</td>
                            <td className="px-4 py-4 border">1234567</td>
                            <td className="px-4 py-4 border">Complainee 1</td>
                        </tr>
                    </tbody>
                </table>
                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-4 border">
                                Complainant Type
                            </th>
                            <th className="px-4 py-4 border">
                                Nature of Complaint
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="px-4 py-4 border"></td>
                        <td className="px-4 py-4 border"></td>
                    </tbody>
                </table>
                <table className="border-collapse mb-4 w-full">
                    <tbody>
                        <tr>
                            <td className="bg-gray-darkgray px-4 py-1 border font-semibold text-white">
                                File
                            </td>
                            <td className="px-4 py-4 border">
                                <img alt="File" className="max-w-full h-auto" />
                            </td>
                            <td className="px-4 py-4 border">
                                <img alt="File" className="max-w-full h-auto" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="border-collapse mb-2 w-full">
                    <thead className="bg-gray-darkgray text-white">
                        <tr>
                            <th className="px-4 py-4 border">
                                Complaint Details
                            </th>
                        </tr>
                        <td className="px-4 py-2 border font-semibold text-lg">
                            <textarea
                                className="p-2 border rounded w-full"
                                rows={3}
                                readOnly
                            />
                        </td>
                    </thead>
                </table>
            </div>
            <div className="flex justify-end space-x-4 mt-4 p-4">
                <Link
                    className="bg-red hover:bg-red-lightred ml-auto px-4 py-2 rounded font-bold text-white"
                    to={"/complaints"}
                >
                    Close
                </Link>
            </div>
        </div>
    );
}
