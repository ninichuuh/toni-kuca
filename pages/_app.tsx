import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("hashChangeStart", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
    router.events.on("routeChangeStart", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  }, [router]);

  return (
  
      
        <Component {...pageProps} />
  );
}

export default MyApp;
