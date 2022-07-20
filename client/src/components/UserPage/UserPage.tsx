import React, { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from "../../hooks/http.hook"
import { Loader } from "../Loader/Loader"
import UserList from "./UserList/UserList"

export interface IFetchData{
    date: string
    level: number
    owner: string
    rows: number
    score: number
    __v?: number 
    _id: string    
}

const UserPage: React.FC = () => { 
    const [fetchData, setFetchData] = useState<IFetchData[]>([])
    const auth = useContext(AuthContext)
    const { loading, request } = useHttp()

    const statisticsHandler = useCallback(async () => { 
        try {
            const data = await request(
                "/api/",
                "GET",
                null,
                {
                    Authorization: `Bearer ${auth.token}`
                }
            )
            setFetchData(data)
            console.log("data", data)
        } catch (error) { }
    }, [auth.token, request])

    useEffect(() => { 
        statisticsHandler()
    }, [statisticsHandler])
    useEffect(() => { 
        console.log('fetchData', fetchData)
    }, [fetchData])

    return (
            <main className="main">
                <div className="main__statistics statistics">
                    <div className="statistics__content">
                        <span className="statistics__title">{auth.userName}</span>
                        <span className="statistics__subtitle">{auth.userEmail}</span>
                        <div className="statistics__list-container">
                            { fetchData ? fetchData.reverse().map((item: IFetchData) => {
                                return <UserList key={item._id} item={item} />
                            }) : null}                           
                        </div>                 
                    </div>
                </div>
            </main>            
    )
}

export default UserPage