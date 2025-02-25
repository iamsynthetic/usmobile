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

interface Props {
  title: string;
  tags?: boolean;
}

export default function AlternateHero2() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  let template;
  let thevideoimagetoshow;

  const { isPreloading, setIsPreloading } = useAppContext();
  const [thevideoimage, setThevideoimage] = useState(1);

  const customBounceEase = new CustomEase(
    "customBounce",
    "0, 0, 0.5, 1, 0.9, 1.1, 1, 1"
  );
  const hop = CustomEase.create(
    "ease",
    "M0,0 C0.29,0 0.348, 0.05 0.422, 0.134 0.494, 0.217 0.484, 0.355, 0.5, 0.5 0.518, 0.622 0.515, 0.793 0.596, 0.876 0.701, 0.983 0.72, 0.987 1, 1"
  );

  const { setScrolledPastHero } = useAppContext();
  const pathname = usePathname();
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const splittitle = useRef<HTMLDivElement>(null);

  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";

  function shuffle(array: any[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function animateTitle(classname: string, newclassname: string) {
    gsap.set(classname, {
      opacity: 1,
    });
    let splittitle2 = document.querySelector(classname);
    let letters = splittitle2?.textContent!.split("");

    let myarray: Array<string> = [];

    if (splittitle2) {
      splittitle2!.textContent = "";
    }
    letters?.forEach((letter, index) => {
      splittitle2!.innerHTML += `<span class=${newclassname + index}>${letter}</span>`;
      myarray.push(`${newclassname + index}`);
      gsap.set(`${newclassname + index}`, {
        opacity: 0,
      });
    });

    if (letters != null && letters != undefined) {
      let random = gsap.utils.random(0, myarray.length - 1, 1);

      //check array first
      console.log("myarray is: " + myarray);

      //push array into shuffle
      shuffle(myarray);

      //animates all items but at the same time
      myarray.forEach((item, index) => {
        gsap.fromTo(
          `${"." + item}`,
          { opacity: 0 },
          { opacity: 1, delay: index * 0.02 }
        );
      });
    }
  }

  function navbuttonhover(element: string, label: string, arrow: string) {
    gsap.to(element, {
      backgroundColor: menuhovercolor,
      // scaleX: 1.1,
      // scaleY: 1.1,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(label, {
      color: menucolor,
      // x: +4,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    gsap.to(arrow, {
      color: menucolor,
      // x: -2,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonleave(element: string, label: string, arrow: string) {
    gsap.to(element, {
      backgroundColor: menucolor,
      // scaleX: 1,
      // scaleY: 1,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(label, {
      color: buttoncolor,
      // x: 0,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(arrow, {
      color: buttoncolor,
      // x: 0,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeOut",
    });
  }

  function animateAllTitles() {
    animateTitle(".thetitle", "title1");
    // animateTitle(".contact-title2", "contact2");
  }

  const backgroundref = useRef<HTMLDivElement>(null);
  const imageref = useRef<HTMLImageElement>(null);
  const headlineref = useRef<HTMLDivElement>(null);
  const subheadref = useRef<HTMLDivElement>(null);
  const bodytxtref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(".thewhitebglayer", {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    gsap.set(".txt1", { y: +100 });
    gsap.set(".txt2", { y: +100 });
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
            ref={splittitle}
            className={`xs:pt-[calc(6vh+100px)] xs:mb-[calc(6vh)] lg:pt-[calc(10vh+100px)] lg:mb-[calc(10vh)] lexend text-black `}
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
