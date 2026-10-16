import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SocialLink, { GITHUB, LINKEDIN } from "../components/SocialLink";

// FormSubmit relays the form to this inbox. The first submission from a new site sends an
// activation email; nothing is delivered until that link is clicked.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jericrnisperos@gmail.com";

// Instead of a CAPTCHA: one message per minute per browser (kept across reloads),
// plus the hidden _honey field below and FormSubmit's own spam filter.
const COOLDOWN_MS = 60_000;
const COOLDOWN_KEY = "contact-last-sent";

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

function useCooldown() {
  const [until, setUntil] = useState(0);
  const [now, setNow] = useState(0);

  // localStorage can throw (private mode, blocked storage); the cooldown then lasts for this visit only.
  useEffect(() => {
    try {
      setUntil(Number(localStorage.getItem(COOLDOWN_KEY)) + COOLDOWN_MS || 0);
    } catch {}
    setNow(Date.now());
  }, []);

  useEffect(() => {
    if (until <= now) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [until, now]);

  const start = () => {
    const sent = Date.now();
    try {
      localStorage.setItem(COOLDOWN_KEY, String(sent));
    } catch {}
    setUntil(sent + COOLDOWN_MS);
    setNow(sent);
  };

  return [Math.max(0, Math.ceil((until - now) / 1000)), start];
}

function ContactBlock() {
  const form = useRef(null);
  const dialog = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [waitSeconds, startCooldown] = useCooldown();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (waitSeconds > 0) return;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form.current))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== "true") throw new Error(data.message);
      form.current.reset();
      setStatus("idle");
      startCooldown();
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
          <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">You can find me here:</p>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <SocialLink href={LINKEDIN} label="LinkedIn" icon={<FaLinkedinIn />} />
            <SocialLink href={GITHUB} label="GitHub" icon={<FaGithub />} />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 lg:col-span-2">
          <p className="text-xl font-semibold text-zinc-900 dark:text-white">Or send me an email directly</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" id="name">
              <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
            </Field>
            <Field label="Email address" id="email">
              <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
            </Field>
          </div>
          <Field label="Message" id="message">
            <textarea id="message" name="message" rows={8} required className={inputClass} />
          </Field>

          {/* FormSubmit settings. _honey is a bot trap: hidden from people, so any value means spam. */}
          <input type="hidden" name="_subject" value="New message from jnisperos.space" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-400">
              Something went wrong and your message wasn&apos;t sent. Please try again, or reach me on LinkedIn.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending" || waitSeconds > 0}
            className="self-center rounded-lg bg-cyan-700 px-10 py-3 font-semibold text-white transition hover:bg-cyan-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:self-start dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300"
          >
            {status === "sending" ? "Sending..." : waitSeconds > 0 ? `Send again in ${waitSeconds}s` : "Send"}
          </button>
        </form>
      </motion.div>

      <dialog ref={dialog} aria-labelledby="sent-title" className="m-auto w-[min(90vw,36rem)] rounded-xl bg-white p-8 text-center text-zinc-800 shadow-2xl dark:bg-slate-800 dark:text-zinc-100">
        <h2 id="sent-title" className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">
          Message sent!
        </h2>
        <p className="mt-4 leading-relaxed">Thanks for reaching out. For anything urgent, message me on LinkedIn.</p>
        <form method="dialog">
          <button className="mt-8 rounded-lg bg-cyan-700 px-6 py-2.5 font-semibold text-white transition hover:bg-cyan-600 dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300">Close</button>
        </form>
      </dialog>
    </section>
  );
}

export default ContactBlock;
