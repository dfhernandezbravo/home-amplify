import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
}
const MapLink = ({ link }: Props) => {
  return (
    <Link
      target="_blank"
      className="map-link"
      href={`https://google.com${link}`}
    >
      Abrir mapa{' '}
      <Image
        className="map-arrow-icon"
        src="/icons/general/left-arrow-gray.svg"
        width={12}
        height={12}
        alt="right arrow"
      />
    </Link>
  );
};

export default MapLink;
