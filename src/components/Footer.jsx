import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

function Footer() {
  return (
    <div className="w-full h-[65vh] sm:h-[110vh] px-10 sm:px-20 py-15 bg-[#070707] text-white relative">
      <div className="w-[58%] sm:w-[65%] aspect-video absolute top-10 sm:top-0 right-0 sm:right-20">
        <video
          autoPlay
          muted
          loop
          className="object-cover object-center"
          src="https://www.exoape.com/video/video-6.mp4"
        />
      </div>
      <div className="w-full h-full text-[#e0ccbb]">
        <div className=" mb-5">
        {["Our", "Story"].map((items, index) => (
          <h1 key={index} className="text-6xl sm:text-9xl py-3 overflow-hidden -mt-5 sm:-mt-10">
            <motion.span
              initial={{ rotate: 5, y: "90%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: Power4.easeInOut,
                duration: 1.4,
                delay: index * 0.1,
              }}
              className="inline-block origin-left"
            >
              {items}
            </motion.span>
          </h1>
        ))}
        </div>
        <p className="sm:w-[30%] text-[4.8vw] sm:text-xl mt-10 font-medium">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <a
          className="inline-block text-sm sm:text-lg py-2 border-b-[2px] sm:border-b-[2px] mt-10 sm:mt-5"
          href="#"
        >
          Our Story
        </a>
        <hr className="mt-10" />
        <div className="w-full flex items-center justify-between gap-10 mt-10">
          <div className="w-[30%] text-sm font-semibold flex flex-col justify-between gap-3 sm:gap-2">
            <a href="#">XYZ street UK</a>
            <a href="#">502***,Luke</a>
            <a href="#">South Africa</a>
            <a href="#">abc@exoape.com</a>
          </div>
          <div className="w-[30%] text-sm font-semibold flex flex-col justify-between gap-3 sm:gap-2">
            <a href="#">Work</a>
            <a href="#">Studio</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
          <div className="w-[30%] text-sm font-semibold flex flex-col justify-between gap-3 sm:gap-2">
            <a href="#">Behance</a>
            <a href="#">Dribble</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
