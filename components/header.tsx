import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className={`
      fixed top-0 inset-x-0 px-9 z-20 bg-black opacity-95 border-b-2 border-b-light-emerald
 
      `}
    >
      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} handleOpenChange={setIsOpen} />}
      </AnimatePresence>
      <nav className="h-16">
        <ul className="h-full max-w-6xl mx-auto flex items-center text-gray-200">
          <li>
            <Link
              className="relative inline-flex items-center h-8 w-40 outline-none  focus:ring-4  focus:ring-dark-emerald"
              href={`${router.pathname === "/" ? "#home" : "/#home"}`}
              scroll={false}
            >
              <Image
                src={"/"}
                alt="logo"
                className="w-full h-full"
                width={32}
                height={32}
              />
            </Link>
          </li>
          {/* Hamburger Menu */}
          <li aria-label="open mobile menu" className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
            >
              <FiMenu size={24} />
              <div className=" sr-only">open mobile menu</div>
            </button>
          </li>
          <li className="ml-auto hidden md:block ">
            <ul className="flex gap-8">
              <li>
                <Link
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href={`${router.pathname === "/" ? "#home" : "/#home"}`}
                  scroll={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href={`${router.pathname === "/" ? "#about" : "/#about"}`}
                  scroll={false}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href={`${
                    router.pathname === "/" ? "/gallery" : "/#projects"
                  }`}
                  scroll={false}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href={`${router.pathname === "/" ? "#contact" : "/#contact"}`}
                  scroll={false}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="p-3 hover:text-light-emerald duration-200 outline-none  focus:ring-4  focus:ring-light-emerald"
                  href={`${router.pathname === "/" ? "/legal" : "/legal"}`}
                  scroll={false}
                >
                  Legal
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
