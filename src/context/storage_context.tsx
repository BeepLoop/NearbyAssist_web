import { ReactNode, createContext } from "react";

export type TUserData = {
    accessToken: string,
    refreshToken: string,
    adminId: number,
}

interface IStorageContext {
    updateSavedUser: (data: TUserData) => void;
    getSavedUser: () => TUserData | null;
}

export const StorageContext = createContext({} as IStorageContext);

export default function StorageProvider({ children }: { children: ReactNode }) {

    function updateSavedUser(data: TUserData): void {
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
