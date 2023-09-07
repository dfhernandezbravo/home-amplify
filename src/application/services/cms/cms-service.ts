import { remoteConfigInstance } from '@/application/data-source/remote-config-instance';
import CmsInterface from '@/domain/interfaces/services/cms-service.interface';

const cmsService: CmsInterface = {
  getRemoteConfig: (groupName, paramName) =>
    remoteConfigInstance.get(`/${groupName}/${paramName}`),
};

export default cmsService;
