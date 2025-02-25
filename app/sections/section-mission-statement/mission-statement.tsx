"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";
// import { useAppContext } from "../../../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = { className?: string };

export default function MissionstatementSection({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    gsap.set("#mission-title", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#mission-body", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#mission-body2", {
      opacity: 0,
      y: "20px",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#mission-title",
        pin: false,
        start: "top 70%",
      },
    });

    tl1.current
      .to("#mission-title", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      })

      .to("#mission-body", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: -0.3,
        ease: "Expo.easeInOut",
      })
      .to("#mission-body2", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: -0.3,
        ease: "Expo.easeInOut",
      });
  });

  return (
    <section
      className={clsx(
        "section-mission-statement mt-[150px] max-w-[1440px]",
        className
      )}
      id="missionstatement"
    >
      <div className="w-screen h-[max-content]">
        <div className="flex flex-col max-w-[1440px] xs:pl-4 xs:pr-8 lg:px-12">
          <p
            id="mission-title"
            className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:leading-tight xl:leading-normal text-black"
          >
            No Compromises
          </p>
          <p
            id="mission-body"
            className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:mt-6 leading-tight text-black"
          >
            What if you had a wireless plan straight out of your wildest dreams
            one that never slowed down, never ran out, and always kept you in
            the VIP lane?
          </p>
          <p
            id="mission-body2"
            className="sectionbigbodytxt2 xs:text-[18px] md:text-[20px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:mt-6 leading-tight text-black"
          >
            Strap in for our most revolutionary release yet! You&#39;ll witness
            our team racing to the finish line still in jackets, fueled by
            coffee, and determined to redefine the word &ldquo;unlimited.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
