import Image from "next/image"
import { SmartBannerBtnContainer, SmartBannerContainer, SmartBannerInfoContainer, SmartBannerTitleContainer } from "./SmartBanner.styles"
import { Button } from "@/components/atoms/Button"


export const SmartBanner = ()=>{

    const navToStore = ()=>{
        console.log('Go to app store');
    }

    const closeBanner = ()=>{
        console.log('Banner close');
    }

    return(
        <SmartBannerContainer>
            <SmartBannerInfoContainer>
                <SmartBannerTitleContainer>
                    <Image 
                        alt='Easy logo'
                        width={100}
                        height={100}
                        src='https://easycl.vtexassets.com/arquivos/logo-easy-mobile.png'
                    />
                    <h2>Continúa desde la APP</h2>
                </SmartBannerTitleContainer>
                <h2>Compra más fácil y rápido desde tu celular</h2>
            </SmartBannerInfoContainer>

            <SmartBannerBtnContainer>

                <Button 
                    variant='contained' 
                    type='button' 
                    onClick={closeBanner}
                    style={{width:'50%', height:'40px', fontSize:'14px', color:'#333333', backgroundColor:'#fff', border:'1px solid #333333', fontWeight:'600'}}>
                    Ahora no
                </Button>

                <Button 
                    variant='contained' 
                    type='button' 
                    onClick={navToStore}
                    style={{width:'50%', height:'40px', fontSize:'14px', color:'#f3f3f3', backgroundColor:'#333333', border:'1px solid #f3f3f3', fontWeight:'600'}}>
                    Continuar en App
                </Button>

            </SmartBannerBtnContainer>
        </SmartBannerContainer>
    )
}