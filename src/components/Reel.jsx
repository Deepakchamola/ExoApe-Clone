import React, { useEffect, useRef } from "react";
import gsap, { ScrollTrigger, Power4 } from "gsap/all";

function Reel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(videodiv.current, {
      width: "50%",
      height: "30%",
      ease: Power4,
    });
    tl.to(
      play.current,
      {
        x: "-150%",
        scale: 1.2,
        ease: Power4,
      },
      "a"
    );
    tl.to(
      reel.current,
      {
        x: "150%",
        scale: 1.2,
        ease: Power4,
      },
      "a"
    );
  });

  return (
    <div
      ref={parent}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      <div className="overlay w-full h-full text-white flex flex-col items-center justify-between py-20 px-10 sm:py-10">
        <div
          ref={videodiv}
          className="video aspect-video overflow-hiddden w-60 sm:w-10 aspect-video absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <video
            autoPlay
            loop
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
          />
        </div>

        <div className="w-full flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h3 className="flex items-center justify-center sm:gap-96 gap-32">
          <div ref={play} className="text-5xl sm:text-8xl font-light">
            Play
          </div>
          <div ref={reel} className="text-5xl sm:text-8xl font-light">
            Reel
          </div>
        </h3>
        <p className="text-center text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default Reel;
