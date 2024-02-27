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
          <div key={index}>
            <Title titleTag="h3" text={item.title} />

            {item.accordions.map((subList, index) => {
              return (
                <div key={index}>
                  <Accordion title={subList.title} content={subList.content} />
                </div>
              );
            })}
          </div>
        );
      })}
    </ContentContainer>
  );
};

export default LegalsContent;
