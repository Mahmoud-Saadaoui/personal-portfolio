"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type Props = {
    children: ReactNode;
};

type AppContextType = {
    darkMode: boolean,
    toggleMode: () => void,
} | null

const AppContext = createContext<AppContextType>({
    darkMode: false,
    toggleMode: () => {},
})

export const AppProvider = ({ children }: Props) => {
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

export { AppContext };