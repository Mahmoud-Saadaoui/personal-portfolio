import emailjs from "@emailjs/browser";

// Environment variables
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

/**
 * Send email using EmailJS
 * @param {Object} params - The email parameters (from_email, message, to_email)
 * @returns {Promise} - The EmailJS response
 */
export const sendEmail = async (params) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS configuration is missing. Please check your .env file.");
    }

    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        params,
        PUBLIC_KEY
    );
};
