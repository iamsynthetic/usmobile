"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { useAppContext } from "../../../context";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";

type Props = { className?: string };

export default function PerksMobileSection({ className }: Props) {
  const size = useWindowSize();
  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const tl6 = useRef<GSAPTimeline | null>(null);
  const tl6b = useRef<GSAPTimeline | null>(null);
  const tl6c = useRef<GSAPTimeline | null>(null);
  const tl7 = useRef<GSAPTimeline | null>(null);
  const tl8 = useRef<GSAPTimeline | null>(null);
  const tl9 = useRef<GSAPTimeline | null>(null);
  const tl10 = useRef<GSAPTimeline | null>(null);
  const tl11 = useRef<GSAPTimeline | null>(null);
  const tl12 = useRef<GSAPTimeline | null>(null);
  const tl13 = useRef<GSAPTimeline | null>(null);
  const tl14 = useRef<GSAPTimeline | null>(null);
  const tl15 = useRef<GSAPTimeline | null>(null);
  const tl16 = useRef<GSAPTimeline | null>(null);
  const tl17 = useRef<GSAPTimeline | null>(null);
  const tl18 = useRef<GSAPTimeline | null>(null);
  // const [isMobileSize, setIsMobileSize] = useState(false);

  // let template;

  function buttonhover(element: string, label: string, arrow: string) {
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

  function buttonleave(element: string, label: string, arrow: string) {
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

  useGSAP(() => {
    gsap.set(
      [
        "#perks-perk1-title",
        "#perks-perk1-body",
        "#perks-perk1-image",
        "#perks-perk1-bg",
        "#perks-perk1-number",
        "#perks-perk1-title2",
        "#perks-perk1-subtitle",
        "#perks-perk1-body2",

        "#perks-perk2-image",
        "#perks-perk2-bg",
        "#perks-perk2-number",
        "#perks-perk2-title",
        "#perks-perk2-subtitle",
        "#perks-perk2-body",

        "#perks-perk3-image",
        "#perks-perk3-bg",
        "#perks-perk3-number",
        "#perks-perk3-title",
        "#perks-perk3-subtitle",
        "#perks-perk3-body",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl1.current.to("#perks-perk1-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl2.current.to("#perks-perk1-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl3.current.to("#perks-perk1-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-bg",
        pin: false,
        start: "top 60%",
      },
    });

    tl4.current.to("#perks-perk1-bg", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl5.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-number",
        pin: false,
        start: "top 60%",
      },
    });

    tl5.current.to("#perks-perk1-number", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl6.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-title2",
        pin: false,
        start: "top 60%",
      },
    });

    tl6.current.to("#perks-perk1-title2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl6b.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-subtitle",
        pin: false,
        start: "top 60%",
      },
    });

    tl6b.current.to("#perks-perk1-subtitle", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl6c.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk1-body2",
        pin: false,
        start: "top 60%",
      },
    });

    tl6c.current.to("#perks-perk1-body2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    {
      /* feature 2 ---------------------------------------------------------------------------------------- feature 2 */
    }
    tl7.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl7.current.to("#perks-perk2-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl8.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-bg",
        pin: false,
        start: "top 60%",
      },
    });

    tl8.current.to("#perks-perk2-bg", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl9.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-number",
        pin: false,
        start: "top 60%",
      },
    });

    tl9.current.to("#perks-perk2-number", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl10.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl10.current.to("#perks-perk2-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl11.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-subtitle",
        pin: false,
        start: "top 60%",
      },
    });

    tl11.current.to("#perks-perk2-subtitle", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl12.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk2-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl12.current.to("#perks-perk2-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    {
      /* feature 3 ---------------------------------------------------------------------------------------- feature 3 */
    }

    tl13.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl13.current.to("#perks-perk3-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl14.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-bg",
        pin: false,
        start: "top 60%",
      },
    });

    tl14.current.to("#perks-perk3-bg", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl15.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-number",
        pin: false,
        start: "top 60%",
      },
    });

    tl15.current.to("#perks-perk3-number", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl16.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl16.current.to("#perks-perk3-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl17.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-subtitle",
        pin: false,
        start: "top 60%",
      },
    });

    tl17.current.to("#perks-perk3-subtitle", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl18.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#perks-perk3-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl18.current.to("#perks-perk3-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  });

  return (
    <section
      className={clsx("section-perks mt-[150px] max-w-[1440px]", className)}
      id="perks"
    >
      <div className=" h-[max-content]">
        <div className="flex flex-col xs:px-4">
          <div className="flex flex-col text-black">
            <div className="flex flex-col">
              <p
                id="perks-perk1-title"
                className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
              >
                Perks Too Good To&nbsp;Believe
              </p>
              <p
                id="perks-perk1-body"
                className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 mr-20 leading-tight text-black"
              >
                Choose from over 10 audio, streaming and gaming services for a
                $15 a month credit when you have 3 lines on
                Unlimited&nbsp;Premium.
              </p>
              <div id="perks-perk1-image" className="min-w-[100px] mt-6">
                <Image
                  className="w-full"
                  src={"/images/perks/perk1.png"}
                  width="397"
                  height="284"
                  alt="image of a cell phone with a music app on and wireless earbuds"
                  priority={true}
                />
              </div>
              <div
                id="perks-perk1-bg"
                className=" flex flex-row w-full rounded-2xl xs:px-4 md:px-4 xl:px-8 xs:py-6 lg:py-0 xs:mt-6 lg:mt-0 bg-[#C7E2F3]"
              >
                <div className="flex flex-row w-full m-auto">
                  <div
                    id="perks-perk1-number"
                    className="flex w-20 spacegrotesk text-3xl"
                  >
                    01
                  </div>
                  <div className="flex flex-col w-full">
                    <div
                      id="perks-perk1-title2"
                      className="flex w-full spacegroteskbold text-3xl "
                    >
                      Music
                    </div>
                    <div
                      id="perks-perk1-subtitle"
                      className="flex w-full spacegroteskbold text-xl "
                    >
                      Listen to millions of songs ad-free
                    </div>
                    <div id="perks-perk1-body2" className="flex flex-row mt-3">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Slacker Plus LiveXLive
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Pandora Plus
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Audible
                          </div>
                        </div>
                      </div>
                      <div className="xs:ml-5 md:ml-8 xl:ml-24">
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Spotify Family
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Apple Music Family
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 ">
              <div id="perks-perk2-image" className="min-w-[100px]">
                <Image
                  className="w-full"
                  src={"/images/perks/perk2.png"}
                  width="397"
                  height="284"
                  alt="image of a cell phone with the word max on a blue background"
                  priority={true}
                />
              </div>
              <div
                id="perks-perk2-bg"
                className="flex flex-row w-full rounded-2xl xs:px-4 md:px-4 xl:px-8 xs:py-6 lg:py-0 xs:mt-6 lg:mt-0 bg-[#C7E2F3]"
              >
                <div className="flex flex-row w-full m-auto">
                  <div
                    id="perks-perk2-number"
                    className="flex w-20 spacegrotesk text-3xl"
                  >
                    02
                  </div>
                  <div className="flex flex-col w-full">
                    <div
                      id="perks-perk2-title"
                      className="flex w-full spacegroteskbold text-3xl "
                    >
                      Video
                    </div>
                    <div
                      id="perks-perk2-subtitle"
                      className="flex w-full spacegroteskbold text-xl "
                    >
                      Catch all the best movies and shows
                    </div>
                    <div id="perks-perk2-body" className="flex flex-row mt-3 ">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Apple TV Plus
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Disney Plus
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Hulu
                          </div>
                        </div>
                      </div>
                      <div className="xs:ml-5 md:ml-8 xl:ml-24">
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            ESPN Plus
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Netflix Standard
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Max
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 ">
              <div id="perks-perk3-image" className="min-w-[100px]">
                <Image
                  className="w-full"
                  src={"/images/perks/perk3.png"}
                  width="397"
                  height="284"
                  alt="image of a cell phone connected to a game controller in front of a computer"
                  priority={true}
                />
              </div>
              <div
                id="perks-perk3-bg"
                className="flex flex-row w-full rounded-2xl xs:px-4 md:px-4 xl:px-8 xs:py-6 lg:py-0 xs:mt-6 lg:mt-0 bg-[#C7E2F3]"
              >
                <div className="flex flex-row w-full m-auto">
                  <div
                    id="perks-perk3-number"
                    className="flex w-20 spacegrotesk text-3xl"
                  >
                    03
                  </div>
                  <div className="flex flex-col w-full">
                    <div
                      id="perks-perk3-title"
                      className="flex w-full spacegroteskbold text-3xl "
                    >
                      Gaming
                    </div>
                    <div
                      id="perks-perk3-subtitle"
                      className="flex w-full spacegroteskbold text-xl "
                    >
                      Play online and get free games
                    </div>
                    <div id="perks-perk3-body" className="flex flex-row mt-3 ">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            PlayStation Plus
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex text-xl mt-1 mr-1">
                            <IoCheckmarkOutline />
                          </div>
                          <div className="flex w-full spacegrotesk text-xl">
                            Xbox Gamepass
                          </div>
                        </div>
                      </div>
                    </div>
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
