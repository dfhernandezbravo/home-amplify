const env = {
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};
export const environments = () => {
  let hostURI, apiKey ,cmsUrl;
  switch (process.env.NEXT_PUBLIC_ENV) {
    case env.DEVELOPMENT:
    case env.STAGING:
      hostURI = process.env.NEXT_PUBLIC_CMS_STG;
      apiKey = process.env.NEXT_PUBLIC_CMS_API_KEY;
      cmsUrl = process.env.NEXT_PUBLIC_CMS_URL 
      break;
  }
  return {
    hostURI, apiKey, cmsUrl
  };
};
