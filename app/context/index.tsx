"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [thememode, setthememode] = useState("");
  const [isPreloading, setIsPreloading] = useState("ispreloading");

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [planssectionInView, setPlanssectionInView] = useState(false);
  const [interactiveHovering, setInteractivevHovering] = useState(false);
  return (
    <AppContext.Provider
      value={{
        planssectionInView,
        setPlanssectionInView,
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
