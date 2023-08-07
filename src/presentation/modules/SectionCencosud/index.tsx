import { CardsSection } from './SectionCencosud.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Card from './components/Card';
import useLinks from '@/presentation/hooks/useLink';

const AdsCardsImages = [
  {
    image:
      'https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/92ecd167-d376-488d-b0f4-d760f391c834___dcd32807a01d7279c99253559d74fc0b.png',
    link: 'https://www.tarjetacencosud.cl/publico/producto/avance/landing/simulador?utm_medium=banner%20home&utm_source=easy_cl&utm_campaign=pide%20tu%20avance',
  },
  {
    image:
      'https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/8d09de58-0e13-4624-a8b8-4f04b97ecbe8___b8226bf7ca3cc905d24350cf8593bd0c.webp',
    link: 'https://www.giftcard.cl/',
  },
  {
    image: 'https://easycl.vtexassets.com/arquivos/cencosudPuntos.png',
    link: 'https://www.puntoscencosud.cl/puntos/',
  },
];

const SectionCencosud = () => {
  const { isSm } = useBreakpoints();
  // const { getLink } = useLinks();

  return (
    <CardsSection data-mobile={isSm}>
      {AdsCardsImages.map((card) => (
        <Card key={card.image} image={card.image} link={card.link} />
      ))}
    </CardsSection>
  );
};

export default SectionCencosud;
