import React from "react";
import { easeIn, easeInOut, easeOut, motion, transform } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 1, transform: "translateY(100%)" },
  visible: { opacity: 1, transform: "translateY(0%)" },
  exit: { opacity: 0, y: -20 },
};

const FadeInUp = ({ delay, children }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      className="m-0 p-0"
      transition={{ duration: 0.5, delay: delay, easings: easeOut }}
    >
      {children}
    </motion.div>
  );
};

const SlideInFromLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ScaleUp = ({ delay, children }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, delay: delay, easings: easeOut }}
    >
      {children}
    </motion.div>
  );
};

export { FadeInUp, SlideInFromLeft, ScaleUp };
