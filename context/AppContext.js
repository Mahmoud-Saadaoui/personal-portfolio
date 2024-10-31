"use client"
import { createContext, useState } from "react";

export const AppContext = createContext({
    darkMode: false,
    toggleMode: () => {},
}) 

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <AppContext.Provider value = {{toggleMode, darkMode}}>
            <div className={`${darkMode && "dark"}`}>
                {children}
            </div>
        </AppContext.Provider>
    )
}