import { motion } from "framer-motion";
import { FaAmazon } from "react-icons/fa6";
import { SiVerizon } from "react-icons/si";
import { PiCode, PiGameController, PiHeadset, PiUsersThree } from "react-icons/pi";
import SectionHeading from "../components/SectionHeading";

// Brands supported through past support roles. Add more here (react-icons/si has most brand logos).
const BRANDS = [
  { name: "Amazon", icon: FaAmazon },
  { name: "Verizon", icon: SiVerizon },
];

const SKILLS = [
  { title: "Support Engineering", icon: PiHeadset, body: "Troubleshooting and resolving technical issues for users of a leading productivity and project management platform." },
  { title: "Software Engineering", icon: PiCode, body: "Building web apps with React, Next.js, and Tailwind, from booking platforms to AI chatbots." },
  { title: "Game Development", icon: PiGameController, body: "Unity projects and custom minigames, like Keyboard Warrior on my gaming portfolio." },
  { title: "Community Leadership", icon: PiUsersThree, body: "Running a Minecraft network with thousands of members and leading its staff team." },
];

function HighlightsBlock() {
  return (
    <section id="highlights" className="relative bg-slate-50 px-6 py-24 md:px-12 dark:bg-slate-800">
      <SectionHeading>Highlights</SectionHeading>

      <div className="mx-auto max-w-5xl">
        <p className="text-center text-lg text-zinc-700 dark:text-zinc-300">Supported customers of global brands across e-commerce and telco.</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {BRANDS.map(({ name, icon: Icon }) => (
            // Name sits beside the mark: some logos (Verizon's check) don't read on their own.
            <li key={name} className="flex items-center gap-3 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <Icon aria-hidden className="text-5xl md:text-6xl" />
              <span className="text-2xl font-semibold tracking-tight md:text-3xl">{name}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-20 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {SKILLS.map(({ title, icon: Icon, body }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 border-t border-zinc-200 pt-6 dark:border-zinc-700"
            >
              <Icon aria-hidden className="mt-1 shrink-0 text-3xl text-cyan-700 dark:text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">{body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HighlightsBlock;
