import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import StarBg from "../components/StarBg";
import HomeBlock from "../sections/HomeBlock";
import AboutBlock from "../sections/AboutBlock";
import ProjectsBlock from "../sections/ProjectsBlock";
import ContactBlock from "../sections/ContactBlock";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // The theme lives in localStorage, so the server can't know it. Render the
  // icon only after mount or the markup won't match.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme === "dark";
  const label = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={mounted ? label : "Toggle theme"}
      title={mounted ? label : undefined}
      whileHover={{ scale: 1.3 }}
      whileTap={{ rotate: -360 }}
      className="inline-flex size-11 items-center justify-center rounded-full text-2xl text-zinc-900 transition-colors hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-white dark:hover:text-cyan-400"
    >
      {mounted && (dark ? <FaSun /> : <FaMoon />)}
    </motion.button>
  );
}

export default function Home() {
  return (
    <>
      <StarBg />
      <header className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#" className="text-lg font-bold tracking-tight text-cyan-700 md:text-2xl dark:text-white">
          jnisperos.space
        </a>
        <ThemeToggle />
      </header>
      <main>
        <HomeBlock />
        <AboutBlock />
        <ProjectsBlock />
        <ContactBlock />
      </main>
      <footer className="relative bg-white pb-16 text-center text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
        Built and designed by Jeric Nisperos. <span suppressHydrationWarning>{new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
