"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
// import { useAppContext } from "../../../context";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = { className?: string };

export default function AboutStoryMobileSection({ className }: Props) {
  const size = useWindowSize();
  const [isMobileSize, setIsMobileSize] = useState(false);

  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    gsap.set("#aboutstory-title", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#aboutstory-body1", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#aboutstory-body2", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#aboutstory-body3", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#aboutstory-image", {
      opacity: 0,
      y: "20px",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutstory-title",
        pin: false,
        // markers: true,
        start: "top 50%",
      },
    });

    tl1.current.to("#aboutstory-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutstory-image",
        pin: false,
        // markers: true,
        start: "top 50%",
      },
    });

    tl1.current.to("#aboutstory-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutstory-body1",
        pin: false,
        // markers: true,
        start: "top 70%",
      },
    });

    tl1.current.to("#aboutstory-body1", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutstory-body2",
        pin: false,
        // markers: true,
        start: "top 70%",
      },
    });

    tl1.current.to("#aboutstory-body2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutstory-body3",
        pin: false,
        // markers: true,
        start: "top 70%",
      },
    });

    tl1.current.to("#aboutstory-body3", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  });

  return (
    <section
      className={clsx(
        "section-aboutstory mt-[150px] max-w-[1440px]",
        className
      )}
      id="aboutstory"
    >
      <div className="flex flex-col px-4">
        <div className="flex-grow">
          <p
            id="aboutstory-title"
            className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:leading-tight xl:leading-normal text-black"
          >
            Our Story
          </p>
          <div id="aboutstory-image" className="">
            <Image
              className={`${styles.mobileimage} mt-6`}
              src={"/images/about/about.png"}
              width="354"
              height="367"
              alt="image of the ceo"
              priority={true}
            />
          </div>
          <p
            id="aboutstory-body1"
            className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis
            nunc ac purus sollicitudin, a scelerisque metus congue. Suspendisse
            tellus augue, pellentesque ac metus a, ultrices elementum dolor.
          </p>
          <p
            id="aboutstory-body2"
            className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
          >
            Integer aliquet purus id luctus fermentum. Nam vestibulum ultrices
            mi at consequat. Donec quis metus nisl. Pellentesque eget dapibus
            nunc. Vivamus posuere rhoncus risus eget venenatis.
          </p>
          <p
            id="aboutstory-body3"
            className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
          >
            Duis non tellus nec lacus lobortis faucibus eu sed diam. Nam
            commodo, justo molestie fermentum mattis, quam ex sollicitudin
            tortor, id aliquet dui sapien vitae tellus. Sed eros orci, convallis
            vitae nibh eget, auctor tincidunt elit. Suspendisse dignissim purus
            quis quam finibus, vel consequat urna faucibus. Sed bibendum sapien
            iaculis tempor mollis. Quisque justo eros, tristique euismod nisi
            vel, molestie ullamcorper nunc. In feugiat purus vitae risus mollis
            commodo.
          </p>
        </div>
      </div>
    </section>
  );
}
