const env = {
    DEVELOPMENT: 'DEVELOPMENT',
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION'
}
export const environments = {
    hostURI: process.env.NEXT_PUBLIC_ENV === env.DEVELOPMENT ? process.env.NEXT_PUBLIC_CMS_DEV : process.env.NEXT_PUBLIC_CMS_STG
}