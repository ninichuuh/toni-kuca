import Header from "./header";
import Footer from "./footer";

interface Props {
  children?: any;
  font: any;
  // any props that come into the component
}
export default function Layout({ children, font }: Props) {
  return (
    <div
      className={`relative min-h-full flex flex-col overflow-hidden ${font.className}`}
    >
      <Header />
      <main className="flex flex-1 ">{children}</main>
      <Footer year={0} />
    </div>
  );
}
