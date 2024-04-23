export default function ComplaintsDetails() {

    return (
        <div className="p-8">
            <div className="border-gray-700 bg-gray-600 px-4 py-2 border text-white">
                <h2 className="mb-2 font-semibold text-lg">
                    Complaint Details
                </h2>
             </div>
        
        <table className="border-gray-900 border rounded-lg w-full">
            <tbody>
                <tr>
                    <td className="border-gray-900 px-4 py-2 border text-gray-700">
                        Numbers of Complaint:
                    </td>
                    <td className="border-gray-900 px-4 py-2 border">
                     
                    </td>
                </tr>
                <tr>
                    <td className="border-gray-900 px-4 py-2 border text-gray-700">
                        Complainant Name:
                    </td>
                    <td className="border-gray-900 px-4 py-2 border">
                        
                    </td>
                </tr>
                <tr>
                    <td className="border-gray-900 px-4 py-2 border text-gray-700">
                        Complaint Type:
                    </td>
                    <td className="border-gray-900 px-4 py-2 border">
                       
                    </td>
                </tr>
                <tr>
                    <td className="border-gray-900 px-4 py-2 border text-gray-700">
                        Nature of Complaint:
                    </td>
                    <td className="border-gray-900 px-4 py-2 border">
                      
                    </td>
                </tr>
                <tr>
                    <td className="border-gray-900 px-4 py-2 border text-gray-700">
                        Complaint Details:
                    </td>
                    <td className="border-gray-900 px-4 py-2 border">
                        <textarea
                            className="border-gray-900 p-2 rounded w-full"
                            rows={4}
                           
                            readOnly
                        />
                    </td>
                </tr>
                
                    <tr>
                        <td className="border-gray-900 px-4 py-2 border text-gray-700">
                            File:
                        </td>
                        <td className="border-gray-900 px-4 py-2 border">
                            <img
                                
                                alt="File"
                                className="max-w-full h-auto"
                            />
                        </td>
                    </tr>
                
               
            </tbody>
        </table>
        <div className="flex justify-end space-x-4 mt-4 p-4">
            <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-bold text-white"
                type="button"
                
            >
                Close
            </button>
        </div>
    </div>
);
};