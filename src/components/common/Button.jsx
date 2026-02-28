import { motion } from "framer-motion";
import { forwardRef } from "react";

const buttonVariants = {
  primary: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg hover:shadow-[var(--shadow-primary)]",
  secondary: "bg-[var(--color-surface)] text-[var(--color-text-main)] border border-[var(--color-border)] hover:border-[var(--color-primary)]",
  ghost: "bg-transparent text-[var(--color-text-main)] hover:bg-[var(--color-background)]",
  danger: "bg-[var(--color-error)] text-white shadow-lg hover:shadow-[var(--shadow-md)]",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef(({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  ...props
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105 active:scale-95";

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon />}
      {children}
      {Icon && iconPosition === "right" && <Icon />}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
