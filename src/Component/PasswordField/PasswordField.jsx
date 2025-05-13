import { useState } from "react";
import "./PasswordField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordField({onKeyUp}) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="password-field">
            <input type={visible ? "text" : "password"} onKeyUp={(e) => onKeyUp(e.target.value)} />
            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisible(!visible)} />
        </div>
    )
}