"use client";
import clsx from "clsx";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoCheckmarkOutline } from "react-icons/io5";

type Props = { className?: string };

export default function PerksSection({ className }: Props) {
  const perks = [
    {
      id: 0,
      imgfilename: "perk1.png",
      imgwidth: 397,
      imgheight: 284,
      alt: "image of a cell phone with a music app on and wireless earbuds",
      txtnumber: "01",
      txttitle: "Music",
      txtsubtitle: "Listen to millions of songs ad-free",
      bodycopy: [
        {
          bodycopygroup1: [
            { txtbody: "Slacker Plus LiveXLive" },
            { txtbody: "Pandora Plus" },
            { txtbody: "Audible" },
          ],
          bodycopygroup2: [
            { txtbody: "Spotify Family" },
            { txtbody: "Apple Music Family" },
          ],
        },
      ],
    },
    {
      id: 1,
      imgfilename: "perk2.png",
      imgwidth: "397",
      imgheight: "284",
      alt: "image of a cell phone with the word max on a blue background",
      txtnumber: "02",
      txttitle: "Video",
      txtsubtitle: "Catch all the best movies and shows",
      bodycopy: [
        {
          bodycopygroup1: [
            { txtbody: "Apple TV Plus" },
            { txtbody: "Disney Plus" },
            { txtbody: "Hulu" },
          ],
          bodycopygroup2: [
            { txtbody: "ESPN Plus" },
            { txtbody: "Netflix Standard" },
            { txtbody: "Max" },
          ],
        },
      ],
    },
    {
      id: 2,
      imgfilename: "perk3.png",
      imgwidth: "397",
      imgheight: "284",
      alt: "image of a cell phone connected to a game controller in front of a computer",
      txtnumber: "03",
      txttitle: "Gaming",
      txtsubtitle: "Play online and get free games",
      bodycopy: [
        {
          bodycopygroup1: [
            { txtbody: "PlayStation Plus" },
            { txtbody: "Xbox Gamepass" },
          ],
          bodycopygroup2: [],
        },
      ],
    },
  ];

  const tl1 = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    perks.forEach((perk, index) => {
      console.log("crappy key is: " + perk);
      console.log("crappy index is: " + index);
      gsap.set([`#perks-perk${index}-image`], { opacity: 0, y: "20px" });
      gsap.set([`#perks-perk${index}-bg`], { opacity: 0, y: "20px" });
      gsap.set([`#perks-perk${index}-number`], { opacity: 0, y: "20px" });
      gsap.set([`#perks-perk${index}-title`], { opacity: 0, y: "20px" });
      gsap.set([`#perks-perk${index}-subtitle`], { opacity: 0, y: "20px" });
      gsap.set([`#perks-perk${index}-body`], { opacity: 0, y: "20px" });
    });

    perks.forEach((perk, index) => {
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-image`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-image`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-bg`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-bg`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-number`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-number`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-title`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-title`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-subtitle`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-subtitle`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
      tl1.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#perks-perk${index}-body`,
          pin: false,
          start: "top 60%",
        },
      });
      tl1.current.to(`#perks-perk${index}-body`, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0,
        ease: "Expo.easeInOut",
      });
    });
  });

  return (
    <section
      className={clsx("section-perks mt-[150px] max-w-[1440px]", className)}
      id="perks"
    >
      <div className=" h-[max-content]">
        <div className="flex flex-row max-w-[1440px] px-12">
          <div className="flex flex-col w-screen ">
            <p
              id="features-perk1-sectiontitle"
              className="sectiontitletxt xs:text-[28px] md:text-[48px] xs:leading-tight text-black"
            >
              Perks Too Good To&nbsp;Believe desktop
            </p>
            <p
              id="features-perk1-sectionbody"
              className="sectionbigbodytxt xs:text-[18px] md:text-[20px] xs:mt-6 mr-20 leading-tight text-black"
            >
              Choose from over 10 audio, streaming and gaming services for a $15
              a month credit when you have 3 lines on Unlimited&nbsp;Premium.
            </p>

            {perks.map((perk, index) => (
              <div key={index}>
                <div className="flex flex-row w-[100%] mt-12">
                  <div
                    id={`perks-perk${perk.id}-image`}
                    className="min-w-[450px]"
                  >
                    <Image
                      src={`/images/perks/${perk.imgfilename}`}
                      width={perk.imgwidth as number}
                      height={perk.imgheight as number}
                      alt={perk.alt}
                      priority={true}
                    />
                  </div>
                  <div
                    id={`perks-perk${perk.id}-bg`}
                    className="flex flex-row w-full rounded-2xl xs:px-4 md:px-4 xl:px-8 bg-[#C7E2F3]"
                  >
                    <div className="flex flex-row w-full m-auto">
                      <div
                        id={`perks-perk${perk.id}-number`}
                        className="flex w-20 spacegrotesk text-3xl text-black"
                      >
                        {perk.txtnumber}
                      </div>
                      <div className="flex flex-col w-full">
                        <div
                          id={`perks-perk${perk.id}-title`}
                          className="flex w-full spacegroteskbold text-3xl text-black"
                        >
                          {perk.txttitle}
                        </div>
                        <div
                          id={`perks-perk${perk.id}-subtitle`}
                          className="flex w-full spacegroteskbold text-xl text-black"
                        >
                          {perk.txtsubtitle}
                        </div>
                        <div
                          id={`perks-perk${perk.id}-body`}
                          className="flex flex-row mt-3 text-black"
                        >
                          {perk.bodycopy.map((bodygroup, subindex) => (
                            <div key={subindex} className="flex flex-row">
                              <div>
                                {bodygroup.bodycopygroup1.map(
                                  (bodytext, subsubindex) => (
                                    <div
                                      key={subsubindex}
                                      className="flex flex-row"
                                    >
                                      <div className="flex text-xl mt-1 mr-1">
                                        <IoCheckmarkOutline />
                                      </div>
                                      <div className="flex w-full spacegrotesk text-xl">
                                        {bodytext.txtbody}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                              <div className="xs:ml-5 md:ml-8 xl:ml-24">
                                {bodygroup.bodycopygroup2.map(
                                  (bodytext, subsubindex) => (
                                    <div
                                      key={subsubindex}
                                      className="flex flex-row"
                                    >
                                      <div className="flex text-xl mt-1 mr-1">
                                        <IoCheckmarkOutline />
                                      </div>
                                      <div className="flex w-full spacegrotesk text-xl">
                                        {bodytext.txtbody}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
