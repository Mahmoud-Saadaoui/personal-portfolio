import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);

    return (
        <div
            className="min-h-screen bg-(--color-background) dark:bg-(--color-background)
        text-(--color-text-main) dark:text-(--color-text-main)
        transition-colors duration-300"
        >
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
