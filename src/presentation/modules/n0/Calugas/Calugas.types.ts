export type ImageStruct = {
    variant: string;
    alt: string;
    description: string;
    labelText: string;
    buttonText: string;
    image: string;
    imageMobile: string;
}

export type TextStruct = {
    content: string;
    textColor: string;
    fontSize: string;
    bolder: boolean;
}

export type ButtonStruct = {
    borderColor: string;
    textColor: string;
    fontSize: string;
    fontBolder: boolean
}

export type ContainerStruct = {
    onHover:{
        borderColor: string;
        textColor: string;
        bgColor: string;
        opacity: string;
        scale: number
    };
    width: number;
    columns: number;
    borderColor: string;
    bgColor: string;
    underLine: boolean;
    leftLine: boolean;
    rightLine: boolean;
    lineColor: string;
    link: string;
    image: ImageStruct[];
    text: TextStruct[];
    button: ButtonStruct[];
}

export type CalugaStruct = {
    title: string;
    itemsPerRow: number;
    container: ContainerStruct[];
};
