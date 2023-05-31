import Link from "next/link";
import { ItemsWrapper, CarouselImageContainer, IconTitle, CarouselNavButton } from "./Categories.styles";
import { CategoriesProps } from "./Categories.types"
import Image from "next/image";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useViewport } from "@/hooks/useViewport";
import { GrNext, GrPrevious } from 'react-icons/gr';


export const Categories = (props: CategoriesProps) =>{

    const { items } = props;

    // hooks
    const { width } = useViewport();

    return (
        <ItemsWrapper>
            <CarouselProvider 
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={items.length}
                visibleSlides={ width > 1050 ? 9 : 5}
                step={ width > 1050 ? 9 : 5}
            >
            <Slider style={{margin:'0 auto', width: '90%', minHeight: '170px'}}>
                {items.map ((item, index) =>(
                <Slide key={item.title} index={index} style={{height: "20px"}}>
                    <Link href={item.link || ""}>
                        <CarouselImageContainer>
                            <Image 
                                src={item.image || "" }
                                width={100}
                                height={100}
                                sizes="100vw"
                                priority={true}
                                alt={item.title || "Item icon"}
                            />
                        </CarouselImageContainer>
                        <IconTitle>{item.title}</IconTitle>
                    </Link>
                </Slide>
                ))}
            </Slider>


            <CarouselNavButton>
                <ButtonBack style={{background: 'transparent', border: 'none'}}>          
                    <GrPrevious size={'25px'} />
                </ButtonBack>
            </CarouselNavButton>
            <CarouselNavButton right>
                <ButtonNext style={{background: 'transparent', border: 'none'}}>
                <GrNext size={'25px'} />
                </ButtonNext>
            </CarouselNavButton>
            
            
            </CarouselProvider>
        </ItemsWrapper>
    )
}