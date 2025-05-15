import "./UserList.css";

import UserCard from "../Component/UserCard";
import { useEffect, useState } from "react";

export default function UserList() {
    const [userList, setUserList] = useState({ data: [] });
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/user/' + page, {
            method: "POST"
        })
            .then(result => result.json())
            .then(data => setUserList(data))
    }, [page]);

    function showPageNumber() {
        let dom = "";
        for (let i = 1; i < (userList.count / 20); i++) {
            dom += (
                <button className={i === page ? "active" : ""} onClick={() => setPage(i)}>{i}</button>
            )
        }
        return dom;
    }

    return (
        <div className="user-list">
            {
                userList.data.map(user => {
                    return (
                        <UserCard user={user}>
                            <button> Ajouter aux amis</button>
                        </UserCard>
                    )
                }
                )
            }
            <div className="button-page">
                <button className="previous" disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
                {
                    Array.from({ length: userList.count / 20 }, (_, i) => i).map(e => {
                        return (
                            <button className={e+1 === page ? "active" : ""} onClick={() => setPage(e + 1)}>{e + 1}</button>
                        )
                    })
                }
                <button className="previous" disabled={page * 20 >= userList.count} onClick={() => setPage(page + 1)}>Suivant</button>
            </div>
        </div>
    )
}