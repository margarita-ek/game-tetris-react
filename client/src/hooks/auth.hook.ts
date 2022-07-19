import {useState, useCallback, useEffect} from 'react'

const storageName: string = 'userData'

type Token = string | null
type Id = string | null
type Email = string | null
type Name = string | null

export type Login = (jwtToken: Token, id: Id, email: Email, name: Name) => void

export const useAuth = () => {
    const [token, setToken] = useState<Token>(null)
    const [userId, setUserId] = useState<Id>(null)
    const [userEmail, setUserEmail] = useState<Email>(null)
    const [userName, setUserName] = useState<Name>(null)
    const [ready, setReady] = useState(false)

    const login: Login = useCallback((jwtToken, id, email, name) => {
        setToken(jwtToken)
        setUserId(id)
        setUserEmail(email)
        setUserName(name)

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            userId: id,
            userEmail: email,
            userName: name
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUserEmail(null)
        setUserName(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName)!)

        if (data && data.token) {
            login(data.token, data.userId, data.userEmail, data.userName)
        }
        setReady(true)
    }, [login])


    return { login, logout, token, userId, userEmail, userName, ready }
}