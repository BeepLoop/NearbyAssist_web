import { ReactNode, createContext } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";
import { TUserData } from "./storage_context";

type TAuthResponse = {
    success: true
} | {
    success: false
    error: string
}

interface IAuthContext {
    login: (username: string, password: string) => Promise<TAuthResponse>
    logout: () => Promise<TAuthResponse>
}

export const AuthContext = createContext({} as IAuthContext)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const { send } = useRequest();
    const { updateSavedUser, getSavedUser } = useStorage();

    async function login(username: string, password: string): Promise<TAuthResponse> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/admin/login`;

        try {
            const response = await send<TUserData>("", url, "POST", JSON.stringify({ username, password }));
            if (!response.success) {
                throw new Error(response.error);
            }

            updateSavedUser(response.data);

            return { success: true };
        } catch (e) {
            if (e instanceof Error) {
                return { success: false, error: e.message };
            }

            return { success: false, error: "An error occurred" }
        }
    }

    async function logout(): Promise<TAuthResponse> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/logout`;

        try {
            const user = getSavedUser();
            if (user === null) {
                throw new Error("User not found");
            }

            const response = await send(user.accessToken, url, "POST", JSON.stringify({ token: user.refreshToken }));
            if (response === null) {
                throw new Error("Request failed");
            }

            updateSavedUser(null);
            return { success: true };
        } catch (e) {
            if (e instanceof Error) {
                return { success: false, error: e.message };
            }

            return { success: false, error: "An error occurred" }
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
