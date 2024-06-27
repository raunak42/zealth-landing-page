import React, { useEffect, useRef, useState } from "react";

interface InViewWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const InViewWrapper: React.FC<InViewWrapperProps> = ({
  children,
  threshold = 0.4,
  rootMargin = "0px",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenInView(true);
          // Once the element has been in view, we can stop observing it
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        hasBeenInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};  