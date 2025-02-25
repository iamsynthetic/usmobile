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

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

export default function AlternateHero2() {
  // const [isMobileSize, setIsMobileSize] = useState(false);
  // let template;
  // let thevideoimagetoshow;

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
    gsap.set(".thewhitebglayer", {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    gsap.set(".txt1", { y: +100 });
    gsap.set(".txt2", { y: +100 });
    if (tl2.current) {
      tl2.current = gsap
        .timeline({ paused: true })
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
        })
        .fromTo(
          ".text-container2",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            duration: 1,
            delay: -0.9,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "Expo.easeInOut",
          }
        )
        .to(".txt2", {
          y: 0,
          duration: 1,
          delay: -1,
          ease: "Expo.easeInOut",
        });
    }
    if (tl1.current) {
      tl1.current = gsap.timeline().to(".thewhitebglayer", {
        scaleY: 1,
        duration: 1.25,
        delay: 4,
        ease: "Expo.easeInOut",
      });
      tl1.current
        .fromTo(
          backgroundref.current,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            delay: -1,
            ease: "Quint.easeInOut",
          }
        )
        .from(imageref.current, {
          y: "50vh",
          duration: 1,
          delay: -1,
          ease: "Quint.easeInOut",
        });
    }
  });

  useEffect(() => {
    if (isPreloading) {
      tl2.current?.play();
    }
  }, [isPreloading]);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "600vh"]);

  return (
    <>
      {/* prettier-ignore */}
      {/* <section className={`${styles.bgcolor} theherocontainer flex flex-col w-screen xs:h-[50vh] md:h-[70vh] lg:h-[60vh] overflow-hidden bg-white`}> */}
      <section
        className={`theherocontainer h-screen overflow-hidden max-w-[1440px]`}
      >
        <div className="flex flex-col max-w-[1440px] xs:pl-4 xs:pr-4 lg:px-12">
          <div
            className={`xs:pt-[calc(6vh+100px)] xs:pb-[calc(6vh)] lg:pt-[calc(10vh+100px)] lg:mb-[calc(10vh)] lexend text-black `}
          >
            <div className="text-container bg-white">
              <p className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black">
                Switch Between Carriers&nbsp;Instantly
              </p>
            </div>
            <div className="text-container2 bg-white">
              <p className="txt2 spacegrotesklight text-[clamp(1.25rem,3vw+.2rem,2.5rem)] mt-6 xs:w-[100%] lg:w-[80%] text-black">
                Seamlessly move between networks with ease, ensuring you’re
                always connected no matter where you are.
              </p>
            </div>
          </div>
          <motion.div
            style={{ y }}
            className="relative bottom-0 h-[50vh] w-full"
          >
            <Image
              src={Background}
              fill
              alt="image of mobile technology top down view"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
