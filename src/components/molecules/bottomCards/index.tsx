import AdsCardBottom from "@/components/atoms/adsCardBottom";
import { BottomCardsSection } from "./bottomCards.styles";
import { useViewport } from "@/hooks/useViewport";

const AdsCardsImages = [
    {
        image: "https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/92ecd167-d376-488d-b0f4-d760f391c834___dcd32807a01d7279c99253559d74fc0b.png",
        link: "https://www.tarjetacencosud.cl/publico/producto/avance/landing/simulador?utm_medium=banner%20home&utm_source=easy_cl&utm_campaign=pide%20tu%20avance"
    },
    {
        image: "https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/8d09de58-0e13-4624-a8b8-4f04b97ecbe8___b8226bf7ca3cc905d24350cf8593bd0c.webp",
        link: "https://www.giftcard.cl/"
    },
    {
        image: "https://easycl.vtexassets.com/arquivos/cencosudPuntos.png",
        link: "https://www.puntoscencosud.cl/puntos/"
    }
]

const BottomCards = () =>{

    const { width } = useViewport();

    return(
        <BottomCardsSection
            data-mobile = {width < 640}
        >
            {AdsCardsImages.map( card => (
                <AdsCardBottom 
                    key={card.image}
                    image={card.image}
                    link={card.link}
                />

            ))}
        </BottomCardsSection>
    )

}

export default BottomCards;