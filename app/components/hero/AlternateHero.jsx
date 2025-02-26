"use client";
import React from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlternateHero() {
  return (
    <>
      {/* prettier-ignore */}
      <section className={`theherocontainer h-screen bg-red-800`}>
        test
      </section>
    </>
  );
}
