import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BEACH_1 from "../public/beach.jpg";
import BEACH_2 from "../public/beach2.jpg";
import BEACH_3 from "../public/beach3.jpg";
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Beaches() {
  return (
    <section id="beaches" className="bg-gray-800 py-16 md:py-24 px-9">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center">
          <h2 className="text-4xl mb-12 text-center text-white">Beaches</h2>
          <span className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        {/* Start of MovieSpot */}
        <div className="relative grid grid-cols-3 mt-16 items-center gap-6 mb-16 md:gap-9">
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <div className="mb-3">
              <h3 className="text-2xl mb-2 text-white text-center md:text-start">
                Beach 1
              </h3>
              <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
                Nšto lijepo o ovoj plaži kolko do nje i bla bla
              </p>
            </div>
            <div className="mb-3">
              <h4 className="hidden mb-2 md:block text-white text-lg">
                Highlights
              </h4>
              <ul className="hidden space-y-1 md:block text-light-grey mb-4">
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>1.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>2.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>3.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link
                className="inline-flex bg-slate-900 text-white rounded-3xl justify-center items-center px-5 h-12 outline-none duration-200 hover:bg-light-emerald focus:bg-light-emerald"
                href="/projects/moviespot"
              >
                View Route
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={BEACH_1}
              alt="Beach 1"
              placeholder="blur"
              className=" object-cover object-top w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <div className="mb-3">
              <h3 className="text-2xl mb-2 text-white text-center md:text-start">
                Beach 1
              </h3>
              <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
                Nšto lijepo o ovoj plaži kolko do nje i bla bla
              </p>
            </div>
            <div className="mb-3">
              <h4 className="hidden mb-2 md:block text-white text-lg">
                Highlights
              </h4>
              <ul className="hidden space-y-1 md:block text-light-grey mb-4">
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>1.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>2.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>3.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link
                className="inline-flex bg-slate-900 text-white rounded-3xl justify-center items-center px-5 h-12 outline-none duration-200 hover:bg-light-emerald focus:bg-light-emerald"
                href="/projects/moviespot"
              >
                View Route
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={BEACH_2}
              alt="Beach 2"
              placeholder="blur"
              className=" object-cover object-top w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="col-span-3  w-full sm:w-3/4 mx-auto md:w-full md:mx-0 md:col-span-1 flex flex-col gap-2"
          >
            <div className="mb-3">
              <h3 className="text-2xl mb-2 text-white text-center md:text-start">
                Beach 3
              </h3>
              <p className=" text-light-grey mb-4 text-lg text-center md:text-start md:mb-1">
                Nšto lijepo o ovoj plaži kolko do nje i bla bla
              </p>
            </div>
            <div className="mb-3">
              <h4 className="hidden mb-2 md:block text-white text-lg">
                Highlights
              </h4>
              <ul className="hidden space-y-1 md:block text-light-grey mb-4">
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>1.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>2.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className=" h-1.5 w-1.5 bg-light-emerald rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>3.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-auto">
              <Link
                className="inline-flex bg-slate-900 text-white rounded-3xl justify-center items-center px-5 h-12 outline-none duration-200 hover:bg-light-emerald focus:bg-light-emerald"
                href="/projects/moviespot"
              >
                View Route
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-80 md:h-96 row-start-1 md:row-start-auto col-span-3 md:col-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={BEACH_3}
              alt="Beach 3"
              placeholder="blur"
              className=" object-cover object-top w-full h-full"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
