import { memo } from "react";
import { motion } from "framer-motion";
import { FaPaperclip, FaTimes } from "react-icons/fa";
import { itemVariants } from "../../utils/variants";

const ContactTextarea = memo(({
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    rows = 6,
    isRTL = false,
    file,
    onFileChange,
    onFileRemove,
    fileError,
    attachLabel
}) => {
    return (
        <motion.div variants={itemVariants}>
            <label
                htmlFor={name}
                className="block text-[var(--color-text-main)] font-medium mb-2"
            >
                {label}
            </label>
            <div className="relative">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={`w-full px-4 py-3 ${isRTL ? "pl-14" : "pr-14"} bg-[var(--color-background)] border ${error
                        ? "border-red-500"
                        : "border-[var(--color-text-muted)]/20"
                        } rounded-xl text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-all resize-none`}
                />
                {/* Integrated Upload Button */}
                <label
                    htmlFor="file-upload"
                    className={`absolute bottom-3 ${isRTL ? "left-3" : "right-3"} cursor-pointer p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-text-muted)]/20 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all group`}
                    title={attachLabel}
                >
                    <FaPaperclip className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors text-lg" />
                </label>
                <input
                    type="file"
                    id="file-upload"
                    onChange={onFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                />
            </div>
            {/* Display selected file */}
            {file && (
                <div className="flex items-center gap-2 mt-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
                    <FaPaperclip className="text-[var(--color-primary)] text-sm" />
                    <span className="text-[var(--color-text-main)] text-sm flex-1">
                        {file.name}
                    </span>
                    <button
                        type="button"
                        onClick={onFileRemove}
                        className="text-red-500 hover:text-red-600 transition-colors p-1"
                        title="Remove file"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
            {fileError && (
                <p className="text-red-500 text-sm mt-1">{fileError}</p>
            )}
        </motion.div>
    );
});

ContactTextarea.displayName = "ContactTextarea";

export default ContactTextarea;
