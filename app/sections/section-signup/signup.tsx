"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowRight } from "react-icons/go";

type Props = { className?: string };

export default function SignupSection({ className }: Props) {
  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";
  const tl1 = useRef<GSAPTimeline | null>(null);

  const size = useWindowSize();
  function navbuttonhover(element: string, label: string, arrow: string) {
    gsap.to(element, {
      backgroundColor: menuhovercolor,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(label, {
      color: menucolor,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    gsap.to(arrow, {
      color: menucolor,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonleave(element: string, label: string, arrow: string) {
    gsap.to(element, {
      backgroundColor: menucolor,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(label, {
      color: buttoncolor,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(arrow, {
      color: buttoncolor,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeOut",
    });
  }

  useGSAP(() => {
    gsap.set(["#signup-title", "#signup-body", "#signup-button"], {
      opacity: 0,
      y: "20px",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-signup",
        pin: false,
        start: "top 70%",
      },
    });

    tl1.current
      .to("#signup-title", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      })
      .to("#signup-body", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: -0.3,
        ease: "Expo.easeInOut",
      })
      .to("#signup-button", {
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
        "section-signup mt-[150px] max-w-[1440px] xs:px-4 lg:px-12",
        className
      )}
      id="signup"
    >
      <div className="h-[max-content] text-center">
        <p
          id="signup-title"
          className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
        >
          Take The First Step
        </p>
        <p
          id="signup-body"
          className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
        >
          We’re so confident that&nbsp;we’ll&nbsp;give&nbsp;you
          <br />
          30 days FREE when you bring your&nbsp;number.
        </p>
        <div className="text-center">
          <div
            id="signup-button"
            className={`${styles.thebutton} signuplearnmorebtn spacegrotesklight mt-6`}
            onMouseEnter={() => {
              navbuttonhover(
                ".signuplearnmorebtn",
                ".signuplearnmorelabel",
                ".signupllearnmorearrow"
              );
            }}
            onMouseLeave={() => {
              navbuttonleave(
                ".signuplearnmorebtn",
                ".signuplearnmorelabel",
                ".signupllearnmorearrow"
              );
            }}
          >
            <Link
              href="https://app.usmobile.com/dashboard/auth?signup=true&redirectTo=/dashboard/app/new-plan-checkout&utm_page_url=/"
              target="_blank"
            >
              <span className="flex signuplearnmorelabel">
                GET STARTED{" "}
                <span className="signuplearnmorearrow ml-[3px] mt-[2px]">
                  <GoArrowRight />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
