import { RefObject, useEffect, useMemo, useState } from 'react';

const useIsInViewport = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          threshold: 0.3,
        },
      ),
    [],
  );

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { isIntersecting, observer };
};

export default useIsInViewport;
