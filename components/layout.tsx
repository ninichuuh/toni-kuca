import { motion } from "framer-motion";
import { NextComponentType } from "next";
import { JsxElement } from "typescript";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }:any) => (
  <>
    <Header />
    <main> {children}</main>
    <Footer year={0} />
  </>
);

export default Layout;
