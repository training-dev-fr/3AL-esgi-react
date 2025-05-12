import { faCrown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function User({ user }) {
    function showNumbers(index,number) {
        return (
            <div className="number" key={"number-"+index}>
                {number}
            </div>
        )
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <div className="email">{user.email}</div>
            </div>
            <div className="form-group">
                <label htmlFor="">Prénom</label>
                <div className="firstname">{user.firstname}</div>
            </div>
            <div className="form-group">
                <label htmlFor="">Nom</label>
                <div className="lastname">{user.lastname}</div>
            </div>
            <div className="form-group">
                <label htmlFor="">Role</label>
                <div className="role">
                    {user.role === "Admin" &&
                        <FontAwesomeIcon icon={faCrown} />
                    }
                    {user.role !== "Admin" &&
                        <FontAwesomeIcon icon={faUser} />
                    }
                    {
                        Object.entries([1, 2, 3]).map(([index,element]) => showNumbers(index,element))
                    }
                </div>
            </div>
        </>
    )
}