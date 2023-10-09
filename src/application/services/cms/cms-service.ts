import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import CmsInterface from '@/domain/interfaces/services/cms-service.interface';

const cmsService: CmsInterface = {
  getRemoteConfig: (groupName, paramName) =>
    bffWebInstance.get(`/cms/group/${groupName}/${paramName}`),
};

export default cmsService;
