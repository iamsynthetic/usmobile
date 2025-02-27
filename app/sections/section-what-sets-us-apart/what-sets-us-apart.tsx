"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = { className?: string };

export default function WhatSetsUsApartSection({ className }: Props) {
  const size = useWindowSize();
  const [showChevron, setShowChevron] = useState(false);
  const menuhovercolor = "#d9042b";
  const buttoncolor = "#000000";
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [thevideoimage, setThevideoimage] = useState(1);
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const tl6 = useRef<GSAPTimeline | null>(null);
  const tl7 = useRef<GSAPTimeline | null>(null);
  const tl8 = useRef<GSAPTimeline | null>(null);

  const [img, setImg] = useState({
    alt: "screenshot of a video",
    src1: "/images/about/videoscreen1.png",
    src2: "/images/about/videoscreen2.png",
    src3: "/images/about/videoscreen3.png",
    width: 1400,
    height: 500,
  });

  const [trustpilottxt, setTrustpilottxt] = useState({
    alt: "trust pilot text",
    src: "/images/about/trustpilot-txt.svg",
    width: 1400,
    height: 500,
  });

  const [trustpilotstarlogo, setTrustpilotstarlogo] = useState({
    alt: "trust pilot star logo",
    src: "/images/about/trustpilot-star-logo.svg",
    width: 1400,
    height: 500,
  });

  const [trustpilotstar, setTrustpilotstar] = useState({
    alt: "trust pilot star",
    src: "/images/about/trustpilot-star.svg",
    width: 1400,
    height: 500,
  });
  const [trustpilothalfstar, setTrustpilothalfstar] = useState({
    alt: "trust pilot half star",
    src: "/images/about/trustpilot-half-star.svg",
    width: 1400,
    height: 500,
  });
  const [trustpilotreviews, setTrustpilotreviews] = useState({
    alt: "trust pilot reviews",
    src: "/images/about/trustpilot-reviews.png",
    width: 1400,
    height: 500,
  });

  function navbuttonhover(
    elementchevron: string,
    element: string,
    label: string
  ) {
    setShowChevron(true);

    gsap.to(`${elementchevron}`, {
      color: menuhovercolor,
      opacity: 1,
      x: 8,
      duration: 0.2,
      ease: "Expo.easeOut",
    });

    gsap.to(element, {
      color: menuhovercolor,
      duration: 0.3,
      ease: "Expo.easeOut",
    });
    gsap.to(label, {
      x: 5,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonleave(
    elementchevron: string,
    element: string,
    label: string
  ) {
    setShowChevron(false);

    gsap.to(`${elementchevron}`, {
      color: "black",
      opacity: 0,
      x: 0,
      duration: 0.2,
      ease: "Expo.easeOut",
    });

    gsap.to(element, {
      color: buttoncolor,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(label, {
      x: 0,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonclick(element: number) {
    gsap.to("#whatsetsusapart-videoimage", {
      opacity: 0,
      y: +5,
      duration: 0.2,
      ease: "Back.easeInOut",
      onComplete: function () {
        setThevideoimage(element);
        fadeVideoBackIn();
      },
    });
  }

  function fadeVideoBackIn() {
    gsap.to("#whatsetsusapart-videoimage", {
      opacity: 1,
      y: 1,
      duration: 0.2,
      ease: "Back.easeInOut",
    });
  }

  useGSAP(() => {
    gsap.set("#whatsetsusapart-title", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-subtitle", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-body", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-trustpilotbg", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-trustpilotlogo", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-trustpilot-stars", {
      opacity: 0,
      y: "20px",
    });

    gsap.set("#whatsetsusapart-trustpilot-halfstar", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-videoimage", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-nav", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-speed", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-vs", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#whatsetsusapart-unlimited", {
      opacity: 0,
      y: "20px",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-title",
        pin: false,
        start: "top 70%",
      },
    });

    tl1.current.to("#whatsetsusapart-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-subtitle",
        pin: false,
        start: "top 70%",
      },
    });
    tl2.current.to("#whatsetsusapart-subtitle", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-body",
        pin: false,
        start: "top 70%",
      },
    });
    tl3.current.to("#whatsetsusapart-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-trustpilotbg",
        pin: false,
        start: "top 70%",
      },
    });
    tl4.current.to("#whatsetsusapart-trustpilotbg", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl5.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-trustpilotlogo",
        pin: false,
        start: "top 70%",
      },
    });
    tl5.current.to("#whatsetsusapart-trustpilotlogo", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl6.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-trustpilot-stars",
        pin: false,
        start: "top 70%",
      },
    });
    tl6.current.to("#whatsetsusapart-trustpilot-stars", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl7.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-trustpilot-halfstar",
        pin: false,
        start: "top 70%",
      },
    });
    tl7.current.to("#whatsetsusapart-trustpilot-halfstar", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl8.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatsetsusapart-videoimage",
        pin: false,
        start: "top 70%",
      },
    });
    tl8.current
      .to("#whatsetsusapart-videoimage", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      })
      .to("#whatsetsusapart-nav", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      })
      .to("#whatsetsusapart-speed", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      })

      .to("#whatsetsusapart-vs", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: -0.3,
        ease: "Expo.easeInOut",
      })
      .to("#whatsetsusapart-unlimited", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: -0.3,
        ease: "Expo.easeInOut",
      });
  });

  let thevideoimagetoshow;

  if (thevideoimage === 1) {
    thevideoimagetoshow = (
      <div
        id="whatsetsusapart-videoimage"
        className={`${styles.mobilevidzindex} mt-6`}
      >
        <Image
          src={img.src1}
          alt={img.alt}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    );
  } else if (thevideoimage === 2) {
    thevideoimagetoshow = (
      <div
        id="whatsetsusapart-videoimage"
        className={`${styles.mobilevidzindex} mt-6`}
      >
        <Image
          src={img.src2}
          alt={img.alt}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    );
  } else if (thevideoimage === 3) {
    thevideoimagetoshow = (
      <div
        id="whatsetsusapart-videoimage"
        className={`${styles.mobilevidzindex} mt-6`}
      >
        <Image
          src={img.src3}
          alt={img.alt}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    );
  }

  useEffect(() => {
    if (size.width < 1024) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, [size.width]);

  return (
    <section
      className={clsx(
        "section-what-sets-us-apart mt-[150px] max-w-[1440px]",
        className
      )}
      id="whatsetsusapart"
    >
      <div className="w-screen">
        <div className="flex flex-col max-w-[1440px] px-12">
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow">
              <p
                id="whatsetsusapart-title"
                className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:leading-tight xl:leading-normal text-black"
              >
                What Sets Us Apart
              </p>
              <p
                id="whatsetsusapart-subtitle"
                className="sectionbodytxtbold xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight"
              >
                A premium experience, standard.
              </p>
              <p
                id="whatsetsusapart-body"
                className="sectionbodytxt xs:text-[18px] md:text-[20px] leading-tight"
              >
                We do the essentials (and way more) better than the rest. See
                how we stack up!
              </p>
            </div>
            <div className="flex flex-col w-[430px] flex-shrink-0 justify-center">
              <div className="flex flex-row w-full h-full justify-end">
                <div
                  id="whatsetsusapart-trustpilotbg"
                  className="flex flex-row bg-[#f2dcb3] rounded-lg h-[160px] w-[430px]"
                >
                  <div
                    id="whatsetsusapart-trustpilotlogo"
                    className="flex flex-row justify-center w-1/2"
                  >
                    <Image
                      src={trustpilotstarlogo.src}
                      alt={trustpilotstarlogo.alt}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-10 h-auto mt-[-18px]"
                    />
                    <Image
                      src={trustpilottxt.src}
                      alt={trustpilottxt.alt}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-28 h-auto pl-2"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-1/2 mr-4">
                    <div
                      id="whatsetsusapart-trustpilot-stars"
                      className="flex flex-row justify-center"
                    >
                      <Image
                        src={trustpilotstar.src}
                        alt={trustpilotstar.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-9 h-auto"
                      />
                      <Image
                        src={trustpilotstar.src}
                        alt={trustpilotstar.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-9 h-auto"
                      />
                      <Image
                        src={trustpilotstar.src}
                        alt={trustpilotstar.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-9 h-auto"
                      />
                      <Image
                        src={trustpilotstar.src}
                        alt={trustpilotstar.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-9 h-auto"
                      />
                      <Image
                        src={trustpilothalfstar.src}
                        alt={trustpilothalfstar.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-9 h-auto"
                      />
                    </div>
                    <div
                      id="whatsetsusapart-trustpilot-halfstar"
                      className="flex flex-row justify-center"
                    >
                      <Image
                        src={trustpilotreviews.src}
                        alt={trustpilotreviews.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-[199px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative xs:mt-6">
            <div
              id="whatsetsusapart-videoimage"
              className={`${styles.mobilevidzindex} mt-6`}
            ></div>

            {thevideoimagetoshow}
            <div
              className={`${styles.mobilevidmenuzindex} flex flex-row justify-center w-full`}
            >
              <div
                id="whatsetsusapart-nav"
                className="flex flex-row justify-center max-w-[300px] h-[56px] mt-[-24px] bg-[#e5f2f9] rounded-2xl"
              >
                <div
                  id="whatsetsusapart-speed"
                  className={`${styles.tabbutton} thespeedbtn spacegrotesklight pr-6 mt-6 flex w-[91px] `}
                  onMouseEnter={() => {
                    navbuttonhover(
                      ".chevronspeed",
                      ".thespeedbtn",
                      ".thespeedlabel"
                    );
                  }}
                  onMouseLeave={() => {
                    navbuttonleave(
                      ".chevronspeed",
                      ".thespeedbtn",
                      ".thespeedlabel"
                    );
                  }}
                  onClick={() => {
                    navbuttonclick(1);
                  }}
                >
                  <div className="flex flex-row ml-6">
                    <span className="flex thespeedlabel">SPEED</span>
                  </div>
                </div>
                <div
                  className={`${styles.tabbutton} spacegrotesklight pr-6 mt-[22px]`}
                >
                  |
                </div>
                <div
                  id="whatsetsusapart-vs"
                  className={`${styles.tabbutton} thevsbtn spacegrotesklight pr-6 mt-6 flex w-[91px] `}
                  onMouseEnter={() => {
                    navbuttonhover(".chevronvs", ".thevsbtn", ".thevslabel");
                  }}
                  onMouseLeave={() => {
                    navbuttonleave(".chevronvs", ".thevsbtn", ".thevslabel");
                  }}
                  onClick={() => {
                    navbuttonclick(2);
                  }}
                >
                  <div className="flex flex-row ml-1">
                    <span className="flex thevslabel">VS&nbsp;OTHERS</span>
                  </div>
                </div>
                <div
                  className={`${styles.tabbutton} thesigninbtn spacegrotesklight pr-6 mt-[22px]`}
                >
                  |
                </div>
                <div
                  id="whatsetsusapart-unlimited"
                  className={`${styles.tabbutton} theunlimitedbtn spacegrotesklight pr-6 mt-6 flex w-[91px]`}
                  onMouseEnter={() => {
                    navbuttonhover(
                      ".chevronunlimited",
                      ".theunlimitedbtn",
                      ".theunlimitedlabel"
                    );
                  }}
                  onMouseLeave={() => {
                    navbuttonleave(
                      ".chevronunlimited",
                      ".theunlimitedbtn",
                      ".theunlimitedlabel"
                    );
                  }}
                  onClick={() => {
                    navbuttonclick(3);
                  }}
                >
                  <div className="flex flex-row -ml-1">
                    <span className=" theunlimitedlabel">UNLIMITED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
