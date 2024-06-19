import { useContext, useState } from "react";
import { StorageContext, TUserData } from "../context/storage_context";

type TResponse<T> = {
    success: true,
    data: T
} | {
    success: false,
    error: string
}

export default function useRequest() {
    const [isLoading, setIsLoading] = useState(false);

    const { updateSavedUser, getSavedUser } = useContext(StorageContext);

    async function send<T>(accessToken: string, url: string, method: string, body?: BodyInit): Promise<TResponse<T>> {
        setIsLoading(true);
        let response = await request(accessToken, url, method, body);

        if (response === null) {
            setIsLoading(false);
            return { success: false, error: "Request failed" };
        }

        const data = await response.json();
        if (response.status === 401) {
            if (data.message === "Invalid credentials") {
                setIsLoading(false);
                return { success: false, error: data.message };
            }

            if (data.message === "Token has expired") {
                const newData = await refreshToken(accessToken);
                if (newData === null) {
                    setIsLoading(false);
                    return { success: false, error: "Failed to refresh token" };
                }

                response = await request(newData.accessToken, url, method, body);
                if (response === null) {
                    setIsLoading(false);
                    return { success: false, error: "Request failed" };
                }
            }
        }

        setIsLoading(false);
        return { success: true, data: data };
    }

    async function request(accessToken: string, url: string, method: string, body?: BodyInit): Promise<Response | null> {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        }

        try {
            let response: Response | null = null;

            switch (method) {
                case "GET":
                    response = await fetch(url, {
                        headers: headers,
                    })
                    break;

                case "POST":
                    response = await fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: body,
                    })
                    break;

                default:
                    throw new Error(`Method ${method} not supported`);
            }

            return response;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    async function refreshToken(accessToken: string): Promise<TUserData | null> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/refresh`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        }

        try {
            const user = getSavedUser();
            if (user === null) {
                throw new Error("No user data found");
            }

            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ token: user.refreshToken }),
            })

            if (response.status !== 200) {
                throw new Error(`Failed to refresh token: ${response.status}`);
            }

            const data = await response.json();

            const newData = {
                accessToken: data.accessToken,
                refreshToken: user.refreshToken,
                adminId: user.adminId,
                role: data.role,
            }
            updateSavedUser(newData);

            return newData;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    return {
        isLoading,
        send
    }
}
