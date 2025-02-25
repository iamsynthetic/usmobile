"use client";

import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../context";
import { CustomEase } from "gsap/dist/CustomEase";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GoArrowRight } from "react-icons/go";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  tags?: boolean;
}

const Hero = () => {
  const customBounceEase = new CustomEase(
    "customBounce",
    "0, 0, 0.5, 1, 0.9, 1.1, 1, 1"
  );
  const hop = CustomEase.create(
    "ease",
    "M0,0 C0.29,0 0.348, 0.05 0.422, 0.134 0.494, 0.217 0.484, 0.355, 0.5, 0.5 0.518, 0.622 0.515, 0.793 0.596, 0.876 0.701, 0.983 0.72, 0.987 1, 1"
  );
  // const hop = new CustomEase(
  //   "hop",
  //   "M0,0 C0.29,0 0.348, 0.05 0.422, 0.134 0.494, 0.217 0.484, 0.355, 0.5, 0.5 0.518, 0.622 0.515, 0.793 0.596, 0.876 0.701, 0.983 0.72, 0.987 1, 1"
  // );

  const { setScrolledPastHero } = useAppContext();
  const pathname = usePathname();
  const tl1 = useRef<GSAPTimeline | null>(null);
  const tl2 = useRef<GSAPTimeline | null>(null);
  const tl3 = useRef<GSAPTimeline | null>(null);
  const tl4 = useRef<GSAPTimeline | null>(null);
  const tl5 = useRef<GSAPTimeline | null>(null);
  const splittitle = useRef<HTMLDivElement>(null);

  const menucolor = "#f2dcb3";
  const menuhovercolor = "#1a3073";
  const buttoncolor = "#000000";

  // function splitTextIntoSpans(selector){
  //   let elements = document.querySelectorAll(selector);
  // }

  function shuffle(array: any[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function animateTitle(classname: string, newclassname: string) {
    gsap.set(classname, {
      opacity: 1,
    });
    let splittitle2 = document.querySelector(classname);
    let letters = splittitle2?.textContent!.split("");

    let myarray: Array<string> = [];

    if (splittitle2) {
      splittitle2!.textContent = "";
    }
    letters?.forEach((letter, index) => {
      splittitle2!.innerHTML += `<span class=${newclassname + index}>${letter}</span>`;
      myarray.push(`${newclassname + index}`);
      gsap.set(`${newclassname + index}`, {
        opacity: 0,
      });
    });

    if (letters != null && letters != undefined) {
      let random = gsap.utils.random(0, myarray.length - 1, 1);

      //check array first
      console.log("myarray is: " + myarray);

      //push array into shuffle
      shuffle(myarray);

      //animates all items but at the same time
      myarray.forEach((item, index) => {
        gsap.fromTo(
          `${"." + item}`,
          { opacity: 0 },
          { opacity: 1, delay: index * 0.02 }
        );
      });
    }
  }

  function navbuttonhover(element: string, label: string, arrow: string) {
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

  function navbuttonleave(element: string, label: string, arrow: string) {
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

  function animateAllTitles() {
    animateTitle(".thetitle", "title1");
    // animateTitle(".contact-title2", "contact2");
  }

  const backgroundref = useRef<HTMLDivElement>(null);
  const imageref = useRef<HTMLImageElement>(null);
  const headlineref = useRef<HTMLDivElement>(null);
  const subheadref = useRef<HTMLDivElement>(null);
  const bodytxtref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // gsap.set(".theherocontainer", { opacity: 0 });
    // gsap.set(".thecontentcontainer", { opacity: 0 });
    // gsap.set(".thewhitebglayer", { opacity: 0 });
    // gsap.set(".thecounter", { opacity: 0 });
    // gsap.set(".thehero", { opacity: 0 });
    // gsap.set(".thetitle", { opacity: 0 });
    // gsap.set(".theheroimg", { opacity: 0 });

    gsap.set(".thewhitebglayer", {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    tl1.current = gsap.timeline().to(".thewhitebglayer", {
      scaleY: 1,
      duration: 1.25,
      delay: 4,
      ease: "Expo.easeInOut",
    });
    tl1.current
      .fromTo(
        backgroundref.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          delay: -1,
          ease: "Quint.easeInOut",
        }
      )
      .from(imageref.current, {
        y: "50vh",
        duration: 1,
        delay: -1,
        ease: "Quint.easeInOut",
      });

    // animateAllTitles();
    // gsap.set(".theoverlay", {
    //   clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%",
    // });
    // tl1.current = gsap.timeline();
    // .to(".theoverlay", {
    //   // clipPath: "polygon(10% 0%, 90% 0%, 90% 0%, 10% 0%)",
    //   // clipPath: "polygon(10% 50%, 90% 50%, 90% 100%, 10% 100%)",
    //   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //   duration: 1,
    //   ease: "Quint.easeIn",
    // })
    // .to(".theoverlay", {
    //   // clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)",
    //   clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //   y: "-100vh",
    //   duration: 5,
    //   ease: "Quint.easeOut",
    //   delay: 0,
    // });
    // theoverlaymask
    // tl2.current = gsap.timeline().to(".theoverlaymask", {
    //   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //   duration: 10,
    //   ease: "Quint.easeOut",
    // });
    // .to(".theoverlay", {
    //   opacity: 0,
    //   duration: 2,
    //   ease: "Quint.easeOut",
    //   delay: -0,
    // });
    // .to(".theoverlay", {
    //   clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //   duration: 1,
    //   ease: "Expo.easeInOut",
    //   delay: -0.4,
    // });
    // gsap.from(".theherocontainer", {
    //   clipPath: `inset(10%)`,
    //   duration: 2,
    //   ease: "expo.easeInOut",
    //   onStart: () => {
    //     gsap.to(".thehero", {
    //       transform: "translate(-50%, -50%) scale(1)",
    //       duration: 2.25,
    //       ease: "power3.inOut",
    //       delay: 0.25,
    //     });
    //     gsap.to(".theoverlay", {
    //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //       duration: 2,
    //       ease: "Quint.easeInOut",
    //       delay: 0.5,
    //     });
    //     gsap.to(".theoverlay", {
    //       clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //       duration: 2,
    //       ease: "Quint.easeInOut",
    //       delay: 0.5,
    //     });
    //     gsap.to(".theheroimg", {
    //       transform: "scale(1)",
    //       duration: 2.25,
    //       ease: "power3.inOut",
    //       delay: 0.25,
    //     });
    //     gsap.to(".thetitle", {
    //       y: 0,
    //       stagger: 0.1,
    //       duration: 2,
    //       ease: "power4.inOut",
    //       delay: 0.75,
    //     });
    //   },
    // });
    // gsap.to(".theherocontainer", {
    //   clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    //   duration: 2,
    //   delay: 1,
    //   ease: "Quint.easeIn",
    // onStart: () => {
    //   gsap.to("hero", {
    //     transform: "translate(-50%, -50%) scale(1)",
    //     duration: 2.25,
    //     ease: "power3.inOut",
    //     delay: 0.25,
    //   });
    //   gsap.to(".theoverlay", {
    //     clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //     duration: 2,
    //     ease: "Quint.easeIn",
    //     delay: 0.5,
    //   });
    //   gsap.to(".theheroimg", {
    //     transform: "scale(1)",
    //     duration: 2.25,
    //     ease: "power3.inOut",
    //     delay: 0.25,
    //   });
    //   gsap.to(".thetitle", {
    //     y: 0,
    //     stagger: 0.1,
    //     duration: 2,
    //     ease: "power4.inOut",
    //     delay: 0.75,
    //   });
    // },
    // });
    // tl1.current = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".thehero",
    //     markers: false,
    //     pin: false,
    //     start: "bottom bottom",
    //     end: "96%",
    //     onLeave: () => {
    //       setScrolledPastHero(true);
    //     },
    //     onEnter: () => {
    //       setScrolledPastHero(false);
    //     },
    //     onEnterBack: () => {
    //       setScrolledPastHero(false);
    //     },
    //   },
    // });
  });

  useEffect(() => {}, []);

  return (
    <>
      {/* prettier-ignore */}
      <section className={`${styles.bgcolor} theherocontainer flex flex-col max-w-[1440px] w-screen xs:h-[50vh] md:h-[70vh] lg:h-[90vh] overflow-hidden`}>
        <div className={`${styles.contentcontainer} thecontentcontainer flex flex-col h-full w-full`}>
        <div className={`${styles.headertxt} text-center lexend uppercase xs:text-[28px] md:text-[40px] max-w-[1440px] xs:leading-tight text-black`} ref={headlineref}>usmobile</div>
            <div className={`${styles.subtxt1} text-center lexend uppercase xs:text-[28px] md:text-[40px] max-w-[1440px] xs:leading-tight text-black`} ref={subheadref}>Switch Between Carriers, Instantly.</div>    
            <div className={`${styles.subtxt1} text-center spacegrotesk uppercase xs:text-[20px] md:text-[26px] max-w-[1440px] xs:leading-tight text-black`} ref={bodytxtref}>Seamlessly move between networks with ease, 
            ensuring you’re always connected no matter where you are.</div>
          <div className={`${styles.whitebglayer} thewhitebglayer flex flex-col justify-center h-full w-full bg-purple-400`} />
          <div className={`${styles.backgroundImage2} absolute bottom-0 xs:h-[20vh] md:h-[30vh] lg:h-[45vh] w-full bg-green-400` } ref={backgroundref}>
            <Image 
                src={'/images/hero/hero-img4.jpg'}
                fill={true}
                alt="background image"
                priority={true}
            />
          </div>
        </div>






        {/* <div className={`${styles.contentcontainer} thecontentcontainer flex flex-col h-full w-full`}>
          <div className={`${styles.whitebglayer} thewhitebglayer flex flex-col justify-center h-full w-full bg-purple-400`} />
          
          <div className="absolute flex flex-col justify-center items-center w-full h-[max-content] mt-24 bg-green-400">
            <div className={`${styles.headertxt} text-center lexend uppercase xs:text-[28px] md:text-[40px] max-w-[1440px] xs:leading-tight text-black`} ref={headlineref}>usmobile</div>
            <div className={`${styles.subtxt1} text-center lexend uppercase xs:text-[28px] md:text-[40px] max-w-[1440px] xs:leading-tight text-black`} ref={subheadref}>Switch Between Carriers, Instantly.</div>    
            <div className={`${styles.subtxt1} text-center spacegrotesk uppercase xs:text-[20px] md:text-[26px] max-w-[1440px] xs:leading-tight text-black`} ref={bodytxtref}>Seamlessly move between networks with ease, 
            ensuring you’re always connected no matter where you are.</div>

            <div className="flex flex-col text-center justify-end items-end w-full bg-red-400">Seamlessly move between networks with ease, ensuring you’re always connected no matter where you are.2</div>
          </div> */}

          {/* <div className={`${styles.backgroundImage2} absolute flex flex-row h-[30vh] w-full justify-end items-end` } ref={backgroundref}>
                <Image 
                    src={'/images/hero/hero-img4.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div> */}

          {/* <div className={`${styles.backgroundImage3} absolute flex flex-row h-[30vh] w-full justify-end items-end`} ref={backgroundref}>
            <Image
              ref={imageref}
              src={"/images/hero/hero-img4.jpg"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", }}
              alt="background image"
              priority={true}
            />
          </div> */}

        {/* <div className={`relative align-middle`} ref={netflixgraffitibgref}>
          <Image
            className={`thegraphic`}
            src={"/spray-poster-3-1440x900.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", textAlign: "center" }}
            alt="background image"
            priority={true}
          />
        </div> */}




        {/* <Image
          className={`${styles.heroimg} theheroimg bg-orange-200`}
          src={"/images/hero/herophone3-b.jpg"}
          width="1440"
          height="900"
          alt="image of a mobile phone with a screen and a call icon"
          priority={true}
          />*/}
        {/* </div>  */}
        {/* <div className="flex flex-col justify-center items-center h-full w-full bg-pink-400">
          centered
        </div> */}
        
        
        {/* <div className={`${styles.contentcontainer} thecontentcontainer w-screen h-screen overflow-hidden bg-purple-900`}>

        </div> */}









         {/* <div className={`${styles.herocontainer} theherocontainer bg-purple-900`}>
           <div className={`${styles.herocontentcontainer} theherocontentcontainer mt-20 bg-teal-600 `}>
             <div className={`${styles.counter} thecounter`}>0</div>
             <div className={`${styles.hero} thehero bg-green-400`}>
            
               <div className={`${styles.overlay} theoverlay`}></div>
               <div className={`${styles.header}`}>
               </div>
               <div className={`${styles.heroimgcontainer}`}>
               <div className={`${styles.headertxt} thetitle lexend uppercase`}>usmobile</div>
                 <Image
                   className={`${styles.heroimg} theheroimg bg-orange-200`}
                   src={"/images/hero/herophone3-b.jpg"}
                   width="1440"
                   height="900"
                   alt="image of a mobile phone with a screen and a call icon"
                   priority={true}
                   />
               </div>
             </div>
           </div>
         </div> */}
      </section>
    </>
  );
};

export default Hero;
