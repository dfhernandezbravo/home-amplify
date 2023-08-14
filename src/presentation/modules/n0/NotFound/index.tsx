/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import {
  SubTitleNotFound,
  TitleCarrousel,
  TitleNotFound,
  Wrapper,
} from './NotFound.styles';
import Categories from '../../Categories';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Title from '@/presentation/components/atoms/Title';
import { CategoriesStruct } from '../../Categories/Categories.types';

const NotFound = ( data : CategoriesStruct) => {
  const [variant, setVariant] = useState('square');

  const { isLg } = useBreakpoints();

  const handleShowTitle = () => {
    return !isLg;
  };

  return useMemo(
    () => (
      <Wrapper>
        {
            isLg  
                ?
                <img
                src="https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/234d79f3-0063-483c-a00d-7595032a61ab___66142406a6eb678f6c4238febbef6a39.gif"
                alt="Banner animado buscador"
              />
                :
                <img
                src="https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/af1c75da-eb4e-4d29-8da8-fe0b26650bc2___cb3572111926fbc9873ad75d8e84e99f.gif"
                alt="Banner animado buscador"
              />
        }

        ;
        <TitleNotFound>
          Lo sentimos, no encontramos productos para tu búsqueda de{' '}
          <span>Categorías</span>
        </TitleNotFound>
        <SubTitleNotFound>
          Revisa si está bien escrita, intenta con otro término o navega entre
          las categorías.
        </SubTitleNotFound>
        <TitleCarrousel>Descubre nuestras categorías destacadas</TitleCarrousel>
        {handleShowTitle() && <Title text={'Categorías destacadas'} />}
        <Categories {...data}/>
      </Wrapper>
    ),
    [data, variant, isLg],
  );
};

export default NotFound;
