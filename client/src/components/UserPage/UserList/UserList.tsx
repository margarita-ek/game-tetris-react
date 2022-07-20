import React from "react"
import { IFetchData } from "../UserPage"

type UserListProps = {
    item: IFetchData
}

const UserList: React.FC<UserListProps> = (props) => { 
    const { item } = props

    return (
        <div className="user-list__container">
            <ul className="user-list__list">
                <li>{`Date: ${new Date(item.date).toLocaleString()}`}</li>                    
                <li>{`Score: ${item.score}`}</li>
                <li>{`Rows: ${item.rows}`}</li>
                <li>{`Level: ${item.level}`}</li>
            </ul>
        </div>    
    )
} 

export default UserList