import { motion } from "framer-motion";

const Heading = ({ title, icon: Icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon className="text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
                {title}
            </h2>
            <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full" />
        </motion.div>
    );
};

export default Heading;