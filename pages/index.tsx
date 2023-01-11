import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Beaches from "../components/beaches";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Kuća za odmor Vila Toni Bomboni</title>
        </Head>
        <Landing />
        <About />
        <Gallery />
        <Beaches />
        <Contact />
      </Layout>
      </>
  );
}
