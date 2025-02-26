"use client";

import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../context";
import { CustomEase } from "gsap/dist/CustomEase";
import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../../../public/images/hero/heroimg1.jpg";
import { SplitText } from "@splittext/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";
import Hero from "./Hero";
import FollowCursor from "../follow-cursor/follow-cursor";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

export default function AlternateHero2() {
  // const [isMobileSize, setIsMobileSize] = useState(false);
  // let template;
  // let thevideoimagetoshow;
  const [isMounted, setIsMounted] = useState(false);

  const { isPreloading, setIsPreloading } = useAppContext();
  const [thevideoimage, setThevideoimage] = useState(1);
  const { setScrolledPastHero } = useAppContext();
  const pathname = usePathname();
  const tl1 = useRef > null;
  const tl2 = useRef(null);

  const backgroundref = useRef(null);
  const imageref = useRef(null);
  const headlineref = useRef(null);
  const subheadref = useRef(null);
  const bodytxtref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".thewhitebglayer", {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    gsap.set(".txt1", { y: +100 });
    gsap.set(".txt2", { y: +100 });
    // if (tl2.current) {
    //   tl2.current = gsap
    //     .timeline()
    //     .fromTo(
    //       ".text-container",
    //       {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //       },
    //       {
    //         duration: 1.25,
    //         delay: 3,
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //         ease: "Expo.easeInOut",
    //       }
    //     )
    //     .to(".txt1", {
    //       y: 0,
    //       duration: 1,
    //       delay: -1,
    //       ease: "Expo.easeInOut",
    //     })
    //     .fromTo(
    //       ".text-container2",
    //       {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //       },
    //       {
    //         duration: 1,
    //         delay: -0.9,
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //         ease: "Expo.easeInOut",
    //       }
    //     )
    //     .to(".txt2", {
    //       y: 0,
    //       duration: 1,
    //       delay: -1,
    //       ease: "Expo.easeInOut",
    //     });
    // }
    // if (tl1.current) {
    //   tl1.current = gsap.timeline().to(".thewhitebglayer", {
    //     scaleY: 1,
    //     duration: 1.25,
    //     delay: 4,
    //     ease: "Expo.easeInOut",
    //   });
    //   tl1.current
    //     .fromTo(
    //       backgroundref.current,
    //       {
    //         clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    //       },
    //       {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //         duration: 1,
    //         delay: -1,
    //         ease: "Quint.easeInOut",
    //       }
    //     )
    //     .from(imageref.current, {
    //       y: "50vh",
    //       duration: 1,
    //       delay: -1,
    //       ease: "Quint.easeInOut",
    //     });
    // }

    if (tl2.current) {
      tl2.current = gsap
        .timeline()
        .fromTo(
          ".text-container",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            duration: 1.25,
            delay: 3,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "Expo.easeInOut",
          }
        )
        .to(".txt1", {
          y: 0,
          duration: 1,
          delay: -1,
          ease: "Expo.easeInOut",
        });
    }
  });

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "700vh"]);

  return (
    <>
      {/* prettier-ignore */}
      <section className={`theherocontainer h-screen overflow-y-hidden bg-[#e5f2f9] scrollbar-hide`}>
        <div className="flex xs:flex-col lg:flex-row max-w-[1440px] h-full ml-auto mr-auto">
          <div className={`xs:px-4 lg:px-12 lexend text-black flex flex-col h-screen -mt-[5vh] items-center justify-center`}>
            <div className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black">
              <motion.p
              style={{ y }}
                initial={{ opacity: 0, y: "200px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{
                  type: "tween",
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 3,
                  duration: 0.6,
                }}
                className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black"
              >
                Switch Between Carriers&nbsp;Instantly
              </motion.p>
            </div>
            <div className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black">
              <motion.p
              style={{ y }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 3.3,
                  duration: 0.6,
                }}
                className="txt2 spacegrotesklight text-[clamp(1.25rem,3vw+.2rem,2.5rem)] mt-6 xs:pb-[12vh] lg:pb-[10vh] xs:w-[100%] lg:w-[80%] text-black"
              >
                Seamlessly move between networks with ease, ensuring you’re
                always connected no matter where you are.
              </motion.p>
            </div>
            <div className="flex flex-row xs:mt-[4vh] lg:mt-[2vh] w-[100%]">
                <motion.div
                initial={{ opacity: 0, y: "200px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{
                  type: "tween",
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 3,
                  duration: 0.6,
                }}
                className="relative xs:w-[60px] xs:h-[60px] lg:w-[100px] lg:h-[100px] mr-6 rounded-lg bg-[#f2dcb3]"
                drag  dragConstraints={{
                  right: 260,
                  left: 10,
              }}
              >
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "200px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{
                  type: "tween",
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 3.1,
                  duration: 0.6,
                }}
                className="relative xs:w-[60px] xs:h-[60px] lg:w-[100px] lg:h-[100px] mr-6 rounded-lg bg-[#1a3073]"
                drag dragConstraints={{
                  right: 140,
                  left: -80,
              }}
              >
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "200px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{
                  type: "tween",
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 3.2,
                  duration: 0.6,
                }}
                className="relative xs:w-[60px] xs:h-[60px] lg:w-[100px] lg:h-[100px] mr-4 mt-[0px] rounded-lg bg-[#d9042b]"
                drag dragConstraints={{
                  right: 70,
                  left: -150,
              }}
              >
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
