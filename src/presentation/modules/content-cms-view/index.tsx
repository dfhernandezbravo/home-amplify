import ContentComponent from '@/domain/entities/content';
import { ContentBody } from '@/domain/entities/content/content.types';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import { useTimeValidator } from '@/presentation/hooks/useTimeValidator';
import React from 'react';

interface Props {
  content: ContentBody[];
}

const ContentCmsView = ({ content }: Props) => {
  const ComponentRender = (element: ContentBody) => {
    const { component, isActive, endDate, startDate } = element;
    const enabledTime = useTimeValidator({
      startDate,
      endDate,
      isActive,
    });
    const Component = ContentComponent[component];
    return Element ? enabledTime ? <Component {...element} /> : null : null;
  };

  return (
    <div className="home-mcf">
      {content.map((element, index) => (
        <div key={`${element.component}${index}`}>
          <ComponentRender {...element} />
        </div>
      ))}
      <ButtonToTop />
    </div>
  );
};

export default ContentCmsView;
