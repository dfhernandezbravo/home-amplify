import React from 'react';
import LegalsComponents, { LegalsPaths } from '../legals-components';

const RightContainer = ({ path }: { path: string }) => {
  const ContentComponent = LegalsComponents[path as LegalsPaths];
  if (ContentComponent) {
    return <ContentComponent />;
  }
  return <></>;
};

export default RightContainer;
