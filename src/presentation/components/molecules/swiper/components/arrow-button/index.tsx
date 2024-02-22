import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { ArrowButtonWrapper } from './style';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

interface Props {
  position: 'right' | 'left';
  ispositionabsolute: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = ({
  position,
  ispositionabsolute,
  disabled,
  onClick,
}: Props) => {
  const { device } = useBreakpoints();
  return (
    <ArrowButtonWrapper
      onClick={onClick}
      disabled={disabled}
      position={position}
      ispositionabsolute={(
        device === 'Phone' ||
        device === 'Tablet' ||
        ispositionabsolute
      ).toString()}
    >
      {position === 'left' && <MdOutlineArrowBackIos />}
      {position === 'right' && <MdOutlineArrowForwardIos />}
    </ArrowButtonWrapper>
  );
};

export default ArrowButton;
