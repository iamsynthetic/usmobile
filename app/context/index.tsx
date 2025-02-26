"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [thememode, setthememode] = useState("");
  const [isPreloading, setIsPreloading] = useState("ispreloading");

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [abouttitleClicked, setAbouttitleClicked] = useState(false);
  const [ishireme, setIshireme] = useState(false);
  const [isswipe, setIsswipe] = useState(false);
  const [isbrands, setIsbrands] = useState(false);
  const [interactiveHovering, setInteractivevHovering] = useState(false);

  console.log("context - thememode " + thememode);
  return (
    <AppContext.Provider
      value={{
        abouttitleClicked,
        setAbouttitleClicked,
        ishireme,
        setIshireme,
        isswipe,
        setIsswipe,
        isbrands,
        setIsbrands,
        thememode,
        setthememode,
        isPreloading,
        setIsPreloading,
        scrolledPastHero,
        setScrolledPastHero,
        interactiveHovering,
        setInteractivevHovering,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
