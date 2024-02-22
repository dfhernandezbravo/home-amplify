import React from 'react';
import {
  ContentBody,
  ContentCMS,
} from '@/domain/entities/content/content.types';
import {
  ContentContainer,
  Row,
  DeclarationContainer,
} from './assistedSale.styles';
import { Title, Button } from '@cencosud-ds/easy-design-system';
import Accordion from '../../content-cms-view/components/accordion';

type accordions = {
  title: string;
  content: string;
};

type List = {
  title?: string;
  accordions: accordions[];
};

type ExtendedContentBody = ContentBody & {
  timestamp?: string;
  file?: string;
  list?: List[];
  declaration?: string;
};

const AssistedSaleView = (
  props: ContentCMS & { content?: ExtendedContentBody[] },
) => {
  const { content } = props;
  return (
    <ContentContainer>
      {content?.length > 0 && (
        <>
          <Row justifycontent="space-between">
            <Title titleTag="h1" text={content[0]?.title} />
            <a
              href={content[0]?.file}
              title="Descargar documento términos y condiciones en pdf"
              target="_blank"
            >
              <Button label="Descargar documento" variant="link"></Button>
            </a>
          </Row>
          <Row justifycontent="flex-end">
            <i>{content[0]?.timestamp}</i>
          </Row>
          {content[0]?.declaration && (
            <Row>
              <DeclarationContainer
                dangerouslySetInnerHTML={{ __html: content[0]?.declaration }}
              />
            </Row>
          )}
        </>
      )}
      {content?.length > 0 &&
        content[0]?.list?.map((list, index) => {
          return (
            <div key={index}>
              <Title titleTag="h3" text={list.title} />
              {list['accordions'].map((subList, index) => {
                return (
                  <div key={index}>
                    <Accordion
                      title={subList.title}
                      content={subList.content}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
    </ContentContainer>
  );
};

export default AssistedSaleView;
