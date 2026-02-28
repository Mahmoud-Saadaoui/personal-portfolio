import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lang = i18n.language;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
    }, [i18n.language]);

    return (
        <div
            className="min-h-screen bg-[var(--color-background)]
        text-[var(--color-text-main)]
        transition-colors duration-300"
        >
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
