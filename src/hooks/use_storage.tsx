import { useContext } from "react";
import { StorageContext } from "../context/storage_context";

export default function useStorage() {
    return useContext(StorageContext);
}
