import Head from "next/head";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { GITHUB, LINKEDIN } from "../components/SocialLink";
import "../styles/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

// Shared-link previews (Facebook, LinkedIn, Discord, X, Messenger, WhatsApp) read these tags.
// og.jpg is 1200x630; its source is scripts/og-image.html.
const SITE_URL = "https://jnisperos.space";
const TITLE = "Jeric Nisperos | Software & Support Engineer";
const DESCRIPTION = "Software Engineer and Support Engineer building web apps and AI agents, from Discord bots to AI-powered dashboards.";
const OG_IMAGE = `${SITE_URL}/og.jpg`;
const OG_IMAGE_ALT = "Jeric Nisperos, Software & Support Engineer. jnisperos.space";

// Structured data so search engines know who the site is about.
const PERSON_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeric Nisperos",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Software & Support Engineer",
  sameAs: [LINKEDIN, GITHUB],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
        <meta key="theme-light" name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta key="theme-dark" name="theme-color" media="(prefers-color-scheme: dark)" content="#18181b" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="jnisperos.space" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={OG_IMAGE_ALT} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: PERSON_JSON_LD }} />
      </Head>
      {/* reducedMotion="user": Motion skips transform animations when the OS asks for reduced motion */}
      <MotionConfig reducedMotion="user">
        <div className={`${geist.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
