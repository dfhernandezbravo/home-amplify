const useRedirectLink = () => {
  const redirect = (url: string): string => {
    const newUrl = new URL(url);

    return newUrl.pathname;
  };

  return {
    redirect,
  };
};

export default useRedirectLink;
