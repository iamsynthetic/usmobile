"use client";
import { useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CountUp from "react-countup";
import { useAppContext } from "../../context";
import { motion } from "framer-motion";
import { slideUp } from "./anim";
import { transition } from "./anim";

export default function Preloader() {
  const { setIsPreloading } = useAppContext();
  const tl1 = useRef<GSAPTimeline | null>(null);

  // useGSAP(() => {
  //   tl1.current = gsap
  //     .timeline()
  //     .to(".loadingtext", {
  //       opacity: 0,
  //       duration: 0.25,
  //       delay: 2.5,
  //       ease: "quint.easeOut",
  //     })
  //     .to(".bar", {
  //       height: 0,
  //       duration: 0.25,
  //       delay: 0,
  //       stagger: {
  //         amount: 0.5,
  //       },
  //       ease: "quint.easeOut",
  //       onComplete: finishedbars,
  //     });
  // });

  // function finishedbars() {
  //   console.log("finishedbars");
  //   setIsPreloading(false);
  // }

  return (
    <>
      {/* prettier-ignore */}
      <motion.div variants={slideUp} transition={transition} initial="initial" exit="exit" className={`${styles.preloadertitle} lexend text-black loadingtext`}>
        LOADING&nbsp;<CountUp end={100} duration={2} />
      </motion.div>
      {/* <div className={`${styles.overlay}`}>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
      </div> */}
    </>
  );
}
