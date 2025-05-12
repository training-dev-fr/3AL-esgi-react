import "./UserList.css";

import UserCard from "../Component/UserCard";
import { useEffect, useState } from "react";

export default function UserList() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('/user.json')
        .then(result => result.json())
        .then(data => setUserList(data))
    },[]);
    
    return (
        <div className="user-list">
            {
                userList.map(user => {
                    return (
                        <UserCard user={user}>
                            <button> Ajouter aux amis</button>
                        </UserCard>
                    )
                }
                )
            }
        </div>
    )
}