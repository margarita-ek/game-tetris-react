import React, { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from "../../hooks/http.hook"
import { Loader } from "../Loader/Loader"

interface fetchData{
    date: string
    level: number
    owner: string
    rows: number
    score: number
    __v?: number 
    _id: string    
}

const UserPage = () => { 
    const [fetchData, setFetchData] = useState<fetchData[]>([])
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
        <>
            { fetchData ? fetchData.reverse().map((item: fetchData) => {
                return <ul style={{ "marginBottom": "20px" }} key={item._id}>
                    <li>{`Date: ${new Date(item.date).toLocaleString()}`}</li>                    
                    <li>{`Score: ${item.score}`}</li>
                    <li>{`Rows: ${item.rows}`}</li>
                    <li>{`Level: ${item.level}`}</li>
                </ul>
            }) : null}          
        </>
    )
}

export default UserPage