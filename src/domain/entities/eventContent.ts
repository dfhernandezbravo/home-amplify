import Banner from '@/presentation/modules/n0/Banner';
import { BannerStruct } from '@/presentation/modules/n0/Banner/Banner.types';
import BrandList from '@/presentation/modules/n0/BrandList';
import { BrandListStruct } from '@/presentation/modules/n0/BrandList/BrandList.types';
import Calugas from '@/presentation/modules/n0/Calugas';
import { CalugaStruct } from '@/presentation/modules/n0/Calugas/Calugas.types';
import MenuIcons from '@/presentation/modules/n0/MenuIcons';
import { MenuIconsStruct } from '@/presentation/modules/n0/MenuIcons/MenuIcons.types';
import Paragraph from '@/presentation/modules/n0/Paragraph';
import { ParagraphStruct } from '@/presentation/modules/n0/Paragraph/Paragraph.types';
import Ribbon from '@/presentation/modules/n0/Ribbon';
import { RibbonStruct } from '@/presentation/modules/n0/Ribbon/Ribbon.types';
import RichText from '@/presentation/modules/n0/RichText';
import { RichTextStruct } from '@/presentation/modules/n0/RichText/RichText.types';
import React from 'react';

type R<P = {}> = React.FC<P>;

interface EventContentObjectStruct {
  [key: string]:
    | R<CalugaStruct>
    | R<MenuIconsStruct>
    | R<RichTextStruct>
    | R<ParagraphStruct>
    | R<RibbonStruct>
    | R<BannerStruct>
    | R<BrandListStruct>;
}
const EventContent: EventContentObjectStruct = {
  'n0-calugas': Calugas,
  'n0-icons-menu': MenuIcons,
  'n0-rich-text': RichText,
  'n0-paragraph': Paragraph,
  'n0-ribbon': Ribbon,
  'n0-banner': Banner,
  'n0-brands-list': BrandList,
};

export default EventContent;
