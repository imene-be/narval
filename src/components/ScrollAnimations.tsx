"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = Number((entry.target as HTMLElement).dataset.delay ?? 0);
              setTimeout(() => entry.target.classList.add("in-view"), delay);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      elements.forEach((el) => {
        el.classList.remove("in-view");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
