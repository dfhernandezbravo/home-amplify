import Image from 'next/image';
import Link from 'next/link';
import { MapLinkContainer } from './styles';

interface Props {
  link: string;
}
const MapLink = ({ link }: Props) => {
  return (
    <MapLinkContainer>
      <Link
        target="_blank"
        className="map-link"
        href={`https://google.com${link}`}
      >
        Abrir mapa
        <Image
          className="map-arrow-icon"
          src="/icons/general/left-arrow-gray.svg"
          width={12}
          height={12}
          alt="right arrow"
        />
      </Link>
    </MapLinkContainer>
  );
};

export default MapLink;
