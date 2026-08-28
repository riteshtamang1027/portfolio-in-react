import { useEffect, useState } from "react";

// Checks if the user has scrolled down
export default function UseScrollPosition(threshold = 8) {
  // Stores whether the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Runs whenever the user scrolls
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check the scroll position when the page loads
    onScroll();

    // Listen for scrolling
    window.addEventListener("scroll", onScroll, { passive: true });

    // Remove the listener when component is removed
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // Returns true or false
  return scrolled;
}
