'use client';

import { useEffect, useState, useRef } from 'react';

export function useCountUp(end: number, duration: number = 2500, reverse: boolean = false) {
  const start = reverse ? end * 10 : 0;
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easing function (ease-out-expo)
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentCount = reverse
              ? start - (easeOutExpo * (start - end))
              : easeOutExpo * end;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, reverse, start]);

  return { count, ref };
}
