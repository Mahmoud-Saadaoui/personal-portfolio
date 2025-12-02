import { motion } from "framer-motion";
import { itemVariants } from "../../utils/variants";

const ContactInput = ({
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    icon: Icon,
    type = "text",
    isRTL = false
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
                {Icon && (
                    <Icon
                        className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"
                            } text-[var(--color-primary)]`}
                    />
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"
                        } py-3 bg-[var(--color-background)] border ${error
                            ? "border-red-500"
                            : "border-[var(--color-text-muted)]/20"
                        } rounded-xl text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-all`}
                />
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </motion.div>
    );
};

export default ContactInput;
