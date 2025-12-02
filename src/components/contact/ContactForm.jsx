import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { containerVariants, itemVariants } from "../../utils/variants";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";

const ContactForm = ({
    formData,
    errors,
    file,
    isSubmitting,
    isRTL,
    onSubmit,
    onChange,
    onFileChange,
    onFileRemove,
    formRef
}) => {
    const { t } = useTranslation();

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 shadow-2xl border border-[var(--color-text-muted)]/10 relative overflow-hidden"
        >
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 rounded-full blur-3xl -z-10" />

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                {/* Email Field */}
                <ContactInput
                    label={t("contact.form.email")}
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    error={errors.email}
                    placeholder={t("contact.form.emailPlaceholder")}
                    icon={FaEnvelope}
                    type="email"
                    isRTL={isRTL}
                />

                {/* Message Field with Integrated File Upload */}
                <ContactTextarea
                    label={t("contact.form.message")}
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    error={errors.message}
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={6}
                    isRTL={isRTL}
                    file={file}
                    onFileChange={onFileChange}
                    onFileRemove={onFileRemove}
                    fileError={errors.file}
                    attachLabel={t("contact.form.attachFile")}
                />

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold rounded-xl shadow-lg hover:shadow-[var(--color-primary)]/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>{t("contact.form.sending")}</span>
                            </>
                        ) : (
                            <>
                                <FaPaperPlane />
                                <span>{t("contact.form.submit")}</span>
                            </>
                        )}
                    </button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default ContactForm;
