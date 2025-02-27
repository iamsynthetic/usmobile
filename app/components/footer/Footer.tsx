"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

type Props = { className?: string };

export default function Footer({ className }: Props) {
  const size = useWindowSize();
  const [isMobileSize, setIsMobileSize] = useState(false);

  let template;

  if (isMobileSize === false) {
    template = (
      <div className="flex flex-row bg-[#C7E2F3]">
        <div className="flex flex-col w-screen ml-auto mr-auto max-w-[1440px] bg-[#C7E2F3]">
          <div className="flex flex-row w-[100%] px-12">
            <div className="min-w-[250px] mt-24">
              <Image
                src={"/images/nav/usmobile-logo-black.svg"}
                width="194"
                height="120"
                alt="image of a cell phone with a music app on and wireless earbuds"
                priority={true}
              />
            </div>
            <div className="flex flex-row w-full rounded-2xl mt-24 ">
              <div className="flex flex-row w-full m-auto">
                <div className="flex flex-col w-full">
                  <div className="flex sectiontitletxt leading-tight ">
                    <p className="text-black">
                      No&nbsp;Slowdown. No&nbsp;Borders. No&nbsp;Limits.
                    </p>
                  </div>

                  <div className="grid grid-cols-10 gap-4 mt-14 text-black">
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div className="flex flex-row">
                        <div className="flex w-full lexend  text-2xl">
                          Plans
                        </div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex w-full spacegrotesk text-md">
                          mobile
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          landline
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          business mobile
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          business landline
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          Apple Watch
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          international&nbsp;data
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Benefits
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Getting Started
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Personalized Plans
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            The Fastest 5G
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            eSim Simplified
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Referral Program
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Company
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            About
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Blog
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Our Network
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Our Culture
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Interact
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Affiliate
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Reviews
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Parents
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Press
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Jobs
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            FAQ
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Connect
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Inc.
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            X
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            LinkedIn
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Facebook
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Instagram
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-44 mb-5 px-12">
            <div className="flex flex-row w-full align-bottom">
              <div className="flex flex-row w-full justify-between items-end">
                <div
                  className={` privacy spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                >
                  C 2025 US MOBILE ALL RIGHTS RESERVED
                </div>
                <div className="flex sectiontitletxt leading-tight ">
                  <div className="flex flex-row">
                    <div
                      className={` privacy spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">PRIVACY</Link>
                    </div>
                    <div
                      className={` terms spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">TERMS</Link>
                    </div>
                    <div
                      className={` return spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">RETURN</Link>
                    </div>
                    <div
                      className={` shop spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">SHOP</Link>
                    </div>
                    <div
                      className={` spacegrotesk text-xs mt-[7px] group relative cursor-pointer`}
                    >
                      <Link href="/tags">CHAT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    template = (
      <div className="flex flex-col">
        <div className="flex flex-col w-screen ml-auto mr-auto max-w-[1440px] bg-[#C7E2F3]">
          <div className="flex flex-col flex-wrap w-[100%]">
            <div className="min-w-[300px] mt-24">
              <Image
                src={"/images/nav/usmobile-logo-black.svg"}
                width="194"
                height="120"
                alt="image of a cell phone with a music app on and wireless earbuds"
                priority={true}
              />
            </div>
            <div className="flex flex-row w-full rounded-2xl text-black xs:px-4 md:px-4 xl:px-8 xs:mt-20">
              <div className="flex flex-row w-full m-auto">
                <div className="flex flex-col w-full">
                  <div className="flex w-full  sectiontitletxt">
                    <p className="text-black">
                      No&nbsp;Slowdown. No&nbsp;Borders. No&nbsp;Limits.
                    </p>
                  </div>
                  <div className="grid grid-cols-10 gap-4 mt-14">
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div className="flex flex-row">
                        <div className="flex w-full lexend text-2xl">Plans</div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex w-full spacegrotesk text-md">
                          mobile
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          landline
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          business mobile
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          business landline
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          Apple Watch
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex w-full spacegrotesk text-md">
                          international&nbsp;data
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Benefits
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Getting Started
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Personalized Plans
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            The Fastest 5G
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            eSim Simplified
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Referral Program
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Company
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            About
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Blog
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Our Network
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Our Culture
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Interact
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Affiliate
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Reviews
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Parents
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Press
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Jobs
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            FAQ
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-5 lg:col-span-3 xl:col-span-2">
                      <div>
                        <div className="flex flex-row">
                          <div className="flex w-full lexend  text-2xl">
                            Connect
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex w-full spacegrotesk text-md">
                            Inc.
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            X
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            LinkedIn
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Facebook
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="flex w-full spacegrotesk text-md">
                            Instagram
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-28 mb-5 xs:pr-8 xs:pl-1 md:pr-0 md:pl-0">
            <div className="flex flex-row w-full align-bottom">
              <div className="flex flex-row w-full justify-between items-end">
                <div
                  className={` privacy spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer text-black`}
                >
                  C 2025 US MOBILE ALL RIGHTS RESERVED
                </div>
                <div className="flex sectiontitletxt flex-col justify-end leading-tight">
                  <div className="flex flex-row">
                    <div
                      className={` privacy spacegrotesk text-xs mt-[7px] xs:pr-7 md:pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">PRIVACY</Link>
                    </div>
                    <div
                      className={` terms spacegrotesk text-xs mt-[7px] pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">TERMS</Link>
                    </div>
                    <div
                      className={` return spacegrotesk text-xs mt-[7px] xs:pr-[26px] md:pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">RETURN&nbsp;</Link>
                    </div>
                    <div
                      className={` shop spacegrotesk text-xs mt-[7px] xs:pr-[20px] md:pr-6 group relative cursor-pointer`}
                    >
                      <Link href="/tags">SHOP</Link>
                    </div>
                    <div
                      className={` spacegrotesk text-xs mt-[7px] group relative cursor-pointer`}
                    >
                      <Link href="/tags">CHAT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (size.width < 1024) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, [size.width]);

  return (
    <section
      className={clsx("section-footer mt-[150px] max-w-[1440px]", className)}
      id="footer"
    >
      <div className="w-screen h-[max-content]">{template}</div>
    </section>
  );
}
