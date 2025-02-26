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

  var content = [
    {
      title: "Switch Between Carriers&nbsp;Instantly",
      desc: "Welcome to my alphabet soup demo!",
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "dolor sit amet",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Grouping example",
      desc: "hoouute jperawfva oinanob na irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const titletext = "Switch Between Carriers Instantly";

  return (
    <>
      {/* prettier-ignore */}
      <section
        className={`theherocontainer h-screen overflow-hidden max-w-[1440px]`}
      >
        <div className="flex flex-col max-w-[1440px] h-full xs:pl-4 xs:pr-4 lg:px-12">
          <div className={`xs:pt-[5vh] lg:pt-[calc(0vh+100px)] lg:mb-[calc(10vh)] lexend text-black `}>


            <div className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black">
              <motion.p initial={{ opacity:0, y:100 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ type:'tween', ease: [0, 0.71, 0.2, 1.01], delay: 3, duration: 0.3 }}
                        className="txt1 text-[clamp(2.25rem,5vw+.5rem,5rem)] leading-tight text-black">
                Switch Between Carriers&nbsp;Instantly
              </motion.p>
            </div>
              <motion.p initial={{ opacity:0, y:180}}
                        animate={{ opacity:1, y:80}}
                        transition={{ type:'tween', ease: [0, 0.71, 0.2, 1.01], delay: 3.1, duration: 0.3 }}
                         className="txt2 spacegrotesklight text-[clamp(1.25rem,3vw+.2rem,2.5rem)] mt-6 xs:pb-[12vh] lg:pb-[10vh] xs:w-[100%] lg:w-[80%] text-black">
                Seamlessly move between networks with ease, ensuring you’re
                always connected no matter where you are.
              </motion.p>
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
