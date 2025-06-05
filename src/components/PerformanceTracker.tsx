"use client";

import { useEffect } from "react";
import { initPerformanceTracking } from "@/lib/performance";

/**
 * Performance tracking component
 * Initializes Core Web Vitals and performance monitoring
 */
export default function PerformanceTracker() {
  useEffect(() => {
    // Initialize performance tracking on the client
    initPerformanceTracking();

    // Set up additional performance monitoring
    if (typeof window !== "undefined") {
      // Monitor for slow network requests
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          const navigationEntry = entry as PerformanceNavigationTiming;

          // Log slow page loads
          const loadTime =
            navigationEntry.loadEventEnd - navigationEntry.fetchStart;
          if (loadTime > 3000) {
            console.warn("[Performance] Slow page load detected:", {
              loadTime: loadTime,
              domContentLoaded:
                navigationEntry.domContentLoadedEventEnd -
                navigationEntry.fetchStart,
              networkTime:
                navigationEntry.responseEnd - navigationEntry.fetchStart,
            });
          }
        }
      });

      if ("observe" in observer) {
        observer.observe({ entryTypes: ["navigation"] });
      }

      // Clean up observer on unmount
      return () => {
        if ("disconnect" in observer) {
          observer.disconnect();
        }
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
