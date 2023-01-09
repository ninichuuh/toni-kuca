import clsx from "clsx";
import { motion } from "framer-motion";
import { MdKitchen, MdOutdoorGrill, MdPets, MdWifi, MdPool, MdBalcony, MdLocalParking } from "react-icons/md"
import { GrOverview } from "react-icons/gr"
import { RiPlantLine } from "react-icons/ri"

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 md:py-24 px-9">
      <motion.div
        whileInView="animate"
        transition={{ duration: 0.4 }}
        initial="initial"
        viewport={{ amount: 0.4, once: false }}
        variants={variants}
        className=" max-w-6xl mx-auto"
      >
        <div className="relative text-center mb-12">
          <h2 className="text-4xl text-gray-700 mb-12 text-center">O nama</h2>
          <span className="absolute  left-1/2 bottom-0 -translate-x-1/2 translate-y-5 h-2 bg-light-emerald w-16"></span>
        </div>
        <div className="grid grid-cols-4 gap-12 mt-16">
          <div className={clsx("col-span-4", "lg:col-span-2")}>
            <h3 className="text-2xl text-gray-700  mb-6">Upoznajte našu kuću</h3>
            <p className="text-lg text-dark-grey mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <p className="text-lg text-dark-grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className={clsx("col-span-4 text-gray-700", "lg:col-span-2")}>
            <h3 className=" text-2xl mb-6">Naše usluge</h3>
            <motion.div
              whileInView="animate"
              viewport={{ amount: 0.6, once: true }}
              initial="initial"
              variants={SkillsGridContainer}
              className="grid grid-cols-4 gap-x-2 gap-y-4"
            >
              <motion.div
                variants={SkillItem}
                className="flex flex-col gap-2 p-2 border-2 border-gray-200 shadow-md rounded-lg items-center"
              >
                <MdPets size={36} />
                <span className="text-base">Ljubimci</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <MdWifi size={36} />
                <span className="text-base">Wifi</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <MdOutdoorGrill size={36} />
                <span className="text-base">Roštilj</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <GrOverview size={36} />
                <span className="text-base">Pogled</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <RiPlantLine size={36} />
                <span className="text-base">Vrt</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <MdKitchen size={36} />
                <span className="text-base">Kuhinja</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <MdLocalParking size={36} />
                <span className="text-base">Parking</span>
              </motion.div>
              <motion.div
                variants={SkillItem}
                className="flex flex-col  gap-2 p-2 shadow-md border-2 border-gray-200 rounded-lg items-center"
              >
                <MdPool size={36} />
                <span className="text-base">Bazen</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}