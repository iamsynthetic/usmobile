"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Plans from "./sections/section-plans/plans";
import AboutStory from "./sections/section-about-story/about-story";
import AboutStoryMobile from "./sections/section-about-story/about-story-mobile";
import WhatSetsUsApart from "./sections/section-what-sets-us-apart/what-sets-us-apart";
import WhatSetsUsApartMobile from "./sections/section-what-sets-us-apart/what-sets-us-apart-mobile";
import Features from "./sections/section-features/features";
import FeaturesMobile from "./sections/section-features/features-mobile";
import Perks from "./sections/section-perks/perks";
import PerksMobile from "./sections/section-perks/perks-mobile";
import MobileApp from "./sections/section-mobile-app/mobile-app";
import MobileAppMobile from "./sections/section-mobile-app/mobile-app-mobile";
import Tesetimonials from "./sections/section-testimonials/testimonials";
import Signup from "./sections/section-signup/signup";
import CardsSlide from "./components/cardsslide/cards-slide";

export default function Home() {
  const size = useWindowSize();
  const [isMobileSize, setIsMobileSize] = useState(false);

  let aboutstory;
  let whatsetsusapart;
  let features;
  let perks;
  let mobileapp;

  if (isMobileSize === false) {
    aboutstory = <AboutStory />;
    whatsetsusapart = <WhatSetsUsApart />;
    features = <Features />;
    perks = <Perks />;
    mobileapp = <MobileApp />;
  } else {
    aboutstory = <AboutStoryMobile />;
    whatsetsusapart = <WhatSetsUsApartMobile />;
    features = <FeaturesMobile />;
    perks = <PerksMobile />;
    mobileapp = <MobileAppMobile />;
  }

  useEffect(() => {
    if (size.width < 1024) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, [size.width]);

  return (
    <>
      <div className="main-content">
        <Header />
      </div>
      <div className="alternatehero">
        <Hero />
      </div>
      <div className="main-content">
        <Plans />
        {aboutstory}
        <CardsSlide />
        {whatsetsusapart}
        {features}
        {perks}
        {mobileapp}
        <Tesetimonials />
        <Signup />
      </div>
      <Footer />
    </>
  );
}
