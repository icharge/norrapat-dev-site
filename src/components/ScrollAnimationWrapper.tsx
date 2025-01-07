import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Scroll animation variants
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ScrollAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
