import { useEffect, useState } from 'react';

const useSmartBannerTime = (timeNow: number): boolean => {
  const [expired, setExpired] = useState<boolean>(true);

  const timeToShow = typeof window !== 'undefined' &&  sessionStorage.getItem('showBanner');
    
  useEffect(() => {
    if (timeToShow) {
      if (timeNow > parseInt(timeToShow)) {
        setExpired(true);
      } else {
        setExpired(false);
      }
    } else {
      sessionStorage.setItem('showBanner', timeNow.toString());
    }
  }, [timeToShow, timeNow]);

  return expired;
};

export default useSmartBannerTime;
