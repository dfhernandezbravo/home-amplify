import { RefObject, useEffect, useState } from 'react';

const useIsInViewport = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | undefined>();

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );
    setObserver(newObserver);
  }, []);

  useEffect(() => {
    if (!observer) return;

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { isIntersecting, observer };
};

export default useIsInViewport;
