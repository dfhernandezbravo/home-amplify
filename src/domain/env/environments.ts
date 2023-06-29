const env = {
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};

export const environments = () => {
  let hostURI;
  let cmsURI;
  let cmsAPIKEY;
  let hostUrlRedirect;

  switch (process.env.NEXT_PUBLIC_ENV) {
    case env.DEVELOPMENT:
      hostURI = process.env.NEXT_PUBLIC_HOST_STG;
      cmsURI = process.env.NEXT_PUBLIC_CMS_URL_STG;
      cmsAPIKEY = process.env.NEXT_PUBLIC_CMS_API_KEY;
      hostUrlRedirect = process.env.NEXT_PUBLIC_HOST_URL_DEV;
      break;
    case env.STAGING:
      hostURI = process.env.NEXT_PUBLIC_HOST_STG;
      cmsURI = process.env.NEXT_PUBLIC_CMS_URL_STG;
      cmsAPIKEY = process.env.NEXT_PUBLIC_CMS_API_KEY;
      hostUrlRedirect = process.env.NEXT_PUBLIC_HOST_URL_STG;
      break;
    default:
      hostURI = process.env.NEXT_PUBLIC_HOST_STG;
      cmsURI = process.env.NEXT_PUBLIC_CMS_URL_STG;
      cmsAPIKEY = process.env.NEXT_PUBLIC_CMS_API_KEY;
  }
  return {
    hostURI,
    cmsURI,
    cmsAPIKEY,
    hostUrlRedirect,
  };
};
