"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import dynamic from "next/dynamic";
import { useAppContext } from "../../context";
import Hamburger from "hamburger-react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const size = useWindowSize();
  const pathname = usePathname();
  const [isPastHero, setIsPastHero] = useState(false);
  const { abouttitleClicked, scrolledPastHero, setInteractivevHovering } =
    useAppContext();

  const menucolor = "#1a3073";
  const menuhovercolor = "#77b3d9";
  const mobilemenuhovercolor = "#77b3d9";
  const buttoncolor = "#000000";

  const [isFirstMobileMenu, setIsFirstMobileMenu] = useState(true);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [whichsubmenu, setWhichSubmenu] = useState(1);

  let mobilemenutemplate;
  let mobilemenubackbutton;
  let mobilesubmenu;
  let template;

  const md2 = useMediaQuery(
    "only screen and (min-width : 641px) and (max-width : 700px)"
  );

  const [isOpen, setOpen] = useState(false);
  const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true);
  const [showChevron, setShowChevron] = useState(false);

  const menulinks = [
    { path: "/", label: "PLANS" },
    { path: "/benefits", label: "BENEFITS" },
    { path: "/company", label: "COMPANY" },
    { path: "https://www.usmobile.com/shop?pageIndex=1", label: "SHOP" },
    { path: "https://www.usmobile.com/help", label: "CHAT" },
    { path: "https://app.usmobile.com/dashboard/auth", label: "SIGNIN" },
  ];

  const submenulinks = [
    {
      id: 0,
      label: "PLANS",
      submenu: [
        { label: "MOBILE", url: "https://www.usmobile.com/plans" },
        { label: "LANDLINE", url: "https://www.usmobile.com/home-phone" },
        {
          label: "BUSINESS MOBILE",
          url: "https://www.usmobile.com/business",
        },
        {
          label: "BUSINESS LANDLINE",
          url: "https://www.usmobile.com/home-phone-business",
        },
        {
          label: "APPLE WATCH",
          url: "https://www.usmobile.com/apple-watch-cellular-plan",
        },
        {
          label: "INTERNATIONAL DATA",
          url: "https://www.usmobile.com/international-roaming-phone-plans",
        },
      ],
    },
    {
      id: 1,
      label: "BENEFITS",
      submenu: [
        {
          label: "GETTING STARTED IS EASY",
          url: "https://www.usmobile.com/how-it-works",
        },
        {
          label: "PERSONALIZED FEATURES",
          url: "https://www.usmobile.com/features",
        },
        {
          label: "ALL THE PERKS",
          url: "https://www.usmobile.com/unlimited-plan-perks",
        },
        {
          label: "THE FASTEST 5G",
          url: "https://www.usmobile.com/5g-phone-plans",
        },
        { label: "ESIM SIMPLIFIED", url: "https://www.usmobile.com/esim" },
        { label: "REFERRAL PROGRAM", url: "https://www.usmobile.com/referrer" },
      ],
    },
    {
      id: 2,
      label: "COMPANY",
      submenu: [
        { label: "OUR NETWORK", url: "https://www.usmobile.com/networks" },
        { label: "OUR CULTURE", url: "https://www.usmobile.com/videos" },
      ],
    },
  ];

  const container = useRef(null);
  const tl1 = useRef<GSAPTimeline | null>(null);
  const xs = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 768px)"
  );
  const md = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width:100000px)"
  );

  const ChangeNavColor = (thecolor: string) => {
    gsap.to(".nav-hover", {
      color: thecolor,
      duration: 0.2,
      ease: "Quint.easeInOut",
    });
  };

  let isfirsttime = true;

  function navHover(element: string) {
    setInteractivevHovering(true);
    gsap.to(element, {
      color: menuhovercolor,
      duration: 0.2,
      ease: "Quint.easeOut",
    });
  }

  function navLeave(element: string) {
    setInteractivevHovering(false);
    gsap.to(element, {
      color: menucolor,
      duration: 0.2,
      ease: "Quint.easeOut",
    });
  }

  function navdropdownhover(element: string, item: string) {
    setInteractivevHovering(true);
    gsap.to(element, {
      color: menuhovercolor,
      duration: 0.2,
      ease: "Quint.easeOut",
    });
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.2 }
    );
  }

  function navdropdownleave(element: string, item: string) {
    setInteractivevHovering(false);
    gsap.to(element, {
      color: menucolor,
      duration: 0.2,
      ease: "Quint.easeOut",
    });
  }

  function navbuttonhover(element: string, label: string, arrow: string) {
    setInteractivevHovering(true);
    gsap.to(element, {
      color: menuhovercolor,
      duration: 0.3,
      ease: "Expo.easeOut",
    });
    gsap.to(label, {
      x: +4,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
    gsap.to(arrow, {
      x: -2,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeInOut",
    });
  }

  function navbuttonleave(element: string, label: string, arrow: string) {
    setInteractivevHovering(false);
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
    gsap.to(arrow, {
      x: 0,
      duration: 0.3,
      delay: 0,
      ease: "Expo.easeOut",
    });
  }

  function navmouseenter(
    item: string,
    element: string,
    elementchevron: string
  ) {
    let itemasnumber = Number(item);

    if (itemasnumber > 2) {
    } else {
      setShowChevron(true);
      gsap.to(`.${elementchevron}`, {
        color: mobilemenuhovercolor,
        opacity: 1,
        x: 5,
        duration: 0.2,
        ease: "Expo.easeOut",
      });
    }
    gsap.to(`.${element}`, {
      color: mobilemenuhovercolor,
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function navmouseleave(
    item: string,
    element: string,
    elementchevron: string
  ) {
    let itemasnumber = Number(item);

    if (itemasnumber > 2) {
    } else {
      gsap.to(`.${elementchevron}`, {
        color: "black",
        opacity: 0,
        x: 0,
        duration: 0.2,
        ease: "Expo.easeOut",
      });
    }
    gsap.to(`.${element}`, {
      color: "black",
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function navclick(item: string, element: string, url: string) {
    let itemasnumber = Number(item);

    if (itemasnumber > 2) {
      window.open(url, "_blank", "noreferrer");
    } else {
      setWhichSubmenu(itemasnumber);
      gsap.to(element, {
        opacity: 0,
        x: -5,
        duration: 0.2,
        eaes: "Expo.easeOut",
        onComplete: function () {
          setIsFirstMobileMenu(false), bringinMenu(".menu-link-item");
        },
      });
    }
  }

  function subnavmouseenter(element: string) {
    gsap.to(`.${element}`, {
      color: mobilemenuhovercolor,
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function subnavmouseleave(element: string) {
    gsap.to(`.${element}`, {
      color: "black",
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function subnavclick(url: string, element: string) {
    window.open(url, "_blank", "noreferrer");
  }

  function mobilebackbuttonenter() {
    // alert("mobile back button enter");
    gsap.to(".backchevron", {
      color: mobilemenuhovercolor,
      x: -5,
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function mobilebackbuttonleave() {
    gsap.to(".backchevron", {
      color: "black",
      x: 0,
      duration: 0.2,
      ease: "Expo.easeOut",
    });
  }
  function mobilebackbuttonclick() {
    gsap.to(".menu-link-item", {
      opacity: 0,
      x: -5,
      duration: 0.2,
      eaes: "Expo.easeOut",
      onComplete: function () {
        setIsFirstMobileMenu(true), bringinMenu(".menu-link-item");
      },
    });
  }

  function bringinMenu(element: string) {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -5,
      },
      { opacity: 1, x: 0, duration: 0.2, ease: "Expo.easeOut" }
    );
  }

  function mobileMenu(openthemenu: boolean) {
    if (openthemenu === false) {
      gsap.to(".menu-overlay", {
        // opacity: 0.6,
        top: "-100vh",
        duration: 0.7,
        ease: "Quint.easeInOut",
        onComplete: function () {
          display: "none";
        },
      });
      gsap.to(".mobilelogo", {
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
        ease: "Quint.easeIn",
      });
    } else {
      gsap.to(".mobilelogo", {
        opacity: 0,
        duration: 0.3,
        ease: "Quint.easeOut",
      });
      gsap.to(".menu-overlay", {
        top: "0vh",
        duration: 0.7,
        ease: "Quint.easeInOut",
      });
    }
  }

  function navitemlinkoutclick(url: string) {}

  useEffect(() => {
    if (isOpen === false) {
      mobileMenu(false);
    } else if (isOpen === true) {
      mobileMenu(true);
    }
    // if (scrolledPastHero == true) {
    //   ChangeNavColor("#000000");
    //   setIsPastHero(false);
    // } else if (scrolledPastHero == false) {
    //   ChangeNavColor("#ffffff");
    //   setIsPastHero(true);
    // }
    console.log("abouttitleClicked is: " + abouttitleClicked);
    if (abouttitleClicked === true) {
      ChangeNavColor("#000000");
      setIsPastHero(false);
    } else if (abouttitleClicked === false) {
      ChangeNavColor("#ffffff");
      setIsPastHero(true);
    }
    if (size.width > 767) {
      setIsFirstMobileMenu(true);
      setOpen(false);
    }
  }, [abouttitleClicked, pathname, scrolledPastHero, isOpen, size.width]);

  if (isFirstMobileMenu === false) {
    mobilemenubackbutton = (
      <div
        className="backchevron flex flex-col justify-center text-2xl cursor-pointer"
        onMouseEnter={() => {
          mobilebackbuttonenter();
        }}
        onMouseLeave={() => {
          mobilebackbuttonleave();
        }}
        onClick={() => {
          mobilebackbuttonclick();
        }}
      >
        <IoChevronBack />
      </div>
    );
  } else {
    mobilemenubackbutton = <div></div>;
  }

  if (isFirstMobileMenu === true) {
    mobilemenutemplate = (
      <div>
        {menulinks.map((link, index) => (
          <div
            className={`navitem${index} menu-link-item cursor-pointer`}
            key={index}
          >
            <div className="menu-link-item-holder">
              <div
                onMouseEnter={() => {
                  navmouseenter(
                    `${index}`,
                    `navitem${index}`,
                    `navitemchevron${index}`
                  );
                }}
                onMouseLeave={() => {
                  navmouseleave(
                    `${index}`,
                    `navitem${index}`,
                    `navitemchevron${index}`
                  );
                }}
                onClick={() => {
                  navclick(`${index}`, `navitem${index}`, `${link.path}`);
                }}
              >
                <p className="flex flex-row menu-link spacegroteskbold text-xl">
                  {link.label}
                  <span
                    className={
                      showChevron
                        ? `block opacity-0 mt-1 navitemchevron${index}`
                        : `hidden mt-1 navitemchevron${index}`
                    }
                  >
                    <IoChevronForward />
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    mobilemenutemplate = (
      <div className="menu-link-item">
        {submenulinks
          .filter((submenu) => submenu.id == whichsubmenu)
          .map((item) => {
            return (
              <div className=" spacegroteskbold text-xl" key={item.id}>
                <h1 className="text-black spacegrotesklight text-sm mb-3">
                  {item.label}
                </h1>
                {item.submenu.map((subitem, index) => {
                  return (
                    <Link
                      href={subitem.url}
                      target="_blank"
                      className={`navitem${index} flex flex-col text-black`}
                      key={index}
                      onMouseEnter={() => {
                        subnavmouseenter(`navitem${index}`);
                      }}
                      onMouseLeave={() => {
                        subnavmouseleave(`navitem${index}`);
                      }}
                    >
                      {subitem.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
      </div>
    );
  }

  if (isMobileSize === false) {
    template = (
      <div
        className={`${styles.buttoncolor} flex justify-between h-20 items-center px-12`}
      >
        <Link href="/" className="z-20 desktoplogo">
          <div className={`${styles.buttoncolor}`}>
            <Image
              src={"/images/nav/usmobile-logo.svg"}
              width="94"
              height="58"
              alt="image of the usmobile logo"
              priority={true}
            />
          </div>
        </Link>
        <div className="flex justify-between mt-[-20px]">
          <div
            className={`${styles.buttoncolor} plans spacegroteskbold text-xs mt-[7px] pr-6 group relative dropdown cursor-pointer`}
            onMouseEnter={() => {
              navdropdownhover(".plans", ".plansdropdown");
            }}
            onMouseLeave={() => {
              navdropdownleave(".plans", ".plansdropdown");
            }}
          >
            <Link href="https://www.usmobile.com/plans" target="_blank">
              PLANS v
            </Link>
            <div className="plansdropdown group-hover:block dropdown absolute hidden h-auto">
              <ul className="bg-[#f2dcb3] rounded w-[170px] shadow px-2 py-2 mt-1">
                <li className="py-0">
                  <a
                    href="https://www.usmobile.com/plans"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    Mobile
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/home-phone"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    Landline
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/business"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    Business Mobile
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/home-phone-business"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    Business landline
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/apple-watch-cellular-plan"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    Apple Watch
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/international-roaming-phone-plans"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    International Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.buttoncolor} benefits spacegroteskbold text-xs mt-[7px] pr-6 group relative dropdown cursor-pointer`}
            onMouseEnter={() => {
              navdropdownhover(".benefits", ".benefitsdropdown");
            }}
            onMouseLeave={() => {
              navdropdownleave(".benefits", ".benefitsdropdown");
            }}
          >
            <Link href="https://www.usmobile.com/features" target="_blank">
              BENEFITS v
            </Link>
            <div className="benefitsdropdown group-hover:block dropdown absolute hidden h-auto">
              <ul className="bg-[#f2dcb3] rounded w-[170px] shadow px-2 py-2 mt-1">
                <li className="py-0">
                  <a
                    href="https://www.usmobile.com/how-it-works"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    GETTING STARTED IS EASY
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/features"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    PERSONALIZED FEATURES
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/unlimited-plan-perks"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    ALL THE PERKS
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/5g-phone-plans"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    THE FASTEST 5G
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/esim"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    ESIM SIMPLIFIED
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/referrer"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    REFERRAL PROGRAM
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.buttoncolor} company spacegroteskbold text-xs mt-[7px] pr-6 group relative dropdown cursor-pointer`}
            onMouseEnter={() => {
              navdropdownhover(".company", ".companydropdown");
            }}
            onMouseLeave={() => {
              navdropdownleave(".company", ".companydropdown");
            }}
          >
            <Link href="https://www.usmobile.com/videos" target="_blank">
              COMPANY v
            </Link>
            <div className="companydropdown group-hover:block dropdown absolute hidden h-auto">
              <ul className="bg-[#f2dcb3] rounded w-[170px] shadow px-2 py-2 mt-1">
                <li className="py-0">
                  <a
                    href="https://www.usmobile.com/networks"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    our network
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.usmobile.com/videos"
                    target="_blank"
                    className="block uppercase spacegroteskbold text-[#1a3073] text-xs hover:text-[#77b3d9] cursor-pointer"
                  >
                    our culture
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.buttoncolor} shop spacegroteskbold text-xs mt-[7px] pr-6`}
            onMouseEnter={() => {
              navHover(".shop");
            }}
            onMouseLeave={() => {
              navLeave(".shop");
            }}
          >
            <Link
              href="https://www.usmobile.com/shop?pageIndex=1"
              target="_blank"
            >
              SHOP
            </Link>
          </div>
          <div
            className={`${styles.buttoncolor} thechatter spacegroteskbold text-xs mt-[7px] pr-6`}
            onMouseEnter={() => {
              navHover(".thechatter");
            }}
            onMouseLeave={() => {
              navLeave(".thechatter");
            }}
          >
            <Link href="https://www.usmobile.com/help" target="_blank">
              CHAT
            </Link>
          </div>
          <div
            className={`${styles.thebutton} thechatbtn spacegrotesklight mr-2`}
            onMouseEnter={() => {
              navbuttonhover(".thechatbtn", ".thechatlabel", ".thechatarrow");
            }}
            onMouseLeave={() => {
              navbuttonleave(".thechatbtn", ".thechatlabel", ".thechatarrow");
            }}
          >
            <Link
              href="https://app.usmobile.com/dashboard/auth"
              target="_blank"
            >
              <span className="flex thechatlabel">
                FREE TRIAL{" "}
                <span className="thechatarrow ml-[3px] mt-[2px]">
                  <GoArrowRight />
                </span>
              </span>
            </Link>
          </div>
          <div
            className={`${styles.thebutton} thesigninbtn spacegrotesklight pr-6`}
            onMouseEnter={() => {
              navbuttonhover(
                ".thesigninbtn",
                ".thesigninlabel",
                ".thesigninarrow"
              );
            }}
            onMouseLeave={() => {
              navbuttonleave(
                ".thesigninbtn",
                ".thesigninlabel",
                ".thesigninarrow"
              );
            }}
          >
            <Link href="https://www.usmobile.com/?ln=true" target="_blank">
              <span className="flex thesigninlabel">
                SIGNIN{" "}
                <span className="thesigninarrow ml-[3px] mt-[2px]">
                  <GoArrowRight />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    template = (
      <div className="flex justify-between h-20 items-center pl-4 pr-8">
        <Link href="/" className="z-10 -my-4 mobilelogo">
          <div className={`${styles.buttoncolor}`}>
            <Image
              src={"/images/nav/usmobile-logo-black.svg"}
              width="94"
              height="58"
              alt="image of the usmobile logo"
              priority={true}
            />
          </div>
        </Link>
        <div className="flex justify-end -my-4 z-30">
          <div className="flex -mr-3 text-black">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {/* ////////// */}
        {/* opened nav */}
        {/* prettier-ignore */}
        <div ref={container} className={ isOpen ? `menu-overlay absolute left-0 top-[-100vh] h-screen w-screen flex justify-between -mt-2 bg-white z-20` : `menu-overlay absolute left-0 top-[-100vh] h-screen w-screen flex justify-between -mt-2 bg-white z-20`}>
          <div className="flex flex-col mt-4 pl-4 ">
            <div className="flex justify-between z-30 mt-1 h-12 backbutton ">
              {mobilemenubackbutton}
            </div>
            <div className="flex flex-col justify-center h-screen bg-white">
              <div className=" z-30 backbutton ">
                {mobilemenutemplate}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (size.width < 768) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, [size.width]);

  return (
    <div
      className={`${
        isPastHero ? `bg-transparent z-[1000]` : `bg-white`
      } fixed max-w-[1440px] w-screen z-[1000]`}
    >
      {template}
    </div>
  );
};

export default Navbar;
