import { createContext } from "react";
import type { Login } from "../hooks/auth.hook"

function noop() { }

interface IAuthContext { 
    token: null | string
    userId: null | string
    userEmail: null | string
    userName: null | string
    login: Login
    logout: Function
    isAuthenticated: boolean
    ready: boolean    
}

export const AuthContext = createContext<IAuthContext>({
    token: null,
    userId: null,
    userEmail: null,
    userName: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
    ready: false
})