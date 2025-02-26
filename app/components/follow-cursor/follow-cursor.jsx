"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./styles.module.scss";
import { useAppContext } from "../../context";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Link from "next/link";
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}
export default function BlurryCursor({ isActive = false }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const tl = useRef(null);
  const tl2 = useRef(null);
  const {
    hovering,
    interactiveHovering,
    ishireme,
    setIshireme,
    isswipe,
    isbrands,
    isbrandtooltip,
  } = useAppContext();

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = useCallback(() => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  }, []);

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline().fromTo(
        circle.current,
        {
          scale: 1,
          opacity: 1,
          ease: "power4.Out",
        },
        {
          duration: 0.3,
          scale: 0,
          opacity: 1,
          ease: "power4.Out",
        }
      );
      tl2.current = gsap.timeline().to(circle.current, {
        duration: 0.3,
        scale: 0,
        opacity: 1,
        ease: "power4.Out",
      });
    },
    {
      scope: circle,
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    console.log("sticky-cursor");
    tl.current?.reversed(!hovering);
    tl2.current?.reversed(!interactiveHovering);
  });

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive, animate]);

  let template;

  if (ishireme == false && isswipe == false && isbrands == false) {
    template = (
      <div
        style={{
          filter: `blur(${isActive ? 100 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className={`${styles.freetrialfollower} lexend`}
        ref={circle}
      >
        <span className={`${styles.allononeline} ${styles.freetrialtxt} flex`}>
          {/* <Link
            href="https://www.usmobile.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FREE
            <br />
            TRIAL
          </Link> */}
        </span>
      </div>
    );
  }

  return <div className="relative h-screen">{template}</div>;
}
