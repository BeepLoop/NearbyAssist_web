export default function AssistantPage() {
    return (
        <div className="flex-1 p-4">
            <div className="flex justify-between items-center bg-gray-500 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Assistant Page</h1>
                <button className="bg-green-500 hover:bg-green-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none">
                    Create Account
                </button>
            </div>
            {/* Account Created Header */}
            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mb-2 p-4 border rounded-md">
                <h2 className="mb-2 font-semibold text-lg">Accounts Created</h2>
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
            {/* Account List */}
            <div className="border-gray-200 bg-gray-100 shadow-md mb-4 p-6 border rounded-md overflow-x-auto">
                <table className="rounded-lg w-full">
                    <thead>
                        <tr className="border-gray-800 bg-gray-600 border">
                            <th className="px-6 py-3 font-medium text-left text-white">
                                No.
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Username
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Role
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Action
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample Data */}
                        <tr className="border-gray-800 border">
                            <td className="px-6">1</td>
                            <td className="px-6">John Doe</td>
                            <td className="px-4">Assistant</td>
                            <td className="py-2">
                                <button className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline px-2 py-1 rounded font-bold text-white focus:outline-none">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 focus:shadow-outline ml-2 px-2 py-1 rounded font-bold text-white focus:outline-none">
                                    Delete
                                </button>
                            </td>
                            <td className="bg-green-400 px-4 py-1 rounded-md text-white">
                                Active
                            </td>
                        </tr>
                        <tr className="border-gray-800 border">
                            <td className="px-6">2</td>
                            <td className="px-6">Jane Smith</td>
                            <td className="px-4">Assistant</td>
                            <td className="py-2">
                                <button className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline px-2 py-1 rounded font-bold text-white focus:outline-none">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 focus:shadow-outline ml-2 px-2 py-1 rounded font-bold text-white focus:outline-none">
                                    Delete
                                </button>
                            </td>
                            <td className="bg-green-400 px-4 py-1 rounded-md text-white">
                                Active
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
