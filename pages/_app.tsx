import "../styles/globals.css";
import { Raleway } from "@next/font/google";
import Layout from "../components/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
const raleway_font = Raleway({ subsets: ["latin"] });
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("hashChangeStart", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
    router.events.on("routeChangeStart", () => {
      document.documentElement.style.scrollBehavior = "auto";
    });
  }, [router]);

  return (
    <Layout font={raleway_font}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
