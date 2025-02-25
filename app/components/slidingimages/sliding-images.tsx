'use client'
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SlidingImages() {
  const slider1 = [
    {
      color: "black",
      src: "img1.png",
    },
    {
      color: "black",
      src: "img2.png",
    },
  ];

  const slider2 = [
    {
      color: "black",
      src: "img3.png",
    },
    {
      color: "black",
      src: "img4.png",
    },
  ];

  const slider3 = [
    {
      color: "black",
      src: "img2.png",
    },
    {
      color: "black",
      src: "img1.png",
    },
  ];

  const slider4 = [
    {
      color: "black",
      src: "img4.png",
    },
    {
      color: "black",
      src: "img3.png",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [-20, 170]);
  const x2 = useTransform(scrollYProgress, [0, 1], [130, -40]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-20, 170]);
  const x4 = useTransform(scrollYProgress, [0, 1], [130, -40]);

  return (
    <>
      <div
        ref={container}
        className={`${styles.slidingimages} max-w-[1440px] flex flex-col xs:w-screen md:w-[80vw] my-[200px] overflow-hidden`}
      >
        <motion.div
          style={{ x: x1 }}
          className={`${styles.slider} relative flex xs:w-[80vw] md:w-[80vw] max-w-[1340px] l-[0vw] bg-green-400`}
        >
          {slider1.map((brand, index) => {
            return (
              <div key={`sl1_${index}`} className={styles.brand}>
                <div className={`${styles.imagecontainer}`}>
                  <Image
                    className={`${styles.theimage}`}
                    fill={true}
                    src={`/images/recommended/${brand.src}`}
                    alt={"image"}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className={`${styles.slider} relative flex xs:w-screen md:w-[80vw] max-w-[1340px] l-[0vw] bg-green-400`}
        >
          {slider2.map((brand, index) => {
            return (
              <div key={`sl1_${index}`} className={styles.brand}>
                <div className={`${styles.imagecontainer}`}>
                  <Image
                    className={`${styles.theimage}`}
                    fill={true}
                    src={`/images/recommended/${brand.src}`}
                    alt={"image"}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x3 }}
          className={`${styles.slider} relative flex xs:w-screen md:w-[80vw] max-w-[1340px] l-[0vw] bg-green-400`}
        >
          {slider3.map((brand, index) => {
            return (
              <div key={`sl1_${index}`} className={styles.brand}>
                <div className={`${styles.imagecontainer}`}>
                  <Image
                    className={`${styles.theimage}`}
                    fill={true}
                    src={`/images/recommended/${brand.src}`}
                    alt={"image"}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x4 }}
          className={`${styles.slider} relative flex xs:w-screen md:w-[80vw] max-w-[1340px] l-[0vw] bg-green-400`}
        >
          {slider4.map((brand, index) => {
            return (
              <div key={`sl1_${index}`} className={styles.brand}>
                <div className={`${styles.imagecontainer}`}>
                  <Image
                    className={`${styles.theimage}`}
                    fill={true}
                    src={`/images/recommended/${brand.src}`}
                    alt={"image"}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* <motion.div style={{ x: x2 }} className={`${styles.slider}`}>
          {slider2.map((brand, index) => {
            return (
              <div key={`sl1_${index}`} className={styles.brand}>
                <div className={`${styles.imagecontainer}`}>
                  <Image
                    className={`${styles.theimage}`}
                    fill={true}
                    src={`/images/recommended/${brand.src}`}
                    alt={"image"}
                  />
                </div>
              </div>
            );
          })}
        </motion.div> */}
      </div>
    </>
  );
}
