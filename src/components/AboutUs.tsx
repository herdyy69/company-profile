import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  const urlImage = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];
  const gallery = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=884&q=80",
    "https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const [open, toggle] = useState(false);
  const [ref, { width, height }] = useMeasure();
  const props = useSpring({
    width: open ? width : 0,
    height: open ? height : 0,
  });

  return (
    <Parallax
      style={{
        backgroundImage: `url(${urlImage[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //   filter: "blur(5px)",
      }}
      pages={2}
      scrolling={true}
    >
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          backgroundImage: `url(${urlImage[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   filter: "blur(5px)",
        }}
        className="flex items-center justify-center"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
          }}
          className="flex flex-col items-center justify-center"
        >
          <h1
            style={{
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <Typewriter
              options={{
                strings: ["About Us", "Tentang Kami"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          backgroundImage: `url(${urlImage[1]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   filter: "blur(5px)",
        }}
        className="flex items-center justify-center"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: 1,
          }}
          className="flex flex-row items-center justify-center p-5"
        >
          <div className="w-[80%]">
            <p
              style={{
                color: "white",
                fontSize: "1.3rem",
                fontWeight: "bold",
                lineHeight: "2.3rem",
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
              className="font-mulish"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quodquos
              voluptatem quas doloribus quidem voluptatibus. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas doloribus quidem voluptatibus
            </p>
          </div>

          <Parallax pages={gallery.length} scrolling={true}>
            {gallery.map((item, index) =>
              index === 5 ? (
                <ParallaxLayer
                  offset={index}
                  speed={0.5}
                  className="flex items-center justify-center border-2 border-white"
                />
              ) : (
                <ParallaxLayer
                  offset={index}
                  speed={0.5}
                  style={{
                    backgroundImage: `url(${item})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    //   filter: "blur(3px)",
                  }}
                  className="flex items-center justify-center"
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                      width: "100%",
                      height: "100vh",
                      position: "absolute",
                      zIndex: 1,
                    }}
                    className="flex flex-row items-center justify-center p-5"
                  >
                    {index === 0 && (
                      <h1
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          fontWeight: "bold",
                          textShadow: "0 0 10px rgba(0,0,0,0.5)",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                    )}
                    {index >= 1 && index <= 4 && (
                      <h1
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          fontWeight: "bold",
                          textShadow: "0 0 10px rgba(0,0,0,0.5)",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                    )}
                  </div>
                </ParallaxLayer>
              )
            )}
          </Parallax>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default AboutUs;
