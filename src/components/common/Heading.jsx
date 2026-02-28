import { motion } from "framer-motion";

const Heading = ({
  title,
  icon: Icon,
  subtitle,
  size = "lg",
  align = "center"
}) => {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignments[align]}`}
    >
      <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
        <Icon className="text-3xl" />
      </div>
      <h2 className={`font-bold text-[var(--color-text-main)] mb-4 ${sizes[size]}`}>
        {title}
      </h2>
      <div className="h-1 w-20 bg-[var(--color-primary)] rounded-full" />
      {subtitle && (
        <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Heading;
