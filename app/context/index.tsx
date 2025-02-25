"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [thememode, setthememode] = useState("");
  const [isPreloading, setIsPreloading] = useState("ispreloading");

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [abouttitleClicked, setAbouttitleClicked] = useState(false);

  console.log("context - thememode " + thememode);
  return (
    <AppContext.Provider
      value={{
        thememode,
        setthememode,
        isPreloading,
        setIsPreloading,
        scrolledPastHero,
        setScrolledPastHero,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
