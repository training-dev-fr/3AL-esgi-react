import { useState } from "react";
import "./Login.css";

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function login(){
        fetch("http://monsite.fr/login",{
            method: "POST",
            body: JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <div className="form">
           <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onKeyUp={(e) => setEmail(e.target.value)} defaultValue="avaast@myges.fr" />
           </div>
           <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onKeyUp={(e) => setPassword(e.target.value)} />
           </div>
           <div className="form-group">
                <button onClick={login}>Connexion</button>
            </div>
        </div>
    )
}