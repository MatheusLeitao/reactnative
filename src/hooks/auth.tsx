import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session'
import { REDIRECT_URI, SCOPE, RESPONSE_TYPE, CLIENT_ID, CDN_IMAGE } from '../config'
import { api } from "../services/api";

type User = {
    id: string
    username: string
    fistName: string
    avatar: string
    email: string
    token: string
}

type AuthContextData = {
    user: User
    SignIn: () => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function SignIn(){
        try{

            setLoading(true)
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const response = AuthSession.startAsync({ authUrl })
            console.log(response)

        } catch{
            throw new Error("Coudn't authenticate");

        }
    }

    return (
        <AuthContext.Provider value={{ user, SignIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export {
    AuthProvider,
    useAuth
}