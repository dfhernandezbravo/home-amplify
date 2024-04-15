function isUrlValid(url: string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );
  return pattern.test(url);
}

const useRedirectLink = () => {
  const redirect = (url: string): string => {
    if (!url) return '';

    if (!isUrlValid(url)) return url;

    const newUrl = new URL(url);

    return `${newUrl.pathname}${newUrl.search}`;
  };

  return {
    redirect,
  };
};

export default useRedirectLink;
