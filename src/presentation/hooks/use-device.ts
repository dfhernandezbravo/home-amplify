import { useEffect, useState } from 'react';
import useMediaQuery from './useMediaQuery';

export type Device = 'Desktop' | 'Tablet' | 'Phone';
export type OS = 'Desktop' | 'Android' | 'iOS';

type Breakpoints = {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
};

export function useDevice() {
  let device: Device = 'Desktop';
  const [os, setOs] = useState<OS>('Desktop');

  const { isSm, isMd, isLg }: Breakpoints = {
    isSm: useMediaQuery('(max-width: 767px)'),
    isMd: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
    isLg: useMediaQuery('(min-width: 1024px)'),
  };

  if (isSm) device = 'Phone';
  if (isMd) device = 'Tablet';
  if (isLg) device = 'Desktop';

  useEffect(() => {
    const { userAgent } = window.navigator;

    if (userAgent.match(/Android/i)) {
      setOs('Android');
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      setOs('iOS');
    } else {
      setOs('Desktop');
    }
  }, []);

  return {
    device,
    os,
  };
}
