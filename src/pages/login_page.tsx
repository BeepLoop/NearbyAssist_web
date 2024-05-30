import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    function validateForm() {
        const newErrors: { username: string; password: string } = {
            username: "",
            password: "",
        };

        if (!username) {
            newErrors.username = "Username is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return !newErrors.username && !newErrors.password;
    }

    useEffect(() => {
        if (isSubmitted) {
            validateForm();
        }
    }, [username, password, isSubmitted]);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitted(true);

        const formIsValid = validateForm();

        if (!formIsValid) {
            console.error("Form is invalid");
            return;
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/auth/admin/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
            );
            const data = await response.json();
            if (response.ok) {
                console.log("Login successful:", data);

                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("adminId", data.adminId);
                localStorage.setItem("refreshToken", data.refreshToken);

                navigate("/dashboard");
            } else {
                console.error("Login failed:", data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white shadow-2xl p-8 rounded-md w-full max-w-sm">
                <h2 className="mb-4 font-semibold text-2xl">
                    NearbyAssist Login
                </h2>

                <form
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4 w-full">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="border-gray mt-1 px-4 py-2 border focus:border-blue rounded-md w-full focus:outline-none focus:ring-blue"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="off"
                        />
                        {errors.username && isSubmitted && (
                            <p className="text-red text-xs">
                                {errors.username}
                            </p>
                        )}
                    </div>

                    <div className="mb-6 w-full">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border-gray mt-1 px-4 py-2 border focus:border-blue rounded-md w-full focus:outline-none focus:ring-blue"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                        {errors.password && isSubmitted && (
                            <p className="text-red text-xs">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue hover:bg-blue-lightblue px-4 py-2 rounded-md w-full font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-lightblue focus:ring-offset-2"
                        disabled={
                            isSubmitted &&
                            (errors.username !== "" || errors.password !== "")
                        }
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
