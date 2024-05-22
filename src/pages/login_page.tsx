import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md p-8 rounded-md w-full max-w-sm">
                <h2 className="mb-4 font-semibold text-2xl">
                    NearbyAssist Login
                </h2>

                <form className="flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="border-gray mt-1 px-4 py-2 border focus:border-blue rounded-md w-full focus:outline-none focus:ring-blue"
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border-gray mt-1 px-4 py-2 border focus:border-blue rounded-md w-full focus:outline-none focus:ring-blue"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex flex-col items-center bg-blue hover:bg-blue-lightblue px-4 py-2 rounded-md w-full font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-lightblue focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
