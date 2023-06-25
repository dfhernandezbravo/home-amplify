const env = {
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};
export const environments = () => {
  let hostURI;
  let cmsURI;
  let cmsAPIKEY;
  switch (process.env.NEXT_PUBLIC_ENV) {
    case env.DEVELOPMENT:
    case env.STAGING:
      hostURI = process.env.NEXT_PUBLIC_HOST_STG;
      cmsURI = process.env.NEXT_PUBLIC_CMS_URL_STG;
      cmsAPIKEY = process.env.NEXT_PUBLIC_CMS_API_KEY;
      break;
  }
  return {
    hostURI,
    cmsURI,
    cmsAPIKEY
  };
};
