import { Link } from "react-router-dom";

export default function RestrictAction() {
    return (
        <div className="p-8">
            <div className="border-gray-darkgray bg-primary mb-4 px-4 py-2 border rounded-lg text-white">
                <h1 className="font-semibold text-2xl">Restrict Action</h1>
            </div>
            <div className="flex justify-between items-start border-gray-lightgray bg-white shadow-md mx-auto mb-2 p-4 border rounded-md">
                <div className="mt-2 mr-4 w-1/2">
                    <div className="mb-4">
                        <label className="block mb-2 font-bold text-gray">
                            Account ID:
                        </label>
                        <label className="block mr-2 mb-2 font-bold text-gray">
                            Service Vendor Name:
                        </label>
                        <p className="text-gray-darkgray"></p>
                    </div>

                    <label className="block mb-2 font-bold text-gray">
                        Duration:
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="mr-2 px-3 py-2 border rounded-md w-32"
                            placeholder="Enter duration"
                        />
                        <select className="px-3 py-2 border rounded-md">
                            <option value="days">Hours</option>
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4 w-1/2">
                    <div className="mb-4">
                        <label className="block mb-2 font-bold text-gray">
                            Reason:
                        </label>
                        <textarea
                            className="px-3 py-2 border rounded-md w-full"
                            rows={4}
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button className="bg-primary hover:bg-primary-pale px-4 py-2 rounded font-bold text-white">
                            Submit
                        </button>
                        <Link
                            className="bg-red hover:bg-red-lightred px-4 py-2 rounded font-bold text-white"
                            to={"/restriction"}
                        >
                            Close
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
