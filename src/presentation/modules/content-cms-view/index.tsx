import ContentComponent from '@/domain/entities/content';
import { ContentBody } from '@/domain/entities/content/content.types';
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
    <div>
      {content.map((element, index) => (
        <div key={`${element.component}${index}`}>
          <ComponentRender {...element} />
        </div>
      ))}
    </div>
  );
};

export default ContentCmsView;
