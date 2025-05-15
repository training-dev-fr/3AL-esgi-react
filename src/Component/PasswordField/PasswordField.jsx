import { useState } from "react";
import "./PasswordField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { checkPasswordComplexity } from "check-password-complexity";

export default function PasswordField({ onKeyUp }) {
    const [visible, setVisible] = useState(false);
    const [score, setScore] = useState(0);

    function onPasswordChange(e) {
        const result = {score:5}//checkPasswordComplexity(e.target.value);
        setScore(result.score);
        onKeyUp({
            password: e.target.value,
            strength: result.score
        })
    }

    function getProgressStatus() {
        switch (score) {
            case 1:
                return "Très faible"
            case 2:
                return "Faible"
            case 3:
                return "Moyen"
            case 4:
                return "Fort"
            case 5:
                return "Très fort"
        }
    }
    return (
        <div className="password">
            <div className="password-field">
                <input type={visible ? "text" : "password"} onKeyUp={onPasswordChange} />
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisible(!visible)} />
            </div>
            <div className="progress-bar" data-score={score}>
                {score > 0 &&
                    <>
                        <div className="progress" ></div>
                        <div className="progress-status">
                            {getProgressStatus()}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}