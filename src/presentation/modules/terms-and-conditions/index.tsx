import React from 'react';
import {
  ContentBody,
  ContentCMS,
} from '@/domain/entities/content/content.types';
import {
  Container,
  SidebarContainer,
  ContentContainer,
  Row,
} from './termsAndConditions.styles';
import { Title, Button } from '@cencosud-ds/easy-design-system';
import Accordion from '../content-cms-view/components/accordion';
import Link from 'next/link';

type subList = {
  title: string;
  content: string;
};

type List = {
  title: string;
  'sub-list': subList[];
};

type ExtendedContentBody = ContentBody & {
  timestamp?: string;
  file?: string;
  list?: List[];
};

const TermsAndConditionsView = (
  props: ContentCMS & { content: ExtendedContentBody[] },
) => {
  //console.log(props)
  const { content } = props;

  return (
    <Container>
      <SidebarContainer>
        <ul>
          <li>
            <Link href="/terms-and-conditions" title="Términos y condiciones">
              Términos y condiciones
            </Link>
          </li>
        </ul>
      </SidebarContainer>
      <ContentContainer>
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
        {content[0]?.list?.map((list, index) => {
          //console.log(list,index)
          return (
            <div key={index}>
              <Title titleTag="h3" text={list.title} />
              {list['sub-list'].map((subList, index) => {
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
    </Container>
  );
};

export default TermsAndConditionsView;
