import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Hero = () => {
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState("Selamat Datang di PT Lorem Ipsum");
  const onTitleChange = (e) => setTitle(e.target.value);

  const [desc, setDesc] = useState();
  const onDescChange = (e) => setDesc(e.target.value);

  const toLocalStorage = () => {
    localStorage.setItem("title", title);
    localStorage.setItem("desc", desc);
  };
  useEffect(() => {
    if (localStorage.getItem("title")) {
      setTitle(localStorage.getItem("title"));
    }
    if (localStorage.getItem("desc")) {
      setDesc(localStorage.getItem("desc"));
    }
  }, []);

  const bgSlide = [
    {
      id: 1,
      url: "/next.svg",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const imageRef = useRef(null);

  const handleAnimationStart = () => {
    setIsAnimationStarted(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimationFinished(true);
    const { offsetWidth, offsetHeight } = imageRef.current;
  };

  const animationPreloader = () => {
    return (
      <AnimatePresence>
        <motion.div
          style={{
            zIndex: isAnimationFinished ? -1 : 1,
            display: isAnimationFinished ? "none" : "flex",
          }}
          className="fixed inset-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 1, scale: 1.5, x: "0" }}
          animate={{ opacity: 1, scale: 0.8, x: "28.3%", y: "5%" }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          <Image ref={imageRef} src="/next.svg" width={400} height={400} />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="w-full h-[87vh] bg-gray-100 shadow-md mt-1 z-20">
      <div className="flex flex-row justify-around items-center h-full">
        <div className="flex flex-col w-2/4">
          {edit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setEdit(false);
                    toLocalStorage();
                  }
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full h-[60px] bg-transparent border-none text-4xl font-bold rounded-md px-5"
              />
            </form>
          ) : (
            <h1 onClick={() => setEdit(true)} className="text-4xl font-bold">
              {title}
            </h1>
          )}

          {edit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setEdit(false);
                    toLocalStorage();
                  }
                }}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full h-[120px] bg-transparent border-none text-lg rounded-md px-5"
              />
            </form>
          ) : (
            <p onClick={() => setEdit(true)} className="text-lg mt-5">
              {desc}
            </p>
          )}
        </div>

        <div className="w-[500px] h-[500px] rounded-md flex items-center justify-center">
          {animationPreloader()}

          <Parallax
            pages={3}
            style={{
              width: "500px",
              height: "500px",
            }}
            className="hideScrollBar"
          >
            <ParallaxLayer
              offset={0}
              speed={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isAnimationFinished && (
                <Image
                  src={bgSlide[0].url}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                  className=""
                  style={{ transform: "scale(0.8)" }}
                />
              )}
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={bgSlide[1].url}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-md"
              />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={bgSlide[2].url}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-md"
              />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
