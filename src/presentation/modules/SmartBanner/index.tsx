import { ContentBody } from '@/domain/entities/content/content.types';
import Mobile from '@/presentation/components/layouts/Mobile';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  ButtonApp,
  ButtonClose,
  SmartBannerBtnContainer,
  SmartBannerContainer,
  SmartBannerInfoContainer,
  SmartBannerTitleContainer,
} from './SmartBanner.styles';

const SmartBanner = ({
  hideTime,
  storeLinkIos,
  storeLinkAndroid,
  title,
  description,
  btnCancel,
  btnContinue,
  image,
  isEnable,
}: ContentBody) => {
  const router = useRouter();

  const MILLISECONDS = hideTime * 60 * 1000;
  const userOS: string = sessionStorage.getItem('OS')?.toLowerCase() || '';
  const isEnableOS = isEnable.split(',').includes(userOS.toUpperCase());
  const [canShowComponent, setCanShowComponent] = useState(isEnableOS);

  useEffect(() => {
    setTimeout(() => {
      setCanShowComponent(false);
    }, MILLISECONDS);
  }, [MILLISECONDS]);

  const navToStore = () => {
    userOS === 'android'
      ? router.push(storeLinkAndroid)
      : router.push(storeLinkIos);
  };

  return (
    <Mobile>
      {canShowComponent && (
        <SmartBannerContainer>
          <SmartBannerInfoContainer>
            <SmartBannerTitleContainer>
              <Image alt="Easy logo" width={100} height={100} src={image} />
              <h2>{title}</h2>
            </SmartBannerTitleContainer>
            <h2> {description} </h2>
          </SmartBannerInfoContainer>

          <SmartBannerBtnContainer>
            <ButtonClose
              variant="contained"
              type="button"
              onClick={() => setCanShowComponent(false)}
            >
              {btnCancel}
            </ButtonClose>

            <ButtonApp variant="contained" type="button" onClick={navToStore}>
              {btnContinue}
            </ButtonApp>
          </SmartBannerBtnContainer>
        </SmartBannerContainer>
      )}
    </Mobile>
  );
};

export default SmartBanner;
