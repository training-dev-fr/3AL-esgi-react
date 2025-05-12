export default function User({user}){
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
        </>
    )
}