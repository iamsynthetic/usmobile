"use client";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { useAppContext } from "../../context/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowRight } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;
type Props = { className?: string };

export default function PlansSection({ className }: Props) {
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);

  const { setPlanssectionInView } = useAppContext();

  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";
  const buttonbgcolor = "#77b3d9";
  const planscards = [
    {
      id: 0,
      title: "Unlimited Flex",
      pricedisclaimer: "as low as",
      price: "$17.50",
      permonth: "/mo",
      subtitle: "Premium Data, unlimited talk and text",
      submenu: [
        { listitem: "Premium Data, unlimited talk and text" },
        { listitem: "5 GB Hotspot Data" },
        { listitem: "Apple Watch add-on" },
        { listitem: "International add-on" },
        { listitem: "International Calling and Texting" },
        { listitem: "$2 per Network Transfer" },
      ],
      disclaimerbubble: "",
      url: "https://www.usmobile.com/plans",
    },
    {
      id: 1,
      title: "By The Gig",
      pricedisclaimer: "as low as",
      price: "$15.00",
      permonth: "/mo",
      subtitle: "5 GB Sharable data, unlimited talk and text",
      submenu: [
        {
          listitem:
            "Share data across multiple lines and across multiple networks",
        },
        { listitem: "First line included.  Add more lines for $8 / line" },
        { listitem: "Unlimited Talk & Text on every line" },
        { listitem: "Top up data any time for $2/GB unused top-ups roll over" },
        { listitem: "International add-on" },
        { listitem: "Use your data in Canada and Mexico (coming 2/28)" },
      ],
      disclaimerbubble: "",
      url: "https://www.usmobile.com/shared-data-plans",
    },
    {
      id: 2,
      title: "Light",
      pricedisclaimer: "as low as",
      price: "$8.00",
      permonth: "/mo",
      subtitle: "2 GB Premium Data, unlimited talk and text",
      submenu: [
        { listitem: "Unlimited talk and text" },
        { listitem: "International add-on" },
        { listitem: "Unlimited Talk & Text on every line" },
        { listitem: "$2 per Network Transfer" },
      ],
      disclaimerbubble: "",
      url: "https://www.usmobile.com/get-started-bundles",
    },
  ];

  function navbuttonhover(
    index: number,
    element: string,
    label: string,
    arrow: string
  ) {
    let turntostring = String(index);
    gsap.to(`${element}-${turntostring}`, {
      backgroundColor: buttonbgcolor,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(`${label}-${turntostring}`, {
      color: menuhovercolor,
      x: +4,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    gsap.to(`${arrow}-${turntostring}`, {
      color: menuhovercolor,
      x: -2,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonleave(
    index: number,
    element: string,
    label: string,
    arrow: string
  ) {
    let turntostring = String(index);
    gsap.to(`${element}-${turntostring}`, {
      backgroundColor: menucolor,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(`${label}-${turntostring}`, {
      color: buttoncolor,
      x: 0,
      duration: 0.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(`${arrow}-${turntostring}`, {
      color: buttoncolor,
      x: 0,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeOut",
    });
  }

  useGSAP(() => {
    gsap.set("#plans-title", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#planscard-0", {
      opacity: 0,
      y: "20px",
    });

    gsap.set("#planscard-1", {
      opacity: 0,
      y: "20px",
    });
    gsap.set("#planscard-2", {
      opacity: 0,
      y: "20px",
    });

    tl1.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#plans-title",
        pin: false,
        start: "top 60%",
      },
    });

    tl1.current.to("#plans-title", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#planscard-0",
        pin: false,
        start: "top 60%",
      },
    });

    tl2.current.to("#planscard-0", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl3.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#planscard-1",
        pin: false,
        start: "top 60%",
      },
    });

    tl3.current.to("#planscard-1", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl4.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#planscard-2",
        pin: false,
        start: "top 60%",
      },
    });

    tl4.current.to("#planscard-2", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0,
      ease: "Expo.easeInOut",
    });

    tl5.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-plans",
        pin: false,
        start: "-240px top",
        end: "-150px",
        onEnter: () => {
          setPlanssectionInView(true);
        },
        onEnterBack: () => {
          setPlanssectionInView(false);
        },
      },
    });
  });

  return (
    <section
      id="plans"
      className={clsx("section-plans mt-[150px] max-w-[1440px]", className)}
    >
      <div className="h-[max-content] ">
        <div className="flex flex-col max-w-[1440px] xs:px-4 lg:px-12">
          <p
            id="plans-title"
            className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:w-[90%] lg:w-[90%] xs:leading-tight xl:leading-normal text-black"
          >
            Our Most Popular Plans
          </p>
          <div className="z-10 grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 mt-8">
            {planscards.map((planscard, index) => (
              <Card
                key={planscard.id}
                id={`planscard-${planscard.id}`}
                className={`${styles.buttoncolor} ${styles.bgcolor} flex flex-col rounded-2xl`}
              >
                <CardHeader
                  id={`planscard-header-${planscard.id}`}
                  className={`${styles.txtcolor}`}
                >
                  <CardTitle
                    id={`planscard-title-${planscard.id}`}
                    className="lexend text-lg"
                  >
                    {planscard.title}
                  </CardTitle>
                  <CardTitle
                    id={`planscard-pricedisclaimer-${planscard.id}`}
                    className="spacegrotesk text-xs leading-tight"
                  >
                    {planscard.pricedisclaimer}
                  </CardTitle>
                  <div className="flex flex-row w-full h-[max-content]">
                    <CardTitle
                      id={`planscard-price-${planscard.id}`}
                      className="lexend text-4xl -mt-3"
                    >
                      {planscard.price}
                    </CardTitle>
                    <CardTitle
                      id={`planscard-permonth-${planscard.id}`}
                      className="lexend text-[16px]"
                    >
                      {planscard.permonth}
                    </CardTitle>
                  </div>
                  <CardTitle
                    id={`planscard-subtitle-${planscard.id}`}
                    className={`${styles.txtcolor} spacegroteskbold text-sm`}
                  >
                    {planscard.subtitle}
                  </CardTitle>
                </CardHeader>
                <div className="flex h-full">
                  <CardContent
                    className={`${styles.txtcolor} flex flex-col max-w-[90%]`}
                  >
                    <div className="flex flex-col h-full">
                      {planscards
                        .filter((submenu) => submenu.id == index)
                        .map((item) => {
                          return (
                            <div
                              className=" spacegroteskbold text-xl"
                              key={item.id}
                            >
                              {item.submenu.map((subitem, index) => {
                                return (
                                  <div
                                    key={index}
                                    id={`planscard-listitem-${index}`}
                                    className="flex flex-row text-sm font-medium mb-3"
                                  >
                                    <span
                                      id={`planscard-checkmark-${index}`}
                                      className="pr-2 pt-[3px] text-[#e5f2f9]"
                                    >
                                      <FaCheckCircle />
                                    </span>
                                    {subitem.listitem}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                    </div>
                    <div
                      className={`${styles.thebutton} herolearnmorebtn-${index} spacegrotesklight flex flex-col justify-end mt-4 w-[max-content]`}
                      onMouseEnter={() => {
                        navbuttonhover(
                          index,
                          ".herolearnmorebtn",
                          ".herolearnmorelabel",
                          ".herollearnmorearrow"
                        );
                      }}
                      onMouseLeave={() => {
                        navbuttonleave(
                          index,
                          ".herolearnmorebtn",
                          ".herolearnmorelabel",
                          ".herollearnmorearrow"
                        );
                      }}
                    >
                      <Link href={`${planscard.url}`} target="_blank">
                        <span className={`herolearnmorelabel-${index} flex`}>
                          LEARN MORE{" "}
                          <span
                            className={`herolearnmorearrow-${index} ml-[3px] mt-[2px]`}
                          >
                            <GoArrowRight />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
