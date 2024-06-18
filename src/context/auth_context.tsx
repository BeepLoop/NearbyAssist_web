import { ReactNode, createContext } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

interface IAuthContext {
    login: (username: string, password: string) => Promise<{ success: boolean }>
    logout: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const { send } = useRequest();
    const { updateSavedUser } = useStorage();

    async function login(username: string, password: string): Promise<{ success: boolean }> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/admin/login`;

        try {
            const response = await send("", url, "POST", JSON.stringify({ username, password }));
            if (response === null) {
                throw new Error("Request failed");
            }

            const data = await response.json();
            updateSavedUser(data);

            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false };
        }
    }

    async function logout() {
        console.log('logout')
        // implement logout
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
