import { createContext, useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({children}) => {
    let config = localStorage.getItem('darkmode');
    const [darkmode, setDarkmode] = useState(config && config === "true"?true:false);

    function updateDarkMode(value){
        setDarkmode(value);
        localStorage.setItem('darkmode',value)
    }

    return (
        <DarkmodeContext.Provider value={{darkmode,setDarkmode: updateDarkMode}}>
            {children}
        </DarkmodeContext.Provider>
    )
}