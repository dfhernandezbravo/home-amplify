import Image from 'next/image';
import { CalugaItemProps } from '../../Calugas.types';
import { CalugaContainer } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';

const Caluga = ({image, description, title, link, width}: CalugaItemProps) => {


  return (
    <CalugaContainer width={width}>
      <ImageCaluga 
        src={image}
        width={100}
        height={100}
        alt={title || ''}
      />
    </CalugaContainer>
  );
};

export default Caluga;
