import { motion } from "framer-motion";

const shimmerVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear",
    },
  },
};

export const Skeleton = ({ className, width, height, rounded = "md" }) => {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <motion.div
      className={`relative overflow-hidden bg-[var(--color-secondary)]/20 ${roundedClasses[rounded]} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.div>
  );
};

export const SkeletonCard = () => (
  <div className="bg-[var(--color-surface)] rounded-2xl overflow-hidden shadow-md border border-[var(--color-text-muted)]/10 p-4">
    <Skeleton height={192} className="w-full mb-4" />
    <Skeleton height={28} width="70%" className="mb-4" />
    <div className="flex gap-2">
      <Skeleton width={60} height={32} rounded="full" />
      <Skeleton width={60} height={32} rounded="full" />
      <Skeleton width={60} height={32} rounded="full" />
    </div>
  </div>
);

export const SkeletonHeading = ({ withIcon = false }) => (
  <div className="flex items-center gap-4 mb-8">
    {withIcon && <Skeleton width={40} height={40} rounded="full" />}
    <Skeleton height={36} width={200} />
  </div>
);

export const SkeletonProjectGrid = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export const SkeletonHero = () => (
  <section className="min-h-[80vh] flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="flex-1 flex flex-col items-center lg:items-start space-y-4 w-full">
        <Skeleton height={28} width={150} className="mb-2" />
        <Skeleton height={48} width="80%" className="mb-4" />
        <Skeleton height={24} width="100%" className="mb-2" />
        <Skeleton height={24} width="90%" className="mb-6" />
        <div className="flex gap-4 mt-4">
          <Skeleton width={48} height={48} rounded="full" />
          <Skeleton width={48} height={48} rounded="full" />
          <Skeleton width={48} height={48} rounded="full" />
        </div>
        <Skeleton width={140} height={48} rounded="full" className="mt-6" />
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <Skeleton width={320} height={320} rounded="full" />
      </div>
    </div>
  </section>
);

export default Skeleton;
