"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAppContext } from "../context";
import { MoonIcon, SunIcon } from "./Icons";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { thememode, setthememode } = useAppContext();

  const toggletheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      setthememode("dark");
    } else {
      setthememode("light");
    }
    //setthememode(theme)
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className="Montserrat_Alternates_900" onClick={() => toggletheme()}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
}

export default ThemeSwitch;
