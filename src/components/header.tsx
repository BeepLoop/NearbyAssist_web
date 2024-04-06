export default function Header() {
    return (
        <header className="flex justify-end items-center bg-gray-800 px-6 py-4 text-white">
            {/* Admin icon */}

            {/* Dropdown for logout */}
            <div className="relative right-0">
                <button className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"
                        />
                        <path
                            fill="white"
                            d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"
                        />
                    </svg>

                    <span className="mx-2">Admin</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                        />
                    </svg>
                </button>
                {/* Dropdown content */}
            </div>
        </header>
    );
}
