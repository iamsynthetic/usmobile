"use client";

import styles from "./styles.module.scss";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import AlternateHero2 from "../hero/AlternateHero2";
import Missionstatement from "../../sections/section-mission-statement/mission-statement";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = () => {
  const pathname = usePathname();

  console.log("header pathname is: " + pathname);

  const fields = pathname.split("/");
  const first = fields[0];
  const second = fields[1];
  const third = "#" + fields[2];

  console.log("first split is: " + first);
  console.log("second split is:" + second);
  console.log("third split is:" + third);

  return (
    <>
      <header className={`${styles.bgcolor} ${styles.setabove}`}>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
