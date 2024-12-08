"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { CSSProperties, useRef, useState } from "react";

export const GradientContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const limitedScrollYProgress = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 1]
  );

  const [percentage, setPercentage] = useState(0);
  useMotionValueEvent(limitedScrollYProgress, "change", (latest) => {
    const newPercentage = Math.min(
      100,
      Math.max(0, (latest - 0.1) * (100 / 0.9))
    );
    setPercentage(newPercentage);
  });

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(
      45deg, 
      hsl(var(--primary)) 0%, 
      hsl(var(--primary) / 0.9) 50%, 
      hsl(var(--primary) / 0.8) 100%
    )`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div
      ref={ref}
      className={cn("relative z-20", className)}
    >
      <motion.div
        className={`w-full h-[var(--conic-size)] mb-[calc(-1*var(--conic-size))] 
        pointer-events-none select-none relative z-0
        after:content-['']
        after:absolute
        after:inset-0
        after:bg-gradient-to-b
        after:from-transparent
        after:to-[var(--charcoal)]
        after:opacity-100
        `}
        style={{
          ...gradientStyle,
          opacity: 0.901567,
        }}
      />
      {children}
    </div>
  );
};
