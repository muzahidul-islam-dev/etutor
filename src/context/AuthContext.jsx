import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthProvider = createContext();


export default function AuthContext({children}){
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser, 'current user')
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    },[])
    

    const registerUser = async (fullName, email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, {
                displayName: fullName
            })
            setUser(result.user)
            return {
                success: true,
                message: 'Registration Successfully',
                resposne: result
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                code: error.code
            };

        }
    }

    const loginUsingCredintial = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user)
            return {
                success: true,
                message: 'Login Successfully',
                resposne: result
            }
            
        } catch (error) {
            return {
                error: true,
                message: error.message,
                code: error.code
            };
        }
    }

    const data = {
        user, 
        loading,
        registerUser,
        loginUsingCredintial
    }
    return <AuthProvider.Provider value={data}>{children}</AuthProvider.Provider>
}