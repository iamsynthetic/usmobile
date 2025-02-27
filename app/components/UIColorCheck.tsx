"use client";
import { useAppContext } from "../context";

function UIColorCheck() {
  const { thememode, setthememode } = useAppContext();

  let switchit = "dracula";

  if (thememode === "dark") {
    switchit = "pastel";
  } else {
    switchit = "dracula";
  }
}

export function switchit() {
  return switchit;
}
