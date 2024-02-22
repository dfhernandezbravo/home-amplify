/* eslint-disable */
import React, { FC, useEffect, useMemo } from 'react';
import { SidebarContainer, SidebarList } from './sidebar.styles';
import { useRouter } from 'next/router';
import SidebarListItem from '../../components/atoms/SidebarListItem';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import AccountSidebarSkeleton from '@/presentation/components/atoms/AccountSidebarSkeleton';
import { getSidebar } from '@/domain/use-cases/sidebar';

interface SidebarProps {
  display?: string;
  currentPath?: string;
}

const Sidebar: FC<SidebarProps> = ({ currentPath }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSidebar());
  }, []);

  const { sideBarOptions, loading } = useAppSelector((state) => state.sidebar);

  const handleOptionClick = (option: string) => {
    router.push(`${option}`);
  };

  const selectedOption = useMemo(() => {
    if (sideBarOptions?.length && currentPath) {
      const optionPathArray = sideBarOptions.map(
        (option) => option.redirect.url,
      );
      const optionPathByDefault = sideBarOptions?.find(
        (route) => route.isDefault,
      );

      return optionPathArray?.includes(currentPath)
        ? currentPath
        : optionPathByDefault?.redirect.url;
    }
  }, [currentPath, sideBarOptions]);

  if (loading) return <AccountSidebarSkeleton />;

  return (
    <>
      <SidebarContainer>
        {sideBarOptions?.length && (
          <SidebarList>
            {sideBarOptions?.map((option) => (
              <SidebarListItem
                key={option.id}
                route={option}
                handleOptionClick={handleOptionClick}
                selectedOption={selectedOption as string}
              />
            ))}
          </SidebarList>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
