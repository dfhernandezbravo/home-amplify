import Image from 'next/image';
import {
  ButtonApp,
  ButtonClose,
  SmartBannerBtnContainer,
  SmartBannerContainer,
  SmartBannerInfoContainer,
  SmartBannerTitleContainer,
} from './SmartBanner.styles';
import { useState } from 'react';
import useSmartBannerTime from '@/presentation/hooks/useSmartBannerTime';
import { SmartBannerStruct } from './SmartBanner.types';
import { useRouter } from 'next/router';

const SmartBanner = (props: SmartBannerStruct) => {
  const router = useRouter();
  const { hideTime, linkStore } = props;
  
  const MILLISECONDS = hideTime * 60 * 1000;

  const now: number = new Date().getTime();
  const [showComponent, setSowComponent] = useState<boolean>(
    useSmartBannerTime(now),
  );


  const navToStore = () => {
    router.push(linkStore);
  };

  const closeBanner = () => {
    const timeString: string = (new Date().getTime() + MILLISECONDS).toString();
    sessionStorage.setItem('showBanner', timeString);
    setSowComponent(false);
  };

  if (!showComponent) return null;

  return (
    <SmartBannerContainer>
      <SmartBannerInfoContainer>
        <SmartBannerTitleContainer>
          <Image
            alt="Easy logo"
            width={100}
            height={100}
            src="https://easycl.vtexassets.com/arquivos/logo-easy-mobile.png"
          />
          <h2>Continúa desde la APP</h2>
        </SmartBannerTitleContainer>
        <h2>Compra más fácil y rápido desde tu celular</h2>
      </SmartBannerInfoContainer>

      <SmartBannerBtnContainer>
        <ButtonClose variant="contained" type="button" onClick={closeBanner}>
          Ahora no
        </ButtonClose>

        <ButtonApp variant="contained" type="button" onClick={navToStore}>
          Continuar en App
        </ButtonApp>
      </SmartBannerBtnContainer>
    </SmartBannerContainer>
  );
};

export default SmartBanner;
