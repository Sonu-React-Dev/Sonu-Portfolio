"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "./SmoothScroll";
import { ScrollProgress } from "./ScrollProgress";
import Navbar from "../Navbar";
import { CustomCursor } from "../cursor/CustomCursor";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <div className="noise" />
        <Navbar />
        {children}
      </SmoothScroll>
    </MotionConfig>
  );
}
