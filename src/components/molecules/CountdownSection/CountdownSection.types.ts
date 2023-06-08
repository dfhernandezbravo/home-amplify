import { ReactNode } from 'react';

export type CountdownSectionProps = {
    startDate: string;
    endDate: string;
    highlightedText?: string;
    borderColor?: string;
    bannerTitle?: string;
    icon?: string;
    showIcon?: boolean;
    content?: ReactNode;
}