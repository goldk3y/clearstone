"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiCloseLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PERCENT = 50;

export function StickyCTA() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsPastThreshold(scrollPercent > SCROLL_THRESHOLD_PERCENT);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const isVisible = isPastThreshold && !isDismissed;

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2",
        "animate-in slide-in-from-bottom-4 fade-in duration-300"
      )}
    >
      <Button
        asChild
        size="lg"
        className="h-12 px-6 text-base bg-brand hover:bg-brand/90 text-brand-foreground shadow-lg"
      >
        <Link href="#book">
          Book a call
          <RiArrowRightLine className="ml-2 size-4" />
        </Link>
      </Button>
      <button
        onClick={() => setIsDismissed(true)}
        className="flex size-10 items-center justify-center bg-background border border-border shadow-lg hover:bg-muted transition-colors"
        aria-label="Dismiss"
      >
        <RiCloseLine className="size-5 text-muted-foreground" />
      </button>
    </div>
  );
}
