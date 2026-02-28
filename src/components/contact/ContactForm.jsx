import { memo } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { containerVariants, itemVariants } from "../../utils/variants";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import Button from "../common/Button";

const ContactForm = memo(({
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
      className="bg-[var(--color-surface)] rounded-[var(--radius-3xl)] p-8 md:p-12 shadow-[var(--shadow-2xl)] border border-[var(--color-border-subtle)] relative overflow-hidden"
    >
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-64 h-64 gradient-bg-subtle rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 gradient-bg-subtle rounded-full blur-3xl -z-10 opacity-50" />

      <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
        {/* Email Field */}
        <ContactInput
          label={t("contact.form.email")}
          name="email"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
          placeholder={t("contact.form.emailPlaceholder")}
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
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full"
            icon={isSubmitting ? null : FaPaperPlane}
            iconPosition="right"
          >
            {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
