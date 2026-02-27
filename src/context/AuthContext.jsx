import { createContext, useContext, useState, useEffect, Children } from "react"; 

import {auth, createUserWithEmailAndPassword,          // import from firebase folder
        signInWithEmailAndPassword,     
        onAuthStateChanged,signOut } from "../firebase/config";


const AuthContext = createContext(); // must import from react

export const useAuth = ()=>{
    return useContext(AuthContext);
};



export const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const availableUser =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> availableUser();
    },[]);

    const signup = async (email, password )=>{
        const userCradiantials = await createUserWithEmailAndPassword(auth, email, password );
        return userCradiantials;
    };

    const login = async (email, password)=>{
        return signInWithEmailAndPassword(email, password)
    };

    const logout = async ()=>{
        return signOut(auth);
    }


    const value = {
        user,
        loading,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}