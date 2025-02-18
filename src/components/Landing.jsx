import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";
import bg from "/src/assets/bg.webp";

function Landing() {
  return (
    <div className="relative w-full h-[120vh] sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover object-top"
          src={bg}
          alt=""
        />
      </div>

      <div className="w-full absolute top-0">
        <div className="text-white max-w-screen-2xl mx-auto h-full px-8 pt-30 sm:px-30">
          <div className="para mt-72">
            {[
              "Global digital design studio partnering with",
              "brand and businesses that create exceptional",
              "experiences where people live, work and unwind",
            ].map((items, index) => (
              <p
                key={index}
                className="text-lg masker sm:text-2xl sm:semibold overflow-hidden"
              >
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
              </p>
            ))}
          </div>
          <div className="headings mt-10">
            {["Digital", "Design", "Experience"].map((txt, index) => (
              <h1
                key={index}
                className="text-6xl font-semibold sm:text-[14vw] tracking-tighter leading-none overflow-hidden py-3 sm:-mt-10 -mt-5"
              >
                <motion.span
                  initial={{ rotate: 0, y: "70%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.4,
                    delay: index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {txt}
                </motion.span>
              </h1>
            ))}
          </div>
          <div className="para2 mt-10 sm:mt-20 sm:w-1/3">
            <p className="text-white text-x sm:text-xl font-semibold">
              <span>
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </span>
            </p>
            <a
              className="sm:text-xl border-b-[1px] border-zinc-200/50 inline-block mt-10"
              href="#"
            >
              Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
