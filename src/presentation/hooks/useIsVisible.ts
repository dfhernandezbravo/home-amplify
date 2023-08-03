import { RefObject, useEffect, useState } from 'react';

export function useIsVisible(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
