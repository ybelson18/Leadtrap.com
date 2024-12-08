"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

const Beam = ({
  showBeam = true,
  className,
}: {
  showBeam?: boolean;
  className?: string;
}) => {
  const meteorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentMeteorRef = meteorRef.current;
    if (showBeam && currentMeteorRef) {
      currentMeteorRef.addEventListener("animationend", () => {
        currentMeteorRef.style.visibility = "hidden";
        const animationDelay = Math.floor(Math.random() * (2 - 0) + 0);
        const animationDuration = Math.floor(Math.random() * (4 - 0) + 0);
        const meteorWidth = Math.floor(Math.random() * (150 - 80) + 80);
        currentMeteorRef.style.setProperty("--meteor-delay", `${animationDelay}s`);
        currentMeteorRef.style.setProperty("--meteor-duration", `${animationDuration}s`);
        currentMeteorRef.style.setProperty("--meteor-width", `${meteorWidth}px`);

        restartAnimation();
      });

      currentMeteorRef.addEventListener("animationstart", () => {
        currentMeteorRef.style.visibility = "visible";
      });

      return () => {
        if (currentMeteorRef) {
          currentMeteorRef.removeEventListener("animationend", () => {});
          currentMeteorRef.removeEventListener("animationstart", () => {});
        }
      };
    }
  }, [showBeam, meteorRef]);

  const restartAnimation = () => {
    const meteor = meteorRef.current;
    if (!meteor) return;
    meteor.style.animation = "none";
    void meteor.offsetWidth;
    meteor.style.animation = "";
  };

  return (
    showBeam && (
      <span
        ref={meteorRef}
        className={cn(
          "absolute z-[40] -top-4  h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg]",
          styles.meteor,
          className
        )}
      ></span>
    )
  );
};

export default Beam;
