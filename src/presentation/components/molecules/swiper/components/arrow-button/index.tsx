import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { ArrowButtonWrapper } from './style';

interface Props {
  position: 'right' | 'left';
  isPositionAbsolute: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = ({
  position,
  isPositionAbsolute,
  disabled,
  onClick,
}: Props) => {
  return (
    <ArrowButtonWrapper
      onClick={onClick}
      disabled={disabled}
      position={position}
      isPositionAbsolute={isPositionAbsolute}
    >
      {position === 'left' && <MdOutlineArrowBackIos />}
      {position === 'right' && <MdOutlineArrowForwardIos />}
    </ArrowButtonWrapper>
  );
};

export default ArrowButton;
