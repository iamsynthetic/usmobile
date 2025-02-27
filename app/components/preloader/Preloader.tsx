"use client";
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { slideUp } from "./anim";
import { transition } from "./anim";

export default function Preloader() {

  return (
    <>
      {/* prettier-ignore */}
      <motion.div variants={slideUp} transition={transition} initial="initial" exit="exit" className={`${styles.preloadertitle} lexend text-black loadingtext`}>
        LOADING&nbsp;<CountUp end={100} duration={2} />
      </motion.div>
    </>
  );
}
