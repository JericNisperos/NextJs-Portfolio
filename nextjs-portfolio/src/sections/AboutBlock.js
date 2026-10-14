import Image from "next/image";
import { motion } from "framer-motion";
import { SiJira, SiNextdotjs, SiPostman, SiTailwindcss, SiUnity } from "react-icons/si";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { PiBooks, PiChatsCircle, PiDiscordLogo, PiTerminalWindow, PiTicket } from "react-icons/pi";

import profile from "../../public/profile.jpg";
import SectionHeading from "../components/SectionHeading";
import StackItem from "../components/StackItem";

// Stacks & Tools are hidden for now; flip to true to show them again.
const SHOW_STACKS = false;

const STACKS = [
  { title: "HTML5", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "JavaScript", icon: FaJs },
  { title: "Tailwind", icon: SiTailwindcss },
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
];

const TOOLS = [
  { title: "GitHub", icon: FaGithub },
  { title: "Postman", icon: SiPostman },
  { title: "Jira", icon: SiJira },
  { title: "Photoshop", icon: TbBrandAdobePhotoshop },
  { title: "Unity", icon: SiUnity },
];

// Draft list, to be reviewed. The first four come from existing projects; the last is a placeholder.
const AGENTS = [
  { title: "Weddora", icon: PiChatsCircle, body: "AI wedding assistant on Sincerely Invite You. Answers questions in real time and guides couples through their custom design request." },
  { title: "Cyan Librarian", icon: PiBooks, body: "Knowledge-base agent that processes the Cyan Realms docs, rules, and lore to answer complex player questions." },
  { title: "Discord Support Bot", icon: PiDiscordLogo, body: "Brings the Librarian into Discord so members get answers without leaving the server." },
  { title: "Support Ticket System", icon: PiTicket, body: "A full ticket system built into Cyan Librarian for issues that need a human." },
  { title: "AI Dev Workflow", icon: PiTerminalWindow, body: "Multiple AI coding agents working together to build, review, and ship my projects." },
];

const Accent = ({ children }) => <strong className="font-semibold text-cyan-700 dark:text-cyan-400">{children}</strong>;

function IconGroup({ title, items, from }) {
  return (
    <motion.div initial={{ opacity: 0, x: from }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
      <h3 className="mb-6 text-center text-2xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <StackItem key={item.title} {...item} />
        ))}
      </ul>
    </motion.div>
  );
}

function AgentList() {
  return (
    <div>
      <p className="mx-auto mb-10 max-w-prose text-center text-lg leading-relaxed text-zinc-700 md:text-xl dark:text-zinc-300">
        I&apos;m also building <Accent>AI Agents</Accent> that answer questions, guide users, and handle support.{" "}
        <a href="#projects" className="font-semibold  text-cyan-700 underline decoration-2 underline-offset-4 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300">
          Check out my projects
        </a>{" "}
        to see them in action.
      </p>
      {/* <ul className="grid gap-x-16 gap-y-10 md:grid-cols-2">
        {AGENTS.map(({ title, icon: Icon, body }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-5 border-t border-zinc-200 pt-6 dark:border-zinc-700"
          >
            <Icon aria-hidden className="mt-1 shrink-0 text-3xl text-cyan-700 dark:text-cyan-400" />
            <div>
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h4>
              <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">{body}</p>
            </div>
          </motion.li>
        ))}
      </ul> */}
    </div>
  );
}

function AboutBlock() {
  return (
    <section id="about" className="relative scroll-mt-8 bg-white bg-linear-to-b px-6 py-24 md:px-12 dark:from-zinc-900 dark:to-slate-800">
      <SectionHeading>About Me</SectionHeading>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-3">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto w-full max-w-xs">
          <Image src={profile} alt="Jeric Nisperos" sizes="320px" placeholder="blur" className="aspect-square rounded-full border-4 border-cyan-500 object-cover p-2 shadow-lg shadow-cyan-900/20" />
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-prose space-y-6 text-justify hyphens-auto text-lg leading-relaxed text-zinc-700 md:col-span-2 md:text-xl dark:text-zinc-300">
          <p>🎮Game Dev by passion,👷‍♂️Support Engineer by necessity, and 🕸️Web Dev by selection. Crafting digital worlds, solving digital dilemmas, and weaving web wonders.</p>
          <p>
            One of my significant accomplishment is the continuous development and management of one of the best Minecraft Game Networks in the Philippines. This network has expanded to encompass over{" "}
            <Accent>thousand of unique members joined</Accent>, and in my capacity as the <Accent>Owner</Accent>, I have effectively added new and unique features, fixed bugs, managed a team, and handled day-to-day concerns from players and
            staff team to ensure seamless gameplay. Through these experiences, I have further sharpened my technical expertise, management skills and interpersonal skills, positioning myself as a valuable asset to any team.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <AgentList />
      </div>

      {SHOW_STACKS && (
        <div className="mx-auto mt-20 grid max-w-6xl gap-16 md:grid-cols-2">
          <IconGroup title="Stacks" items={STACKS} from={-50} />
          <IconGroup title="Tools" items={TOOLS} from={50} />
        </div>
      )}
    </section>
  );
}

export default AboutBlock;
