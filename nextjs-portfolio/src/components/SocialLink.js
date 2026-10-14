import { motion } from "framer-motion";

function SocialLink({ href, label, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex size-12 items-center justify-center rounded-full bg-cyan-700 text-xl text-white transition-colors hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300"
    >
      {icon}
    </motion.a>
  );
}

export const LINKEDIN = "https://www.linkedin.com/in/jeric-nisperos-38055a11b/";
export const GITHUB = "https://github.com/JericNisperos";

export default SocialLink;
