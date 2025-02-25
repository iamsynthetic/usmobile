"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowRight } from "react-icons/go";

type Props = { className?: string };

export default function FeaturesMobileSection({ className }: Props) {
  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const tl6 = useRef<GSAPTimeline | null>(null);
  const tl7 = useRef<GSAPTimeline | null>(null);
  const tl8 = useRef<GSAPTimeline | null>(null);
  const tl9 = useRef<GSAPTimeline | null>(null);
  const tl10 = useRef<GSAPTimeline | null>(null);
  const tl13 = useRef<GSAPTimeline | null>(null);
  const tl14 = useRef<GSAPTimeline | null>(null);
  const tl15 = useRef<GSAPTimeline | null>(null);
  const tl16 = useRef<GSAPTimeline | null>(null);
  const tl19 = useRef<GSAPTimeline | null>(null);
  const tl20 = useRef<GSAPTimeline | null>(null);
  const tl21 = useRef<GSAPTimeline | null>(null);
  const tl22 = useRef<GSAPTimeline | null>(null);
  const tl23 = useRef<GSAPTimeline | null>(null);

  function buttonhover(element: string, label: string, arrow: string) {
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

  function buttonleave(element: string, label: string, arrow: string) {
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
        "#features-feature1-image",
        "#features-feature1-title",
        "#features-feature1-body",
        "#features-feature1-button1",
        "#features-feature1-body2",
        "#features-feature1-button2",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );
    gsap.set(
      [
        "#features-feature2-image",
        "#features-feature2-title",
        "#features-feature2-body",
        "#features-feature2-button",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );
    gsap.set(
      [
        "#features-feature3-image",
        "#features-feature3-title",
        "#features-feature3-body",
        "#features-feature3-button",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );
    gsap.set(
      [
        "#features-feature4-image",
        "#features-feature4-title",
        "#features-feature4-body",
        "#features-feature4-button",
      ],
      {
        opacity: 0,
        y: "20px",
      }
    );

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl1.current.to("#features-feature1-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl2.current.to("#features-feature1-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl3.current.to("#features-feature1-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-button1",
        pin: false,
        start: "top 60%",
      },
    });

    tl4.current.to("#features-feature1-button1", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl5.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-body2",
        pin: false,
        start: "top 60%",
      },
    });

    tl5.current.to("#features-feature1-body2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    tl6.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature1-button2",
        pin: false,
        start: "top 60%",
      },
    });

    tl6.current.to("#features-feature1-button2", {
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
        trigger: "#features-feature2-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl7.current.to("#features-feature2-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl8.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature2-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl8.current.to("#features-feature2-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl9.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature2-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl9.current.to("#features-feature2-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl10.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature2-button",
        pin: false,
        start: "top 60%",
      },
    });

    tl10.current.to("#features-feature2-button", {
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
        trigger: "#features-feature3-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl13.current.to("#features-feature3-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl14.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature3-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl14.current.to("#features-feature3-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl15.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature3-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl15.current.to("#features-feature3-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl16.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature3-button",
        pin: false,
        start: "top 60%",
      },
    });

    tl16.current.to("#features-feature3-button", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    {
      /* feature 4 ---------------------------------------------------------------------------------------- feature 4 */
    }
    tl19.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature4-image",
        pin: false,
        start: "top 60%",
      },
    });

    tl19.current.to("#features-feature4-image", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl20.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature4-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl20.current.to("#features-feature4-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl21.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature4-body",
        pin: false,
        start: "top 60%",
      },
    });

    tl21.current.to("#features-feature4-body", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl22.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-feature4-button",
        pin: false,
        start: "top 60%",
      },
    });

    tl22.current.to("#features-feature4-button", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  });

  return (
    <section
      className={clsx("section-features mt-[150px] max-w-[1440px]", className)}
      id="features"
    >
      <div className="h-[max-content]">
        <div className="flex flex-col px-4">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <div id="features-feature1-image" className="min-w-[100px]">
                <Image
                  className="w-full"
                  src={"/images/features/international.png"}
                  width="611"
                  height="400"
                  alt="image of luggage on top of a car"
                  priority={true}
                />
              </div>
              <div className="flex-grow md:max-w-[800px] mt-6">
                <p
                  id="features-feature1-title"
                  className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
                >
                  International
                  <br />
                  Features Like No Other Mobile
                </p>
                <p
                  id="features-feature1-body"
                  className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 mr-20 leading-tight text-black"
                >
                  Roam in over 180 countries, travel with ease. Use your US
                  number in over 180 countries for data, calls and texts.
                </p>
                <div
                  id="features-feature1-button1"
                  className={`${styles.thebutton} features1learnmorebtn spacegrotesklight mt-4`}
                  onMouseEnter={() => {
                    buttonhover(
                      ".features1learnmorebtn",
                      ".features1learnmorelabel",
                      ".features1llearnmorearrow"
                    );
                  }}
                  onMouseLeave={() => {
                    buttonleave(
                      ".features1learnmorebtn",
                      ".features1learnmorelabel",
                      ".features1llearnmorearrow"
                    );
                  }}
                >
                  <Link
                    href="https://www.usmobile.com/international-roaming-phone-plans"
                    target="_blank"
                  >
                    <span className="flex features1learnmorelabel">
                      LEARN MORE{" "}
                      <span className="features1learnmorearrow ml-[3px] mt-[2px]">
                        <GoArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
                <p
                  id="features-feature1-body2"
                  className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 mr-20 leading-tight text-black"
                >
                  International calls and texts call and text from the US to
                  over 200&nbsp;destinations.
                </p>
                <div
                  id="features-feature1-button2"
                  className={`${styles.thebutton} features2learnmorebtn spacegrotesklight mt-4`}
                  onMouseEnter={() => {
                    buttonhover(
                      ".features2learnmorebtn",
                      ".features2learnmorelabel",
                      ".features2llearnmorearrow"
                    );
                  }}
                  onMouseLeave={() => {
                    buttonleave(
                      ".features2learnmorebtn",
                      ".features2learnmorelabel",
                      ".features2llearnmorearrow"
                    );
                  }}
                >
                  <Link
                    href="https://www.usmobile.com/international-calling"
                    target="_blank"
                  >
                    <span className="flex features2learnmorelabel">
                      LEARN MORE{" "}
                      <span className="features2learnmorearrow ml-[3px] mt-[2px]">
                        <GoArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[150px]">
              <div id="features-feature2-image" className="min-w-[100px]">
                <Image
                  className="w-[100%]"
                  src={"/images/features/most.png"}
                  width="611"
                  height="400"
                  alt="image of woman behind a blue background"
                  priority={true}
                />
              </div>
              <div className="flex-grow md:max-w-[800px] mt-6">
                <p
                  id="features-feature2-title"
                  className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
                >
                  The ‘Most’
                  <br />
                  That Matters Most
                </p>
                <p
                  id="features-feature2-body"
                  className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
                >
                  No carrier has modernized connectivity quite like us. But
                  don’t just take our word for it, here’s what six happy
                  customers have to say about the features and perks they love
                  most.
                </p>
                <div
                  id="features-feature2-button"
                  className={`${styles.thebutton} features3learnmorebtn spacegrotesklight mt-4`}
                  onMouseEnter={() => {
                    buttonhover(
                      ".features3learnmorebtn",
                      ".features3learnmorelabel",
                      ".features3llearnmorearrow"
                    );
                  }}
                  onMouseLeave={() => {
                    buttonleave(
                      ".features3learnmorebtn",
                      ".features3learnmorelabel",
                      ".features3llearnmorearrow"
                    );
                  }}
                >
                  <Link href="https://www.usmobile.com/videos" target="_blank">
                    <span className="flex features3learnmorelabel">
                      LEARN MORE{" "}
                      <span className="features3learnmorearrow ml-[3px] mt-[2px]">
                        <GoArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[150px] ">
              <div id="features-feature3-image" className="min-w-[100px]">
                <Image
                  className="w-[100%]"
                  src={"/images/features/connectivity.png"}
                  width="611"
                  height="400"
                  alt="image of new york skyline"
                  priority={true}
                />
              </div>
              <div className="flex-grow md:max-w-[800px] mt-6">
                <p
                  id="features-feature3-title"
                  className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
                >
                  Boundless Connectivity
                </p>
                <p
                  id="features-feature3-body"
                  className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 mr-20 leading-tight text-black"
                >
                  We're proud to give you top tier wireless that goes the
                  distance without breaking the bank. Whether you're exploring
                  city streets or scaling mountain peaks, we ensure you have
                  what you need, wherever your adventures lead.
                </p>
                <div
                  id="features-feature3-button"
                  className={`${styles.thebutton} features4learnmorebtn spacegrotesklight mt-4`}
                  onMouseEnter={() => {
                    buttonhover(
                      ".features4learnmorebtn",
                      ".features4learnmorelabel",
                      ".features4llearnmorearrow"
                    );
                  }}
                  onMouseLeave={() => {
                    buttonleave(
                      ".features4learnmorebtn",
                      ".features4learnmorelabel",
                      ".features4llearnmorearrow"
                    );
                  }}
                >
                  <Link
                    href="https://www.usmobile.com/networks"
                    target="_blank"
                  >
                    <span className="flex features4learnmorelabel">
                      LEARN MORE{" "}
                      <span className="features4learnmorearrow ml-[3px] mt-[2px]">
                        <GoArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[150px] ">
              <div id="features-feature4-image" className="min-w-[100px]">
                <Image
                  className="w-[100%]"
                  src={"/images/features/stayadventurous.png"}
                  width="611"
                  height="400"
                  alt="image of person holding a phone outside"
                  priority={true}
                />
              </div>
              <div className="flex-grow md:max-w-[800px]">
                <p
                  id="features-feature4-title"
                  className="sectiontitletxt xs:text-[28px] md:text-[48px] mt-6 xs:leading-tight text-black"
                >
                  Stay adventurous
                  <br />
                  Stay connected
                </p>
                <p
                  id="features-feature4-body"
                  className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 leading-tight text-black"
                >
                  US Mobile delivers on everything you need, everywhere you need
                  it.
                </p>
                <div
                  id="features-feature4-button"
                  className={`${styles.thebutton} features5learnmorebtn spacegrotesklight mt-4`}
                  onMouseEnter={() => {
                    buttonhover(
                      ".hfeatures5earnmorebtn",
                      ".features5learnmorelabel",
                      ".features5llearnmorearrow"
                    );
                  }}
                  onMouseLeave={() => {
                    buttonleave(
                      ".features5learnmorebtn",
                      ".features5learnmorelabel",
                      ".features5llearnmorearrow"
                    );
                  }}
                >
                  <Link href="https://www.usmobile.com/" target="_blank">
                    <span className="flex features5learnmorelabel">
                      LEARN MORE{" "}
                      <span className="features5learnmorearrow ml-[3px] mt-[2px]">
                        <GoArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
