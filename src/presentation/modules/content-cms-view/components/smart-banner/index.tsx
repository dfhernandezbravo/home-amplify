import { ContentBody } from '@/domain/entities/content/content.types';
import Mobile from '@/presentation/components/layouts/Mobile';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ButtonApp,
  ButtonClose,
  SmartBannerBtnContainer,
  SmartBannerContainer,
  SmartBannerInfoContainer,
  SmartBannerTitleContainer,
} from './style';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

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
  startDate,
  endDate,
}: ContentBody) => {
  const MILLISECONDS = hideTime * 60 * 1000;
  const userOS = (): string => {
    if (typeof window !== 'undefined')
      return sessionStorage?.getItem('OS')?.toLowerCase() || '';
    else return '';
  };
  const isEnableOS = isEnable?.split(',')?.includes(userOS().toUpperCase());
  const [canShowComponent, setCanShowComponent] = useState(isEnableOS);
  const {
    methods: { sendImpressionInteraction },
  } = useAnalytics();

  useEffect(() => {
    setTimeout(() => {
      setCanShowComponent(false);
    }, MILLISECONDS);
  }, [MILLISECONDS]);

  const navToStore = () => {
    return userOS() === 'android' ? storeLinkAndroid : storeLinkIos;
  };

  const handleButtonClick = (btnText: string) => {
    sendImpressionInteraction({
      event: 'Interaccion',
      category: 'Interacción smart banner',
      action: 'Clic',
      tag: btnText,
    });
  };

  return (
    <>
      {isDateInRange(startDate, endDate) && (
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
                  onClick={() => {
                    setCanShowComponent(false);
                    handleButtonClick(btnCancel);
                  }}
                >
                  {btnCancel}
                </ButtonClose>

                <ButtonApp
                  href={navToStore()}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick(btnContinue);
                  }}
                >
                  {btnContinue}
                </ButtonApp>
              </SmartBannerBtnContainer>
            </SmartBannerContainer>
          )}
        </Mobile>
      )}
    </>
  );
};

export default SmartBanner;
