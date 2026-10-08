"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

interface SmartImageProps extends Omit<ImageProps, "onError"> {
  fallback?: string;
}

export function SmartImage({ className, fallback = "/fallback.webp", alt, src, ...props }: SmartImageProps) {
  const [error, setError] = React.useState(false);

  return (
    <Image
      alt={alt}
      className={cn("transition-opacity duration-300", className)}
      onError={() => setError(true)}
      src={error ? fallback : src}
      {...props}
    />
  );
}
