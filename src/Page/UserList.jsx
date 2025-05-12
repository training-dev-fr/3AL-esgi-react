import "./UserList.css";
import listUser from './../assets/user.json';
import UserCard from "../Component/UserCard";

export default function UserList() {
    return (
        <div className="user-list">
            {
                listUser.map(user => <UserCard user={user} />)
            }
        </div>
    )
}