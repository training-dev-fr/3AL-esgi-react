import UpdateUser from "../Component/Updateuser";
import User from "../Component/User";

export default function Profile({user}){
    return (
        <>
            <User user={user} />
            <UpdateUser />
        </>
    )
}