import { ContentBody } from '@/domain/entities/content/content.types';
import { Button } from '@cencosud-ds/easy-design-system';
import Link from 'next/link';
import { ContentContainer, DeclarationContainer, Row } from './styles';
import Accordion from './components/accordion';
import Title from '@/presentation/components/atoms/Title';

const LegalsContent = ({
  list,
  declaration,
  timestamp,
  file,
  title,
}: ContentBody) => {
  return (
    <ContentContainer>
      <Row justifycontent="space-between">
        <Title titleTag="h1" text={title} />
        <Link
          href={file}
          title="Descargar documento términos y condiciones en pdf"
          target="_blank"
        >
          <Button label="Descargar documento" variant="link"></Button>
        </Link>
      </Row>

      <Row justifycontent="flex-end">
        <span>{timestamp}</span>
      </Row>

      <Row>
        <DeclarationContainer
          dangerouslySetInnerHTML={{ __html: declaration }}
        />
      </Row>

      {list?.map((item, index) => {
        return (
          <>
            <Title
              key={`title_${index}`}
              titleTag="h1"
              text={item.title}
              style={{
                fontSize: '1.17rem',
                fontWeight: 600,
                padding: '30px 0px',
              }}
            />

            {item.accordions.map((subList, index) => {
              return (
                <Accordion
                  key={`item-title_${index}`}
                  title={subList.title}
                  content={subList.content}
                />
              );
            })}
          </>
        );
      })}
    </ContentContainer>
  );
};

export default LegalsContent;
