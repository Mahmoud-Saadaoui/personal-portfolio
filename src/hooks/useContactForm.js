import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { sendEmail } from "../services/emailService";

export const useContactForm = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    const validateEmail = (email) => {
        if (!email.trim()) {
            return t("contact.validation.emailRequired");
        }
        if (!emailRegex.test(email)) {
            return t("contact.validation.emailInvalid");
        }
        return "";
    };

    // Validate message
    const validateMessage = (message) => {
        if (!message.trim()) {
            return t("contact.validation.messageRequired");
        }
        if (message.trim().length < 20) {
            return t("contact.validation.messageMinLength");
        }
        return "";
    };

    // Validate file
    const validateFile = (file) => {
        if (!file) return "";

        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (file.size > maxSize) {
            return t("contact.validation.fileTooLarge");
        }

        if (!allowedTypes.includes(file.type)) {
            return t("contact.validation.fileTypeInvalid");
        }

        return "";
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileError = validateFile(selectedFile);
            if (fileError) {
                setErrors((prev) => ({ ...prev, file: fileError }));
                setFile(null);
            } else {
                setFile(selectedFile);
                setErrors((prev) => ({ ...prev, file: "" }));
            }
        }
    };

    // Remove file
    const handleRemoveFile = () => {
        setFile(null);
        setErrors((prev) => ({ ...prev, file: "" }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;

        const messageError = validateMessage(formData.message);
        if (messageError) newErrors.message = messageError;

        const fileError = validateFile(file);
        if (fileError) newErrors.file = fileError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error(t("contact.validation.messageRequired"));
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare form data for EmailJS
            const templateParams = {
                from_email: formData.email,
                message: formData.message,
                to_email: "contact.saadaouimahmoud@gmail.com",
                // Note: File attachment support depends on EmailJS service configuration
                // Usually requires base64 encoding or a specific template setup
            };

            await sendEmail(templateParams);

            // Show success message
            toast.success(t("contact.messages.success"));

            // Reset form
            setFormData({ email: "", message: "" });
            setFile(null);
            setErrors({});
            return true; // Indicate success
        } catch (error) {
            console.error("EmailJS Error:", error);
            if (error.message && error.message.includes("configuration is missing")) {
                toast.warning(t("contact.messages.emailjsNotConfigured"));
            } else {
                toast.error(t("contact.messages.error"));
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        file,
        errors,
        isSubmitting,
        handleChange,
        handleFileChange,
        handleRemoveFile,
        handleSubmit
    };
};
