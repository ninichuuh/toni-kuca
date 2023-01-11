import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import { images } from "../data/images";
import { motion, useScroll, useTransform } from "framer-motion";

type images = [
  {id: undefined,
  src: string,
  blurUrl: string
}] | any
const MasonryGallery = () => {
  function getMultipleRandom(images: images, num: number) {
    const shuffled = [...images].sort(() => 0.2 - Math.random());

    return shuffled.slice(0, num);
  }
  const { scrollY } = useScroll();
  const deltaY = useTransform(scrollY, [0, 5500], [0, 8500]);
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-3 max-w-full place-items-center overflow-y-hidden w-full relative">
        <div className="col-span-1  px-0 flex flex-col-reverse">
          <motion.div initial={{ y: `-95%` }} style={{ translateY: deltaY }}>
            {getMultipleRandom(images, 12).map((image) => (
              <div
                key={image.id}
                className="rounded-lg object-cover shadow-lg border-2 w-full aspect-[3/4]"
              >
                <motion.div whileHover={{ scale: 1.33 }}>
                  <Image
                    src={image.src}
                    alt="House"
                    placeholder="blur"
                    blurDataURL={image.blurUrl}
                    width={300}
                    height={300}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="col-span-1 py-[10vh]  px-0 flex flex-col">
          {getMultipleRandom(images, 12).map((image) => (
            <div
              key={image.id}
              className="rounded-lg object-cover shadow-lg border-2 w-full aspect-[3/4]"
            >
              <motion.div whileHover={{ scale: 1.33 }}>
                <Image
                  src={image.src}
                  alt="House"
                  placeholder="blur"
                  blurDataURL={image.blurUrl}
                  width={350}
                  height={300}
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col-reverse ">
          <motion.div initial={{ y: "-95%" }} style={{ translateY: deltaY }}>
            {getMultipleRandom(images, 12).map((image) => (
              <div
                key={image.id}
                className="rounded-lg object-cover shadow-lg border-2 w-full aspect-[3/4]"
              >
                <motion.div whileHover={{ scale: 1.33 }}>
                  <Image
                    src={image.src}
                    alt="House"
                    placeholder="blur"
                    blurDataURL={image.blurUrl}
                    width={300}
                    height={300}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MasonryGallery;
