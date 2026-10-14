import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Typewriter from "typewriter-effect";

const TITLES = ["Software Engineer.", "Support Engineer."];

function HomeBlock() {
  const reduce = useReducedMotion();
  // Static title on the server and first paint (also what crawlers read); typewriter after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl items-center px-6 pb-24 md:px-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full text-center md:text-left">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
          Hi there! I&apos;m <span className="text-cyan-700 dark:text-cyan-400">Jeric</span>,
        </h1>
        <div className="mt-3 min-h-[1.2em] text-4xl font-extrabold leading-tight tracking-tight text-cyan-700 md:text-6xl lg:text-7xl dark:text-cyan-400">
          {!mounted || reduce ? TITLES[0] : <Typewriter options={{ strings: TITLES, autoStart: true, loop: true }} />}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className="mt-6 text-lg text-zinc-700 md:text-2xl dark:text-zinc-300">
          Building dynamic and responsive web applications.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#projects" className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-900/20 transition hover:bg-cyan-600 active:scale-[0.98] dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300">
            My Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeBlock;
