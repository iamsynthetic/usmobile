"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CardsSlide() {
  const tl1 = useRef<GSAPTimeline | null>(null);

  const cards = [
    {
      color: "black",
      src: "/images/recommended/businessinsider-logo.png",
      id: ".card0",
      description:
        "US Mobile’s unlimited plans are among the best in the industry in terms of value and features.",
    },
    {
      color: "black",
      src: "/images/recommended/yahoo-logo.png",
      id: ".card1",
      description:
        "US Mobile is one of the best prepaid service providers available today.",
    },
    {
      color: "black",
      src: "/images/recommended/usnews-logo.png",
      id: ".card2",
      description:
        "Something for everyone – from single cell phone users to families, businesses, and students.",
    },
    {
      color: "black",
      src: "/images/recommended/cnet-logo.png",
      id: ".card3",
      description: "Best for a single line with unlimited data.",
    },
    {
      color: "black",
      src: "/images/recommended/qreviews-logo.png",
      id: ".card4",
      description:
        "There’s something for everyone and we were impressed by the unlimited data option.",
    },
    {
      color: "black",
      src: "/images/recommended/techradar-logo.png",
      id: ".card5",
      description:
        "Some of the cheapest unlimited data plans on the market right now.",
    },
  ];

  const rotations = [-12, 10, -5, 5, -5, 2];

  useGSAP(() => {
    cards.forEach((card, index) => {
      gsap.set(`${"#card-" + index}`, {
        opacity: 0,
        rotate: rotations[index],
      });
    });
    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: `+=${window.innerHeight}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = cards.length;
          const progressPerCard = 1 / totalCards;

          cards.forEach((card, index) => {
            const cardStart = index * progressPerCard;
            let cardProgress = (progress - cardStart) / progressPerCard;
            cardProgress = Math.min(Math.max(cardProgress, 0), 1);

            let yPos = window.innerHeight * (1 - cardProgress);
            let xPos = 0;

            if (cardProgress === 1 && index < totalCards - 1) {
              const remainingProgress =
                (progress - (cardStart + progressPerCard)) /
                (1 - progressPerCard);
              if (remainingProgress > 0) {
                const distanceMultiplier = 1 - index * 0.15;
                yPos =
                  window.innerHeight *
                  0.1 *
                  distanceMultiplier *
                  remainingProgress;
              }
            }
            gsap.to(`${"#card-" + index}`, {
              y: yPos,
              x: xPos,
              opacity: 1,
              duration: 0,
              ease: "none",
            });
          });
        },
      },
    });
  });

  return (
    <>
      <div className={`${styles.slidingimages} max-w-[1440px]`}>
        <div className="w-screen h-[max-content]">
          <div className="flex flex-col xs:ml-4 xs:mr-8 lg:px-12 w-[80%]">
            <section
              id="section2"
              className={`${styles.asection} ${styles.stickycards} sticky-cards w-full h-[100vh]`}
            >
              <div className="flex flex-col h-full ">
                <div className="mt-[104px] lexend xs:text-[28px] xs:pt-6 lg:pt-0 md:text-[48px] xs:w-[90%] lg:w-[70%] max-w-[975px] xs:leading-tight xl:leading-normal text-black">
                  Recommended By
                </div>
                {cards.map((item, index) => {
                  return (
                    <div
                      key={index}
                      id={`card-${index}`}
                      className={`${styles.card} bg-blue-300`}
                    >
                      <div className={`${styles.cardimg}`}>
                        <Image
                          key={item.src}
                          src={item.src}
                          width="0"
                          height="0"
                          layout="responsive"
                          alt="Image description"
                        />
                        <div className={`${styles.cardcontent}`}>
                          <div className="flex flex-col">
                            <div
                              className={`${styles.contentquote} lexend text-[64px]`}
                            >
                              &#8220;
                            </div>
                            <div
                              className={`${styles.contentbodytext} spacegrotesk text-[18px]`}
                            >
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
