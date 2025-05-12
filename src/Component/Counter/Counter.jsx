import { useState } from "react";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    function updateCounter(value){
        if(value > 10){
            setError(true);
            throw new Error("Count can not exceed 10");
        }
        setError(false);
        setCount(value);
    }
    
    return (
        <>
            <div className="count">Compteur : {count}</div>
            <button onClick={() => updateCounter(count + 1)}>
                Augmenter le compteur de 1
            </button>
            <button onClick={() => updateCounter(count - 1)}>
                Réduire le compteur de 1
            </button>
            <button onClick={() => updateCounter(0)}>
                Remettre le compteur à 0
            </button>
            {
                error &&
                <div className="error">Count can not exceed 10</div>
            }
        </>
    )
}