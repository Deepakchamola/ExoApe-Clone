import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

function Spread() {
  return (
    <div className="w-full bg-white py-10 mb-10">
      <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:py-10 sm:px-10">
        <div className="flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-xl sm:text-2xl">In the media</h1>
        </div>
        <div className="mt-15 text-center sm:mt-10">
          { [ 'Spread', 'the News' ].map((items, index) =>(
            <h1 key={index} className="text-6xl sm:text-9xl overflow-hidden">
            <motion.span
              initial={{ rotate: 0, y: "70%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: Power4.easeInOut,
                duration: 1.2,
                delay: index*.1
              }}
              className="inline-block origin-left"
            >
              {items}
            </motion.span>
          </h1>
          )) }
          <p className="w-2/3 sm:w-1/3 mx-auto text-lg sm:text-xl opacity-90 mt-5">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a className="inline-block text-lg mt-7 sm:mt-5 border-b-[1px]">
            Browse all media
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
