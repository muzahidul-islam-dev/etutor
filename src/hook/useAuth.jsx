import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

export default function useAuth(){
    return useContext(AuthProvider)
}