"use client";

import styles from "./styles.module.scss";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className={`${styles.bgcolor} ${styles.setabove}`}>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
