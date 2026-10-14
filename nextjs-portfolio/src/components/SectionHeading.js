import { motion } from "framer-motion";

function SectionHeading({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white"
    >
      <span className="border-b-4 border-cyan-500 px-4 pb-2">{children}</span>
    </motion.h2>
  );
}

export default SectionHeading;
