import Image from "next/image";
import { CountdownHeader, CountdownSectionWrapper, HighlightedText } from "./CountdownSection.styles";
import { CountdownSectionProps } from "./CountdownSection.types"

export const CountdownSection = ( props : CountdownSectionProps ) =>{

    const { startDate,
        endDate,
        highlightedText,
        borderColor,
        icon,
        showIcon,
        content } = props;

    return(
        <CountdownSectionWrapper color={borderColor}>
            <CountdownHeader color={borderColor}>
                    {showIcon && 
                        <Image 
                            src={icon ? icon : ''}
                            width={100}
                            height={100}
                            alt='Icon clock'
                        />
                    }

                    <HighlightedText>
                        {highlightedText}
                    </HighlightedText>
            </CountdownHeader>

            
        </CountdownSectionWrapper>
    )
}