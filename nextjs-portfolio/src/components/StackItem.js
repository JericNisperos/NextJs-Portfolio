import { motion } from "framer-motion";

function StackItem({ title, icon: Icon }) {
  return (
    <motion.li whileHover={{ scale: 0.92 }} className="group flex flex-col items-center gap-2">
      <Icon aria-hidden className="text-4xl text-zinc-800 transition-colors group-hover:text-cyan-700 lg:text-5xl dark:text-white dark:group-hover:text-cyan-400" />
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{title}</span>
    </motion.li>
  );
}

export default StackItem;
