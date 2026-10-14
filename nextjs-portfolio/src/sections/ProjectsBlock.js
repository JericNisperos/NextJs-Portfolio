import { motion } from "framer-motion";
import { PiArrowUpRight } from "react-icons/pi";
import SectionHeading from "../components/SectionHeading";

// Two-column index; each item links to the live site. Keep an even count so rows stay full.
// "AI Agent" tags get the cyan accent (the About section points here for them).
const PROJECTS = [
  {
    title: "Sincerely Invite You",
    href: "https://sincerelyinvite.you",
    pitch: "Personalized wedding websites, with Weddora, an AI chatbot that guides every request.",
    tags: ["AI Agent", "Custom designs", "Digital invitations"],
  },
  {
    title: "Librarian Discord Bot",
    href: "https://librarian.page",
    pitch: "An AI that lives in your Discord server. It answers members from your rules and FAQ, and sets up your server when you ask.",
    tags: ["AI Agent", "Discord bot", "Tickets & moderation"],
  },
  {
    title: "ForTable",
    href: "https://fortable.app",
    pitch: "Drop in a CSV, Excel, JSON, or XML file and AI builds an interactive dashboard you can question in plain English and share as a live link.",
    tags: ["AI Agent", "Data dashboards", "Spreadsheets"],
  },
  {
    title: "Detail with Jaycee",
    href: "https://www.detailwithjaycee.com",
    pitch: "Online booking platform for car detailing services.",
    tags: ["Booking", "Packages & pricing"],
  },
  {
    title: "Cyan Realms Website",
    href: "https://www.cyanrealms.com",
    pitch: "Official hub of the Cyan Realms gaming community, from news to events.",
    tags: ["Community", "News & events", "Server", "API"],
  },
  {
    title: "Gaming Portfolio",
    href: "https://me.cyanrealms.com",
    pitch: "My personal gaming portfolio, with a built-in minigame called Keyboard Warrior.",
    tags: ["Gaming", "Minigame"],
  },
];

const host = (url) => new URL(url).hostname.replace(/^www\./, "");

function Tag({ children }) {
  const ai = children === "AI Agent";
  return (
    <li
      className={`rounded-lg px-3 py-1 text-sm font-medium ${
        ai ? "bg-cyan-700 text-white dark:bg-cyan-400 dark:text-zinc-950" : "border border-zinc-300 text-zinc-600 dark:border-zinc-600 dark:text-zinc-300"
      }`}
    >
      {children}
    </li>
  );
}

function ProjectsBlock() {
  return (
    <section id="projects" className="relative scroll-mt-8 bg-white bg-linear-to-b px-6 py-24 md:px-12 dark:from-slate-800 dark:to-zinc-900">
      <SectionHeading>Projects</SectionHeading>

      <ul className="mx-auto grid max-w-6xl border-b border-zinc-200 md:grid-cols-2 md:gap-x-12 dark:border-zinc-700">
        {PROJECTS.map(({ title, href, pitch, tags }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-zinc-200 dark:border-zinc-700"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col px-2 py-8 transition-colors hover:bg-cyan-500/5 focus-visible:outline-2 focus-visible:outline-cyan-500 md:px-6"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-cyan-700 md:text-3xl dark:text-white dark:group-hover:text-cyan-400">{title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-300">{pitch}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2 pt-6 text-zinc-500 transition-colors group-hover:text-cyan-700 dark:text-zinc-400 dark:group-hover:text-cyan-400">
                <span className="font-medium">{host(href)}</span>
                <PiArrowUpRight aria-hidden className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                <span className="sr-only">(opens in a new tab)</span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsBlock;
