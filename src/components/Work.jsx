import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

function Work() {
  const [elem, setElems] = useState([
    {
      heading: "Ottografie",
      subheading: "Seamless Photographic Journey",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee",
    },
    {
      heading: "Amaterasu",
      subheading: "Frontier Health Innovation",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
    },
    {
      heading: "100 Years Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
    },
    {
      heading: "Cambium",
      subheading: "Pioneering Sustainable Solutions",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
    },
    {
      heading: "Studio D",
      subheading: "Urban and Landscape Design",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
    },
    {
      heading: "Plugged Live Shows",
      subheading: "Custom Made Live Shows",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/fab67b71d9/plugged-live-shows-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798407/rendition/720p/file.mp4?loc=external&log_user=0&signature=32335e3d0a92b10aabab4520ab9f5fab454f9d8831be9ee6266ab28b1d73f234",
    },
    {
      heading: "Ali Ali",
      subheading: "Unique director’s portfolio",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/13b1c95334/ali-ali-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914797776/rendition/720p/file.mp4?loc=external&log_user=0&signature=96d474ed1310b9713eb067349574feca4ed2030ebfec960b23264365205f2a5a",
    },
    {
      heading: "The St. Regis Venice",
      subheading: "Elegant one-page solution",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/e4828e1c81/st-regis-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798546/rendition/720p/file.mp4?loc=external&log_user=0&signature=2336f97c1264f1138b66f4a15c371b90c21a7628bb8f884955c8cc63828698d7",
    },
    {
      heading: "Rino &amp; Pelle",
      subheading: "Effortless chic lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto h-full px-5 pt-20 sm:px-20 py-10">
        <h1 className="text-6xl sm:text-9xl sm:leading-none sm:tracking-tight overflow-hidden px-5 mb-7">
          <motion.span
            className="inline-block origin-left"
            initial={{ rotate: 10, y: "20%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
          >
            Work
          </motion.span>
        </h1>

        <div className="w-full flex flex-col items-start gap-10">

          <div className="sm:w-full sm:h-[100vh] sm:flex sm:items-start sm:gap-40 sm:px-10">
            <div className="hidden sm:block w-[40%] h-full flex items-start justify-between gap-2">
              <div className="video hidden aspect-video sm:block w-full h-[85%] relative overflow-hidden">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="hidden sm:absolute sm:z-[2] sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] w-full h-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                  src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
                />
              </div>
              <div className="mt-2">
                <h3 className="semibold">100 Years Columbia Pictures</h3>
                <h3 className="opacity-70">Celebrating a Century of Cinema</h3>
              </div>
            </div>

            <div className="featured flex flex-col w-full sm:w-[35%] h-full items-start gap-5 px-5 overflow-hidden">
              <h3 className="capitalize">
                <i className="ri-gemini-fill text-md mr-3" /> Featured
              </h3>
              <p className="leading-5 sm:w-full pb-5 text-lg">
                Highlights of cases that we passionately built with
                forward-thinking clients and friends over the years.
              </p>
              <div className="video hidden aspect-video sm:block w-full h-[70vh] relative overflow-hidden">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="hidden sm:absolute sm:z-[2] sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] w-full h-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                  src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
                />
              </div>
              <div className="hidden sm:block mt-2">
                <h3 className="semibold">Rino &amp; Pelle</h3>
                <h3 className="opacity-70">Effortless chic lifestyle</h3>
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-full h-[100vh] sm:flex items-start gap-50 px-10 py-5">

            <div className="w-[20%] h-full flex flex-col items-start justify-end gap-2">
              <div className="video aspect-video w-full h-[50%] relative overflow-hidden">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="hidden sm:absolute sm:z-[2] sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/2400x2990/filters:quality(80)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] w-full h-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                  src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
                />
              </div>
              <div className="mt-2">
                <h3 className="semibold">Aebele Interiors</h3>
                <h3 className="opacity-70">Luxurious design experience</h3>
              </div>
            </div>

            <div className="w-[40%] h-full flex flex-col items-start gap-2">
              <div className="aspect-video w-full h-full relative overflow-hidden">
                <div className="video aspect-video w-full h-[90%] relative overflow-hidden">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    className="hidden sm:absolute sm:z-[2] sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)"
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1] w-full h-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
                  />
                </div>
                <div className="hidden sm:block mt-2">
                  <h3 className="semibold">Pixelflakes</h3>
                  <h3 className="opacity-70">Architectural marketing agency</h3>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="elems sm:hidden mt-5 mb-15">
          {elem.map((item, i) => (
            <div key={i} className="elem w-full px-2 mt-10">
              <div className="video w-full h-[105vw] relative overflow-hidden">
                <motion.img
                  data-scroll
                  data-scroll-speed="-.4"
                  className="hidden sm:absolute sm:z-[2] sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={item.video}
                />
              </div>
              <div className="mt-2 px-2">
                <h3 className="semibold">{item.heading}</h3>
                <h3 className="opacity-70">{item.subheading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
