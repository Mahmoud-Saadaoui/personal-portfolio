import { memo } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../utils/variants";

const ContactInput = memo(({
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
            } py-3 bg-[var(--color-background)] border rounded-[var(--radius-xl)] ${error
              ? "border-[var(--color-error)] focus:border-[var(--color-error)]"
              : "border-[var(--color-border-subtle)] focus:border-[var(--color-primary)]"
            } text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] focus:outline-none transition-all`}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[var(--color-error)] text-sm mt-1 flex items-center gap-1"
        >
          <span>•</span> {error}
        </motion.p>
      )}
    </motion.div>
  );
});

ContactInput.displayName = "ContactInput";

export default ContactInput;
