import gsap, { ScrollTrigger, Power4 } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {

  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger : {
        trigger: parent.current,
        start : "0 90",
        scrub : .5,
      }
    })
    tl.to(first.current,{
      x : '70%',
      ease : Power4,
    },'a')
    tl.to(second.current,{
      x : '-40%',
      ease : Power4,
    },'a')
    tl.to(third.current,{
      x : '-40%',
      ease : Power4,
    },'a')
    tl.to(fourth.current,{
      x : '100%',
      ease : Power4,
    },'a')
  })

  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] h-1/2 sm:h-[70%] relative">
        <div ref={first}  className="absolute w-20 sm:w-30 h-[7rem] sm:h-[10rem] -right-1/3 top-6 sm:-right-[35%] top-6">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[8rem] sm:w-[17rem] aspect-video -left-1/2 top-1/3 sm:-left-[82%] sm:top-15 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          />
        </div>
        <div ref={third}  className="absolute w-[6rem] sm:w-[17rem] aspect-video -left-[50%] -bottom-5 sm:-left-[90%] sm:-bottom-2">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={fourth}  className="absolute w-[7rem] sm:w-[10rem] aspect-video-[1.6/1] -right-[55%] -bottom-[28%] sm:-right-[50%] sm:-bottom-[20%]">
          <video
            className="h-full w-full"
            autoPlay
            loop
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
          />
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
