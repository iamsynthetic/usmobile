"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowRight } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = { className?: string };

export default function TestimonialsSection({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const tl6 = useRef<GSAPTimeline | null>(null);
  const tl7 = useRef<GSAPTimeline | null>(null);
  const tl8 = useRef<GSAPTimeline | null>(null);
  const tl9 = useRef<GSAPTimeline | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Burton C. Bell",
      title: "FACTORY OWNER",
      description: "1 hour ago",
    },
    {
      id: 2,
      name: "Jonathan Davis",
      title: "CORN FARMER",
      description: "1 hour ago",
    },
    {
      id: 3,
      name: "Kyo Nishimura",
      title: "OBSCURE POET",
      description: "1 hour ago",
    },
    {
      id: 4,
      name: "Jamey Jasta",
      title: "BREEDER",
      description: "1 hour ago",
    },
    {
      id: 5,
      name: "Corey Taylor",
      title: "PUBLIC SPEAKER",
      description: "1 hour ago",
    },
    {
      id: 6,
      name: "Joe Duplantier",
      title: "ENVIRONMENTALIST",
      description: "1 hour ago",
    },
  ];

  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";

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
    gsap.set(
      [
        "#testimonials-title",
        "#testimonials-body",
        "#testimonials-card-1",
        "#testimonials-card-2",
        "#testimonials-card-3",
        "#testimonials-card-4",
        "#testimonials-card-5",
        "#testimonials-card-6",
        "#testimonials-button",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-testimonials",
        pin: false,
        start: "top 70%",
      },
    });

    tl1.current.to("#testimonials-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-body",
        pin: false,
        start: "top 70%",
      },
    });
    tl2.current.to("#testimonials-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-1",
        pin: false,
        start: "top 70%",
      },
    });
    tl3.current.to("#testimonials-card-1", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-2",
        pin: false,
        start: "top 70%",
      },
    });
    tl4.current.to("#testimonials-card-2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl5.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-3",
        pin: false,
        start: "top 70%",
      },
    });
    tl5.current.to("#testimonials-card-3", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl6.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-4",
        pin: false,
        start: "top 70%",
      },
    });
    tl6.current.to("#testimonials-card-4", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl7.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-5",
        pin: false,
        start: "top 70%",
      },
    });
    tl7.current.to("#testimonials-card-5", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl8.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-card-6",
        pin: false,
        start: "top 70%",
      },
    });
    tl8.current.to("#testimonials-card-6", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl9.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials-button",
        pin: false,
        start: "top 70%",
      },
    });
    tl9.current.to("#testimonials-button", {
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
        "section-testimonials scroll-m-14 mt-[150px] max-w-[1440px] xs:px-4 lg:px-12",
        className
      )}
      id="testimonials"
    >
      <div className="h-[max-content]">
        <p
          id="testimonials-title"
          className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:w-[90%] lg:w-[90%] xs:leading-tight xl:leading-normal text-black"
        >
          Trusted By Our&nbsp;Users
        </p>
        <p
          id="testimonials-body"
          className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
        >
          We'll never make you wait hours at the phone store.
          <br />
          Call, email, or chat with us and real people will help you out within
          seconds no matter what time of day.
        </p>
        <div className="z-10 grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              id={`testimonials-card-${testimonial.id}`}
              className={cn(
                "bg-[#f2dcb3] shadow-[0_10px_10px_-10px_rgb(0,0,0,0)] rounded-3xl border-none",
                className
              )}
            >
              <div className="mt-2">
                <CardHeader>
                  <div className="flex flex-row text-black">
                    <div className="flex">
                      <FaCircleUser size={26} />
                    </div>
                    <div className="flex flex-col -mt-1">
                      <CardTitle className="spacegroteskbold text-sm ml-2">
                        {testimonial.name}
                      </CardTitle>
                      <CardTitle className="spacegroteskbold text-xs ml-2 mt-0 text-slate-500">
                        {testimonial.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardTitle className="spacegroteskbold text-sm pt-2">
                    <div className="flex flex-row gap-1 text-black">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </CardTitle>
                  <CardDescription className="pt-2 text-black">
                    US Mobile is a small company but it gives you better service
                    than the big ones. The appropriately named "Super LTE" will
                    fly at 40-50Mbps 24/7. The voice clarity is second to none.
                    US Mobile treats you like a king with amazing VoLTE HD Voice
                    and Visual voicemail.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <div
            id="testimonials-button"
            className={`${styles.thebutton} testimonialslearnmorebtn spacegrotesklight mt-6`}
            onMouseEnter={() => {
              navbuttonhover(
                ".testimonialslearnmorebtn",
                ".testimonialslearnmorelabel",
                ".testimonialsllearnmorearrow"
              );
            }}
            onMouseLeave={() => {
              navbuttonleave(
                ".testimonialslearnmorebtn",
                ".testimonialslearnmorelabel",
                ".testimonialsllearnmorearrow"
              );
            }}
          >
            <Link href="https://www.usmobile.com/reviews" target="_blank">
              <span className="flex testimonialslearnmorelabel">
                VIEW ALL{" "}
                <span className="testimonialslearnmorearrow ml-[3px] mt-[2px]">
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
