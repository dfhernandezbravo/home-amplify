const useLinks = () => {
  const getLink = (href: string) => {
    const isHybridation = localStorage.getItem('isHybridation');
    return isHybridation ? '' : href;
  };

  const sendEvent = (href: string) => {
    const isHybridation = localStorage.getItem('isHybridation');
    if (isHybridation) {
      window.parent.postMessage({ HEADLESS_ROUTER: href }, '*');
    }
  };

  return {
    getLink,
    sendEvent,
  };
};

export default useLinks;
