import "./globals.scss";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
