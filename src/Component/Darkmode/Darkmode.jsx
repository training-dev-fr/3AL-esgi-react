import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Darkmode.css";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DarkmodeContext } from "../../Context/darkmodeContext";

export default function Darkmode(){
    const {darkmode, setDarkmode} = useContext(DarkmodeContext);
    return (
        <div className="darkmode">
            <FontAwesomeIcon icon={darkmode?faSun:faMoon} onClick={() => setDarkmode(!darkmode)} />
        </div>
    )
}