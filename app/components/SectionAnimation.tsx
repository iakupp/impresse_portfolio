"use client";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: .7, ease: "linear" } },
};

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="my-20 w-full"  
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}  // animuje len keď sekcia 30%vstúpi do viewportu
    >
      {children}
    </motion.div>
  );
};

