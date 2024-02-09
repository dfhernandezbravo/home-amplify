import React, { FC } from 'react';
import { ItemWithLink, ItemWithoutLink } from './sidebarListItem.styles';
import { Sidebar, To } from '@/domain/interfaces/sidebar';

interface Props {
  route: Sidebar;
  handleOptionClick: (option: string) => void;
  selectedOption: string;
}

const SidebarListItem: FC<Props> = ({
  route,
  handleOptionClick,
  selectedOption,
}) => {
  if (route.redirect.to === To.Local) {
    return (
      <ItemWithoutLink
        className={selectedOption === route.redirect.url ? 'selected' : ''}
        onClick={() => handleOptionClick(route.redirect.url)}
      >
        {route.label}
      </ItemWithoutLink>
    );
  }

  if (route.redirect.to === To.External) {
    return (
      <ItemWithLink href={route.redirect.url} target={route.redirect.target!}>
        {route.label}
      </ItemWithLink>
    );
  }
  return <ItemWithoutLink>{route.label}</ItemWithoutLink>;
};

export default SidebarListItem;
