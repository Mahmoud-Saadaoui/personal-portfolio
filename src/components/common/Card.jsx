import { motion } from "framer-motion";
import { forwardRef } from "react";

const Card = forwardRef(({
  children,
  className = "",
  hover = true,
  padding = "md",
  elevated = false,
  ...props
}, ref) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  };

  const baseClasses = `
    bg-[var(--color-surface)]
    rounded-[var(--radius-2xl)]
    border border-[var(--color-border-subtle)]
    ${elevated ? "shadow-[var(--shadow-lg)]" : "shadow-[var(--shadow-md)]"}
    ${hover ? "hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 hover:border-[var(--color-primary)]/30" : ""}
    transition-all duration-300
  `;

  return (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${paddingClasses[padding]} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;
