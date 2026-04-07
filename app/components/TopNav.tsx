"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import {NavigationData} from "@/app/message/sk.json";
import logo from "@/app/assets/logo-w.png";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const TopNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { links } = NavigationData;
  const handleScroll = (id: string) => {
    const ellement = document.getElementById(id);
    if (ellement) {
      ellement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(links).forEach((label) => {
      const section = document.getElementById(label);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleClick = (label: string) => {
    handleScroll(label);
    if (isOpen) setIsOpen(false);
  };
  return (
    <>
      
      {/* Mobile Navigation */}
      <div className="fixed flex top-0 left-0 right-0 items-center justify-between px-5 pt-6 pb-6 xl:hidden z-9999 max-w-[99dvw]">
        <Image src={logo} alt="logo" className="h-10 w-10" />
        <button onClick={toggleMenu} className="text-3xl text-white cursor-pointer">
          {isOpen ? <IoIosClose/> : <CiMenuFries />}
        </button>
        {isOpen && (
          <motion.ul
            key="menu"
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute right-[1rem] top-[5rem] backdrop-blur-md bg-[var(--bg-color)]/10 w-[92dvw] h-[90dvh] flex flex-col pt-[5rem] rounded-2xl cursor-pointer"
          >
            {links.map((label) => (
              <motion.li
                key={label}
                variants={item}
                onClick={() => handleClick(label)}
                className={`!cursor-pointer font-light text-neutral-800 dark:text-neutral-400 hover:text-[var(--primary-color)] transition-all duration-200 text-[35px] text-center inline-block self-center mb-10`}
                style={{
                  borderBottom:
                    activeSection === label
                      ? "2px solid var(--primary-color)"
                      : "none",
                }}
              >
                {label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 h-screen flex-col items-center justify-baseline py-6 z-50 px-5 border-r border-r-neutral-800 backdrop-blur-md bg-[var(--bg-color)]/5 hidden xl:flex max-w-[90px]">
        <Image
          src={logo}
          alt="logo"
          className="h-10 mb-[clamp(4rem,15vh,21em)]"
        />
        <ul className="flex flex-col gap-8 writing-vertical">
          {links.map((label) => (
            <li
              key={label}
              onClick={() => handleScroll(label)}
              className={`cursor-pointer font-light font-alumi text-lg tracking-wider mb-10 text-neutral-800 dark:text-neutral-400 hover:text-[var(--primary-color)] transition-all duration-200`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                borderLeft:
                  activeSection === label
                    ? "2px solid var(--primary-color)"
                    : "none",
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default TopNav;