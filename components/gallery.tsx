import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "../data/images.js"
type images = [
  {id: undefined,
  src: string,
  blurUrl: string
}] | null
const SkillsGridContainer = {
  initial: { opacity: 0.0 },
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



export default function Gallery() {
  
  return (
    <section id="gallery" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center">
          <h2 className="text-4xl mb-12 text-center text-white">Gallery</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center items-center">
          <motion.div
            whileInView="animate"
            viewport={{ amount: 0.6, once: true }}
            initial="initial"
            variants={SkillsGridContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2"
          >
            {images.slice(0,6).map((image) => (
              <motion.div
                key={image.id}
                variants={SkillItem}
                className="flex flex-col gap-2 p-2 "
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.7 },
                }}
              >
                <Image
                  src={image.src}
                  alt="House"
                  width={500}
                  height={60}
                  className="self-center"
                  placeholder="blur"
                  blurDataURL={image.blurUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
