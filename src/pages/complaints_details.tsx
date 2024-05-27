import { Link } from "react-router-dom";

export default function ComplaintsDetails() {
    return (
        <div className="p-6 min-h-screen">
            <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="mb-2">
                    <h2 className="mb-2 font-semibold text-xl">
                        Complaint Information
                    </h2>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr className="bg-gray-darkgray text-white">
                                <th className="px-4 py-2 border">
                                    Number of Complainants
                                </th>
                                <th className="px-4 py-2 border">
                                    Complainant Name
                                </th>
                                <th className="px-4 py-2 border">
                                    Complainant Type
                                </th>
                                <th className="px-4 py-2 border">
                                    Nature of Complaint
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="px-4 py-2 border">20</td>
                                <td className="px-4 py-2 border">
                                    Complainant 1
                                </td>

                                <td className="px-4 py-2 border">Type 1</td>
                                <td className="px-4 py-2 border">Nature 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4">
                    <h2 className="mb-2 font-semibold text-xl">
                        Attached Files
                    </h2>
                    <div className="gap-4 grid grid-cols-2">
                        <img alt="File 1" className="border w-full h-9" />
                        <img alt="File 2" className="border w-full h-9" />
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="mb-2 font-semibold text-xl">Details</h2>
                    <textarea
                        className="p-3 border rounded w-full"
                        rows={4}
                        readOnly
                        value="Complaint details text here..."
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <Link
                        className="bg-red hover:bg-red-lightred ml-auto px-4 py-2 rounded font-bold text-white"
                        to="/complaints"
                    >
                        Close
                    </Link>
                </div>
            </div>
        </div>
    );
}
