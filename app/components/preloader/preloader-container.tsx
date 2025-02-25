"use client";
import Preloader from "./Preloader";
import { useAppContext } from "../../context";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PreloaderContainer() {
  const { isPreloading, setIsPreloading } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 2000);
  });

  return (
    <AnimatePresence mode="wait">
      {isPreloading && <Preloader />}
    </AnimatePresence>
  );
}
