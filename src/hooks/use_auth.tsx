import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

export default function useAuth() {
    return useContext(AuthContext);
}
