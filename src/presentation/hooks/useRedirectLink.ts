const useRedirectLink = () => {
  const redirect = (url: string): string => {
    if (!url) return '';

    const newUrl = new URL(url);

    return newUrl.pathname;
  };

  return {
    redirect,
  };
};

export default useRedirectLink;
