import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import SidebarService from '@/domain/interfaces/sidebar/services.interface';

const GROUP_NAME = 'sidebars';
const PARAM_NAME = 'legals';

const sidebarService: SidebarService = {
  getSidebarData: () => {
    return bffWebInstance.get(`/cms/group/${GROUP_NAME}/${PARAM_NAME}`);
  },
};

export default sidebarService;
