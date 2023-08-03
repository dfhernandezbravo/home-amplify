import { useEffect, useState } from 'react';

interface Props {
  minHeight: number;
}

const useScrollYPosition = ({ minHeight }: Props) => {
  const [isOverScroll, setIsOverScroll] = useState(false);

  useEffect(() => {
    const handler = () => setIsOverScroll(window.scrollY > minHeight);
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, [minHeight]);

  return {
    isOverScroll,
  };
};
export default useScrollYPosition;
