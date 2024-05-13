import { useContext } from 'react';
import Image from 'next/image';
import StoresContext from '../../context';
import { StoreInformationContainer } from './styles';

const StoreInformation = () => {
  const { storeInformation } = useContext(StoresContext);

  const { borderColor, icon, text, textColor } = storeInformation[0];

  if (!text && !borderColor && !textColor) return null;

  return (
    <StoreInformationContainer $borderColor={borderColor}>
      {icon && <Image src={icon} alt="icon" width={21} height={21} />}
      <p style={{ color: `${textColor}` }}>{text}</p>
    </StoreInformationContainer>
  );
};

export default StoreInformation;
