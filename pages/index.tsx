import Meta from "../components/Meta";
import Landing from "../components/landing";
import About from "../components/about";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Beaches from "../components/beaches";
import Layout from "../components/layout";


export default function Home() {
  return (
    <>
      <Layout>
        <Meta/>
        <Landing />
        <About />
        <Gallery />
        <Beaches />
        <Contact />
      </Layout>
      </>
  );
}
