import { useEffect, useState } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    )
    const element = document.documentElement
    // détecte si le système d'exploitation de l'utilisateur est en mode sombre
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    /**
     * Applique la classe "dark" si:
        ** Le thème sauvegardé est "dark" OU
        ** Aucun thème n'est sauvegardé ET le système est en mode dark
    */
    const onWindowMatch = () =>{
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }
    /**
     * Exécute onWindowMatch() une fois au chargement du composant 
     * pour appliquer le thème initial.
    */
    useEffect(() => {
        onWindowMatch()
    }, [])
    /**
     * Exécute onWindowMatch() une fois au chargement du composant pour appliquer le thème initial.
        ** "dark": ajoute la classe "dark" et sauvegarde
        ** "light": retire la classe "dark" et sauvegarde
        ** "system": supprime la sauvegarde et utilise la préférence système
    */
    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark")
                localStorage.setItem("theme", "dark")
                break;

            case "light":
                element.classList.remove("dark")
                localStorage.setItem("theme", "light")
                break

            default:
                localStorage.removeItem("theme")
                onWindowMatch()
                break;
        }
    }, [theme])
    /**
     * Écoute les changements de préférence système uniquement si aucun thème n'est explicitement choisi.
    */
    useEffect(() => {
        const changeHandler = e => {
            if(!("theme" in localStorage)) {
                if (e.matches) {
                    element.classList.add("dark")
                } else {
                    element.classList.remove("dark")
                }
            }
        }
        darkQuery.addEventListener("change", changeHandler)
        return () => {
            darkQuery.removeEventListener("change", changeHandler)
        }
    }, [])

    return { theme, setTheme }
}

export default useTheme;