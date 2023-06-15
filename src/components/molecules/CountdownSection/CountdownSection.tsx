import Image from 'next/image';
import {
  CountdownContent,
  CountdownHeader,
  CountdownSectionWrapper,
  CountdownTop,
  HighlightedText,
} from './CountdownSection.styles';
import { CountdownSectionProps } from './CountdownSection.types';
import { Countdown } from './components/Countdown';

export const CountdownSection = (props: CountdownSectionProps) => {
  const {
    startDate,
    endDate,
    highlightedText,
    borderColor,
    icon,
    showIcon,
    content,
  } = props;

  return (
    <CountdownSectionWrapper color={borderColor}>
      <CountdownHeader color={borderColor}>
        <CountdownTop>
          {showIcon && (
            <Image
              src={icon ? icon : ''}
              width={100}
              height={100}
              alt="Icon clock"
            />
          )}

          <HighlightedText>{highlightedText}</HighlightedText>
        </CountdownTop>

        <Countdown endDate={endDate} />
      </CountdownHeader>

      <CountdownContent>{content}</CountdownContent>
    </CountdownSectionWrapper>
  );
};
