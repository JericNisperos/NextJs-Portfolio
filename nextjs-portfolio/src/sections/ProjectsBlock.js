import { motion } from "framer-motion";
import { PiArrowUpRight } from "react-icons/pi";
import SectionHeading from "../components/SectionHeading";

// Card grid; each card links to the live site.
// `featured: true` goes first, spans both columns, and gets the larger type.
// Keep the rest in pairs so no row has a gap.
// `color` picks the card's accent from COLORS below.
// "AI Agent" tags stay cyan everywhere (the About section points here for them).
const PROJECTS = [
  {
    title: "Cyan Realms Website",
    href: "https://www.cyanrealms.com",
    pitch: "Official hub of the Cyan Realms gaming community, from news to events.",
    tags: ["Community", "News & events", "Server", "API"],
    color: "cyan",
    featured: true,
  },
  {
    title: "Sincerely Invite You",
    href: "https://sincerelyinvite.you",
    pitch: "Personalized wedding websites, with Weddora, an AI chatbot that guides every request.",
    tags: ["AI Agent", "Custom designs", "Digital invitations"],
    color: "fuchsia",
  },
  {
    title: "Librarian Discord Bot",
    href: "https://librarian.page",
    pitch: "An AI that lives in your Discord server. It answers members from your rules and FAQ, and sets up your server when you ask.",
    tags: ["AI Agent", "Discord bot", "Tickets & moderation"],
    color: "indigo",
  },
  {
    title: "ForTable",
    href: "https://fortable.app",
    pitch: "Drop in a CSV, Excel, JSON, or XML file and AI builds an interactive dashboard you can question in plain English and share as a live link.",
    tags: ["AI Agent", "Data dashboards", "Spreadsheets"],
    color: "sky",
  },
  // Hidden for now.
  // {
  //   title: "Detail with Jaycee",
  //   href: "https://www.detailwithjaycee.com",
  //   pitch: "Online booking platform for car detailing services.",
  //   tags: ["Booking", "Packages & pricing"],
  //   color: "violet",
  // },
  {
    title: "Gaming Portfolio",
    href: "https://me.cyanrealms.com",
    pitch: "My personal gaming portfolio, with a built-in minigame called Keyboard Warrior.",
    tags: ["Gaming", "Minigame"],
    color: "violet",
  },
];

// Full class strings so Tailwind can see them. Colors come from the nebula behind the hero.
const COLORS = {
  cyan: { card: "border-cyan-500/60 bg-cyan-500/5 hover:bg-cyan-500/10", text: "group-hover:text-cyan-700 dark:group-hover:text-cyan-400" },
  fuchsia: { card: "border-fuchsia-500/40 bg-fuchsia-500/5 hover:bg-fuchsia-500/10", text: "group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400" },
  indigo: { card: "border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10", text: "group-hover:text-indigo-700 dark:group-hover:text-indigo-400" },
  sky: { card: "border-sky-500/40 bg-sky-500/5 hover:bg-sky-500/10", text: "group-hover:text-sky-700 dark:group-hover:text-sky-400" },
  violet: { card: "border-violet-500/40 bg-violet-500/5 hover:bg-violet-500/10", text: "group-hover:text-violet-700 dark:group-hover:text-violet-400" },
};

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

      <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {PROJECTS.map(({ title, href, pitch, tags, color, featured }, i) => {
          const c = COLORS[color];
          return (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: featured ? 0 : ((i + 1) % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={featured ? "md:col-span-2" : undefined}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${c.card} ${
                  featured ? "border-2 px-6 py-10 md:px-10" : "border px-6 py-8"
                }`}
              >
                <h3 className={`font-bold tracking-tight text-zinc-900 transition-colors dark:text-white ${c.text} ${featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{title}</h3>
                <p className={`max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300 ${featured ? "mt-3 text-lg md:text-xl" : "mt-2 md:text-lg"}`}>{pitch}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
                <div className={`mt-auto flex items-center gap-2 pt-6 text-zinc-500 transition-colors dark:text-zinc-400 ${c.text}`}>
                  <span className="font-medium">{host(href)}</span>
                  <PiArrowUpRight aria-hidden className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <span className="sr-only">(opens in a new tab)</span>
                </div>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsBlock;
