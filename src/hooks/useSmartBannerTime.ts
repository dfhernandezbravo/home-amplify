import { useEffect, useState } from "react"

const useSmartBannerTime = ( timeNow: number ): boolean =>{

    const [ expired, setExpired ] = useState<boolean>(true);

    const timeToShow = localStorage.getItem('showBanner');
    useEffect(()=>{
        
        if(timeToShow){
            if(timeNow > parseInt(timeToShow)){
                setExpired(true);
            }
            else{
                setExpired(false);
            }
        }else{
            localStorage.setItem('showBanner', timeNow.toString());
        }
    }, [timeToShow, timeNow]);

    return expired;
};

export default useSmartBannerTime;