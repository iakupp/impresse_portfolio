"use client"
import { useState, useEffect } from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { HeroSectionData } from "@/app/message/sk.json";
import { motion } from "framer-motion";

const HeroSection = () => {

  const [isBottom, setIsBottom] = useState(false);
  const { titleLine1, titleLine2 } = HeroSectionData.title;

  const fullText = `${titleLine1} ${titleLine2}`;
  const words = fullText.split(" ");


  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("Speciallized");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.3;
      setIsBottom(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleScrollClick = () => {
  const element = document.getElementById("Contact");
  if (!element) return;

  if (!isBottom) {
    const offset = 90;
    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({ top, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
  



  return (
    <div id="Home">
      <div className="px-[16px] xl:px-[32px] min-h-screen w-full max-w-[400px] xl:max-w-[800px] mr-auto lg:ml-[100px] xl:ml-[200px] flex items-center">
    <h1 className="text-white font-serif font-extrabold text-[30px] lg:text-[40px] xl:text-[80px] flex flex-wrap gap-2 tracking-wide leading-[.8em]">
      {words.map((word, i) => (
        <span key={i} className="relative overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1, }}
            transition={{
              duration: .1,
              delay: i * .1,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>


        {/* <motion.p
          className="text-neutral-400 tracking-wider text-[20px] w-[90%] md:w-[570px] mt-2 font-light"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        </motion.p> */}
      </div>
      
      {/* <div
        className="fixed right-10 z-[40] bottom-10 cursor-pointer"
        onClick={() => handleScrollClick()}
      >
        <p className="text-neutral-500 text-[10px] font-bold">S</p>
        <p className="text-neutral-500 text-[10px] font-bold">C</p>
        <p className="text-neutral-500 text-[10px] font-bold">R</p>
        <p className="text-neutral-500 text-[10px] font-bold">O</p>
        <p className="text-neutral-500 text-[10px] font-bold">L</p>
        <p className="text-neutral-500 text-[10px] font-bold">L</p>
        {isBottom ? (
          <FaArrowUpLong className="absolute text-[var(--primary-color)] right-[-12px] bottom-[3px] text-[8px]" {...({} as any)}/>
        ) : (
          <FaArrowDownLong className="absolute text-[var(--primary-color)] right-[-12px] bottom-[3px] text-[8px]" {...({} as any)}/>
        )}
      </div> */}
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-auto"></div>
    </div>
  );
};


export default HeroSection;