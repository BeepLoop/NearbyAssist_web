import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-16 md:gap-28 px-4 md:px-44 lg:px-24 py-24 md:py-20 lg:py-24">
            <div className="relative xl:pt-24 pb-12 lg:pb-0 w-full xl:w-1/2">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 font-bold text-2xl text-gray-800">
                                Looks like you've found the doorway to the great
                                nothing
                            </h1>
                            <p className="my-2 text-gray-800">
                                Sorry about that! Please visit our hompage to
                                get where you need to go.
                            </p>
                            <button
                                onClick={goHome}
                                className="bg-indigo hover:bg-indigo-darkindigo focus:ring-opacity-50 my-2 px-8 py-4 border rounded text-center text-white md focus:outline-none focus:ring-2 focus:ring-indigo-700 sm:w-full lg:w-auto"
                            >
                                Take me there!
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            loading="lazy"
                            src="https://i.ibb.co/G9DC8S0/404-2.png"
                        />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    );
}
