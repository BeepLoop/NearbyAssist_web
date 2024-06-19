import { ReactNode, createContext } from "react";

export type TUserData = {
    accessToken: string,
    refreshToken: string,
    adminId: number,
    role: string,
}

interface IStorageContext {
    updateSavedUser: (data: TUserData | null) => void;
    getSavedUser: () => TUserData | null;
}

export const StorageContext = createContext({} as IStorageContext);

export default function StorageProvider({ children }: { children: ReactNode }) {

    function updateSavedUser(data: TUserData | null): void {
        if (data === null) {
            localStorage.removeItem("userData");
            return;
        }

        localStorage.setItem("userData", JSON.stringify(data));
    }

    function getSavedUser(): TUserData | null {
        const data = localStorage.getItem("userData");
        if (data === null) {
            return null;
        }

        const savedData = JSON.parse(data);

        return savedData;
    }

    return (
        <StorageContext.Provider value={{ updateSavedUser, getSavedUser }}>
            {children}
        </StorageContext.Provider>
    );
}
