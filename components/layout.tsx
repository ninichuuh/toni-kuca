import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => (
  <>
    <Header />
    {children}
    <Footer year={0} />
  </>
);

export default Layout;
