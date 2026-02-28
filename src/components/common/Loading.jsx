import { motion } from "framer-motion";

const Loading = ({ fullScreen = false }) => {
  const content = (
    <div className="flex items-center justify-center gap-2">
      <motion.div
        className="w-3 h-3 rounded-full bg-[var(--color-primary)]"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-[var(--color-accent)]"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-[var(--color-secondary)]"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
        {content}
      </div>
    );
  }

  return (
    <div className="py-20 flex items-center justify-center">
      {content}
    </div>
  );
};

export default Loading;
