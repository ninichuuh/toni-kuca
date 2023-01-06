import Image from "next/image";
import { motion } from "framer-motion";

type images = [
  {id: undefined,
  src: string
}]
const SkillsGridContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillItem = {
  initial: { opacity: 0, x: -12 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const images= [
  {
    id: 0,
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400995882.jpg?k=a62a9eaed96beda86f380347352d2b27fea67ded66cff8020e22bd9403c6c212&o=&hp=1",
  },
  {
    id: 1,
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996043.jpg?k=180b6a1a7bc206dbb5604bc21e48714356d52e4b50cca4277234dbb8939a7c4b&o=&hp=1",
  },
  {
    id: 2,
    src:
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996042.jpg?k=d8aa53e628d765a42b495d66a4db24b310217ab5371164697ca50ec1c27ae3c8&o=&hp=1"},
  {
    id: 3,
    src:
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400997902.jpg?k=50df92a32b0566c39d531a6ea923e57e165a07bc9cdbb3c0e7d84eec72f6118f&o=&hp=1"},
  {
    id: 6,
    src:
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401004191.jpg?k=5a00e8363494ce8a412a1a24005ab648c9dae974a76b27baf2c1cbf2f8dd607d&o=&hp=1"},
  {
    id: 5,
    src:
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401004191.jpg?k=5a00e8363494ce8a412a1a24005ab648c9dae974a76b27baf2c1cbf2f8dd607d&o=&hp=1"},
];

export default function Gallery() {
  return (
    <section id="projects" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center">
          <h2 className="text-4xl mb-12 text-center text-white">Galerija</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center items-center">
          <motion.div
            whileInView="animate"
            viewport={{ amount: 0.6, once: true }}
            initial="initial"
            variants={SkillsGridContainer}
            className="grid grid-cols-2 gap-x-2 gap-y-2"
          >
            {images.map((images) => (
              <motion.div
                key={images.id}
                variants={SkillItem}
                className="flex flex-col gap-2 p-2 shadow-md rounded-lg"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.7 },
                }}
              >
                <Image
                  src={images.src}
                  alt="House"
                  width={800}
                  height={60}
                  className="self-center"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
