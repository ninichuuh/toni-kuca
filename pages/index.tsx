import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Gallery from "../components/gallery";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="flex-1">
      <Head>
        <title>Kuća za odmor Vila Toni Bomboni</title>
      </Head>
      <Landing />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
