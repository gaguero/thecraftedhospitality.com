/**
 * Performance monitoring utility for Core Web Vitals
 * Tracks CLS, FID, FCP, LCP, and TTFB metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  timestamp: number;
}

// Core Web Vitals thresholds
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Rate a performance metric value
 */
function getRating(
  name: keyof typeof THRESHOLDS,
  value: number
): "good" | "needs-improvement" | "poor" {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return "good";
  if (value <= threshold.poor) return "needs-improvement";
  return "poor";
}

/**
 * Send metric to console (can be extended to send to analytics)
 */
function sendToAnalytics(metric: PerformanceMetric) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Performance] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      timestamp: new Date(metric.timestamp).toISOString(),
    });
  }

  // TODO: Send to actual analytics service in production
  // Example: gtag('event', metric.name, { value: metric.value, rating: metric.rating });
}

/**
 * Get Web Vitals using the web-vitals library pattern
 */
export function trackWebVitals() {
  if (typeof window === "undefined") return;

  // Track FCP (First Contentful Paint)
  if ("PerformanceObserver" in window) {
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (
          entry.entryType === "paint" &&
          entry.name === "first-contentful-paint"
        ) {
          const metric: PerformanceMetric = {
            name: "FCP",
            value: entry.startTime,
            rating: getRating("FCP", entry.startTime),
            timestamp: Date.now(),
          };
          sendToAnalytics(metric);
        }
      }
    }).observe({ entryTypes: ["paint"] });

    // Track LCP (Largest Contentful Paint)
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const metric: PerformanceMetric = {
          name: "LCP",
          value: lastEntry.startTime,
          rating: getRating("LCP", lastEntry.startTime),
          timestamp: Date.now(),
        };
        sendToAnalytics(metric);
      }
    }).observe({ entryTypes: ["largest-contentful-paint"] });

    // Track CLS (Cumulative Layout Shift)
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }

      const metric: PerformanceMetric = {
        name: "CLS",
        value: clsValue,
        rating: getRating("CLS", clsValue),
        timestamp: Date.now(),
      };
      sendToAnalytics(metric);
    }).observe({ entryTypes: ["layout-shift"] });

    // Track FID (First Input Delay)
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const metric: PerformanceMetric = {
          name: "FID",
          value: (entry as any).processingStart - entry.startTime,
          rating: getRating(
            "FID",
            (entry as any).processingStart - entry.startTime
          ),
          timestamp: Date.now(),
        };
        sendToAnalytics(metric);
      }
    }).observe({ entryTypes: ["first-input"] });
  }

  // Track TTFB (Time to First Byte)
  if ("performance" in window && "getEntriesByType" in window.performance) {
    const navigationEntries = window.performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navEntry.responseStart - navEntry.requestStart;

      const metric: PerformanceMetric = {
        name: "TTFB",
        value: ttfb,
        rating: getRating("TTFB", ttfb),
        timestamp: Date.now(),
      };
      sendToAnalytics(metric);
    }
  }
}

/**
 * Track page load performance
 */
export function trackPageLoad() {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    // Use modern Performance API if available, fallback to legacy timing
    if ("getEntriesByType" in window.performance) {
      const navigationEntries =
        window.performance.getEntriesByType("navigation");
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        const loadTime = navEntry.loadEventEnd - navEntry.fetchStart;
        const domContentLoaded =
          navEntry.domContentLoadedEventEnd - navEntry.fetchStart;

        console.log(`[Performance] Page Load Time: ${loadTime}ms`);
        console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
      }
    } else {
      // Fallback for older browsers with legacy timing API
      const timing = (window.performance as any).timing;
      if (timing) {
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domContentLoaded =
          timing.domContentLoadedEventEnd - timing.navigationStart;

        console.log(`[Performance] Page Load Time: ${loadTime}ms`);
        console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
      }
    }
  });
}

/**
 * Monitor resource loading performance
 */
export function trackResourceLoading() {
  if (typeof window === "undefined") return;

  if ("PerformanceObserver" in window) {
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const resourceEntry = entry as PerformanceResourceTiming;

        // Track slow resources (> 1s)
        if (resourceEntry.duration > 1000) {
          console.warn(`[Performance] Slow resource detected:`, {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            type: resourceEntry.initiatorType,
          });
        }
      }
    }).observe({ entryTypes: ["resource"] });
  }
}

/**
 * Initialize all performance tracking
 */
export function initPerformanceTracking() {
  if (typeof window === "undefined") return;

  trackWebVitals();
  trackPageLoad();
  trackResourceLoading();

  console.log("[Performance] Performance tracking initialized");
}
