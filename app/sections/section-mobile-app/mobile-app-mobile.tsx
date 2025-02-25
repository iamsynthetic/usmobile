"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { useAppContext } from "../../../context";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = { className?: string };

export default function MobileAppMobileSection({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    gsap.set(
      [
        "#mobileapp-title",
        "#mobileapp-body",
        "#mobileapp-buttons",
        "#mobileapp-image",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#mobileapp-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl1.current.to("#mobileapp-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#mobileapp-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl2.current.to("#mobileapp-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#mobileapp-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl3.current.to("#mobileapp-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#mobileapp-buttons",
        pin: false,
        start: "top 60%",
      },
    });

    tl4.current.to("#mobileapp-buttons", {
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
        "section-mobile-app mt-[150px] max-w-[1440px]",
        className
      )}
      id="mobileapp"
    >
      <div className="w-screen h-[max-content]">
        <div className="flex flex-col px-4">
          <div className="flex flex-col">
            <div id="mobileapp-image" className="relative flex justify-center">
              <Image
                className=""
                src={"/images/mobileapp/phone-example.png"}
                width="313"
                height="637"
                alt="image of a phone with an app on it"
                priority={true}
              />
            </div>
          </div>
          <div className="flex-grow m-auto mt-6">
            <div className="flex flex-col xs:w-[100%]">
              <p
                id="mobileapp-title"
                className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
              >
                Get Real Time Data Instantly With Our Mobile&nbsp;App
              </p>
              <p
                id="mobileapp-body"
                className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
              >
                Keeping track of your phone plan shouldn't be a time
                consuming&nbsp;chore.
                <br />
                The US Mobile app makes it easy to track your usage, see
                in-depth analytics, and manage or activate lines on your iOS or
                Android&nbsp;device.
              </p>
              <div id="mobileapp-buttons" className="flex flex-row mt-6 gap-2">
                <Link
                  href="https://apps.apple.com/us/app/us-mobile/id1460013401"
                  target="_blank"
                >
                  <Image
                    className="bg-orange-200"
                    src={"/images/mobileapp/apple-button.png"}
                    width="174"
                    height="50"
                    alt="image of the apple app store button"
                    priority={true}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/search?q=usmobile&c=apps&hl=en"
                  target="_blank"
                >
                  <Image
                    className=""
                    src={"/images/mobileapp/google-button.png"}
                    width="174"
                    height="50"
                    alt="image of the google play store button"
                    priority={true}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
