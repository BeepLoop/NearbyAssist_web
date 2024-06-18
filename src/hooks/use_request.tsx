import { useContext, useState } from "react";
import { StorageContext, TUserData } from "../context/storage_context";

export default function useRequest() {
    const [isLoading, setIsLoading] = useState(false);

    const { updateSavedUser, getSavedUser } = useContext(StorageContext);

    async function send(accessToken: string, url: string, method: string, body?: BodyInit): Promise<Response | null> {
        setIsLoading(true);
        let response = await request(accessToken, url, method, body);

        if (response === null) {
            setIsLoading(false);
            return null;
        }

        if (response.status === 401) {
            const newData = await refreshToken(accessToken);
            if (newData === null) {
                setIsLoading(false);
                return null;
            }

            response = await request(newData.accessToken, url, method, body);

            if (response === null) {
                setIsLoading(false);
                return null;
            }
        }

        setIsLoading(false);
        return response;
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
            console.log("refresh token: ", user.refreshToken);
            console.log("url: ", url);

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
