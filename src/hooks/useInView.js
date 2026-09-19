import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // animasi cukup jalan sekali
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
