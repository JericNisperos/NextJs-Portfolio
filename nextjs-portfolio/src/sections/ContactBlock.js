import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SocialLink, { GITHUB, LINKEDIN } from "../components/SocialLink";

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-slate-50 px-4 py-2.5 text-zinc-900 placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400";

function Field({ label, id, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactBlock() {
  const form = useRef(null);
  const dialog = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Field names (user_name, user_email, message) must match the EmailJS template.
      await emailjs.sendForm("service_jericnisperos", "template_0644tgj", form.current, { publicKey: "RGSv6lmfsbIbL5NsQ" });
      form.current.reset();
      setStatus("idle");
      dialog.current.showModal();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-8 bg-white px-6 pt-24 pb-16 md:px-12 dark:bg-zinc-900">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-700 md:text-5xl dark:text-cyan-400">Let&apos;s Connect!</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">I typically reply within 2 to 6 hours. You can also find me here:</p>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <SocialLink href={LINKEDIN} label="LinkedIn" icon={<FaLinkedinIn />} />
            <SocialLink href={GITHUB} label="GitHub" icon={<FaGithub />} />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 lg:col-span-2">
          <p className="text-xl font-semibold text-zinc-900 dark:text-white">Or send me an email directly</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" id="user_name">
              <input id="user_name" name="user_name" type="text" autoComplete="name" required className={inputClass} />
            </Field>
            <Field label="Email address" id="user_email">
              <input id="user_email" name="user_email" type="email" autoComplete="email" required className={inputClass} />
            </Field>
          </div>
          <Field label="Message" id="message">
            <textarea id="message" name="message" rows={8} required className={inputClass} />
          </Field>

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-400">
              Something went wrong and your message wasn&apos;t sent. Please try again, or reach me on LinkedIn.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-center rounded-lg bg-cyan-700 px-10 py-3 font-semibold text-white transition hover:bg-cyan-600 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 sm:self-start dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <dialog ref={dialog} aria-labelledby="sent-title" className="m-auto w-[min(90vw,36rem)] rounded-xl bg-white p-8 text-center text-zinc-800 shadow-2xl dark:bg-slate-800 dark:text-zinc-100">
        <h2 id="sent-title" className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">
          Message sent!
        </h2>
        <p className="mt-4 leading-relaxed">Thanks for reaching out. I typically reply within 2 to 6 hours. For anything urgent, message me on LinkedIn.</p>
        <form method="dialog">
          <button className="mt-8 rounded-lg bg-cyan-700 px-6 py-2.5 font-semibold text-white transition hover:bg-cyan-600 dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300">Close</button>
        </form>
      </dialog>
    </section>
  );
}

export default ContactBlock;
