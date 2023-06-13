import { Main } from "@/layouts/globals/Main";
import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AppConfig } from "@/utils/AppConfig";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";

import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";

import useMedia from "./useMedia";
import data from "./data";
import styles from "./styles.module.css";

interface indexProps {
  title: string;
  canonical: string;
}

const index: NextPage<indexProps> = () => {
  function Masonry() {
    const columns = useMedia(
      ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
      [5, 4, 3],
      2
    );
    const [ref, { width }] = useMeasure();
    const [items, set] = useState(data);
    useEffect(() => {
      const t = setInterval(() => set(shuffle), 2000);
      return () => clearInterval(t);
    }, []);
    const [heights, gridItems] = useMemo(() => {
      let heights = new Array(columns).fill(0);
      let gridItems = items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const y = (heights[column] += child.height / 2) - child.height / 2;
        return {
          ...child,
          x,
          y,
          width: width / columns,
          height: child.height / 2,
        };
      });
      return [heights, gridItems];
    }, [columns, items, width]);
    const transitions = useTransition(gridItems, {
      key: (item: { css: string; height: number }) => item.css,
      from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
      enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
      update: ({ x, y, width, height }) => ({ x, y, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25,
    });
    return (
      <div
        ref={ref}
        className={styles.list}
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <a.div style={style}>
            <div
              style={{
                backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
              }}
            />
          </a.div>
        ))}
      </div>
    );
  }

  return (
    <Main
      title={`${AppConfig.title} | Beranda`}
      canonical={`${AppConfig.url}/` + "index"}
    >
      <Hero />
      <Parallax pages={2} scrolling={true}>
        <ParallaxLayer offset={0} speed={0.5}>
          <AboutUs />
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
          <h1 className="text-4xl font-bold text-center mx-2">Gallery</h1>
          <Masonry />
        </ParallaxLayer>
      </Parallax>
    </Main>
  );
};

export default index;
