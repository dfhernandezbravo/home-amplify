const env = {
    DEVELOPMENT: 'DEVELOPMENT',
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION'
}
export const environments  = () => {
    let hostURI;
    switch(process.env.NEXT_PUBLIC_ENV){
        case env.DEVELOPMENT:
            hostURI =  process.env.NEXT_PUBLIC_CMS_DEV;
            break;
        case env.STAGING:
            hostURI =  process.env.NEXT_PUBLIC_CMS_STG;
            break;
    }
    return {
        hostURI
    }
}