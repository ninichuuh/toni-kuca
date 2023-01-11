import Link from "next/link";
import { motion } from "framer-motion";
import { TbBrandBooking } from "react-icons/tb";
import { IoMapSharp } from "react-icons/io5"
import { FaWhatsapp } from "react-icons/fa";
const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Landing() {
  return (
    <section
      id="home"
      className="h-screen bg-[url('../public/landing.jpg')] md:bg-[url('../public/image1.jpg')] bg-no-repeat bg-clip-padding bg-cover bg-top bg-fixed flex items-center px-9 "
    >
      <div className="flex  flex-col-reverse gap-8 items-center max-w-6xl mx-auto md:gap-0  md:flex-row md:justify-between ">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1.5 }}
          className=" flex flex-col w-full sm:w-3/4  md:w-1/2 text-center md:text-start"
        >
          <h3 className=" text-yellow text-xl font-medium md:text-2xl mb-2">
            Authentic old
          </h3>
          <h1 className="text-white text-5xl font-semibold  md:text-6xl mb-2 ">
            Stonehouse
          </h1>
          <p className="text-lg md:text-xl text-yellow mb-4">
            TEXT OVDJE I GORE SMISLIT KAKO ZELITE al ga treba biti onako dosta mislim 2 recenice najbtinije na stranici
            Boje i to mozemo mjenjat i sve
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              className="group ring-0 relative border-2 border-yellow p-3 cursor-pointer outline-none"
              aria-label="booking"
              href="https://www.booking.com/hotel/hr/kuca-viganj.en-gb.html?sid=999878b4be84b5a8d2c14e6565714fcb"
              target="_blank"
            >
              <span
                className="absolute top-0 left-0  bg-yellow  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
              ></span>
              <TbBrandBooking   
                className="relative z-10 text-blue-900 fill-yellow  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                size={24}
              />
            </Link>
            <Link
              className="group relative border-2 border-yellow p-3 cursor-pointer outline-none"
              aria-label="whatsapp"
              href=" https://wa.me/385994183709"
            >
              <span
                className="absolute  top-0 left-0  bg-yellow  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
              ></span>
              <FaWhatsapp
                className="relative z-10 text-yellow  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                size={24}
              />
            </Link>
            <Link
              className="group relative border-2 border-yellow p-3 cursor-pointer outline-none"
              aria-label="maps"
              href="https://goo.gl/maps/BGiyzQdiKWk65de5A"
            >
              <span
                className="absolute  top-0 left-0  bg-yellow  h-full w-full scale-x-0 origin-left duration-150 group-hover:scale-x-100  group-hover:duration-300 group-focus:scale-x-100 group-focus:duration-300
                  "
              ></span>
              <IoMapSharp
                className="relative z-10 text-yellow  duration-75 group-hover:text-black  group-hover:duration-100 group-hover:delay-150 group-focus:text-black group-focus:duration-100 group-focus:delay-150 "
                size={24}
              />
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}