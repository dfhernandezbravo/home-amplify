import Image from 'next/image';
import { TimeContainer } from './styles';

interface Props {
  isStoreOpen: boolean;
  isStoreClosed: boolean;
}

const ValidateScheduleStore = ({ isStoreOpen, isStoreClosed }: Props) => {
  if (isStoreOpen && !isStoreClosed) {
    return (
      <TimeContainer>
        <Image
          src="/icons/home/clock-green.svg"
          width={15}
          height={15}
          alt="open-clock-icon"
        />
        <span className="store-open">Tienda abierta:</span>
      </TimeContainer>
    );
  }
  return (
    <TimeContainer>
      <Image
        src="/icons/home/clock-red.svg"
        width={15}
        height={15}
        alt="closed-clock-icon"
      />
      <span className="store-closed">Tienda cerrada:</span>
    </TimeContainer>
  );
};

export default ValidateScheduleStore;
