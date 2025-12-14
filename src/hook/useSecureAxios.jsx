import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default function useSecureAxios(){
    const {user, loading, userLoading} = useAuth();
    useEffect(() => {
        axios.interceptors.request.use(function(config){
            config.headers.Authorization = `Bearer ${user}`
            return config;
        })
    },[user, userLoading])
    return baseApi;
}