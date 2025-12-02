import { useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Meta from "../components/common/Meta";
import Heading from "../components/common/Heading";
import ContactForm from "../components/contact/ContactForm";
import { useContactForm } from "../hooks/useContactForm";
import { itemVariants } from "../utils/variants";

const ContactPage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const formRef = useRef();

    const {
        formData,
        file,
        errors,
        isSubmitting,
        handleChange,
        handleFileChange,
        handleRemoveFile,
        handleSubmit
    } = useContactForm();

    const onSubmit = useCallback(async (e) => {
        const success = await handleSubmit(e);
        if (success && formRef.current) {
            formRef.current.reset();
        }
    }, [handleSubmit]);

    return (
        <>
            <Meta
                title={`${t("navbar.contact")} | Mahmoud Saadaoui`}
                description={t("contact.subtitle")}
                keywords="Contact, Email, Get in Touch, Mahmoud Saadaoui"
            />

            <ToastContainer
                position={isRTL ? "top-left" : "top-right"}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={isRTL}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <section
                className={`py-4 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] min-h-screen 
                    ${isRTL ? "text-right" : "text-left"}`}
            >
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <Heading title={t("contact.title")} icon={FaEnvelope} />

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center text-[var(--color-text-muted)] text-lg mb-12 max-w-2xl mx-auto"
                    >
                        {t("contact.subtitle")}
                    </motion.p>

                    {/* Contact Form */}
                    <ContactForm
                        formData={formData}
                        errors={errors}
                        file={file}
                        isSubmitting={isSubmitting}
                        isRTL={isRTL}
                        onSubmit={onSubmit}
                        onChange={handleChange}
                        onFileChange={handleFileChange}
                        onFileRemove={handleRemoveFile}
                        formRef={formRef}
                    />
                </div>
            </section>
        </>
    );
};

export default ContactPage;
