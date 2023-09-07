import { AxiosResponse } from 'axios';

interface CmsInterface {
  getRemoteConfig<T>(
    groupName: string,
    paramName?: string,
  ): Promise<AxiosResponse<{ value: T }>>;
}

export default CmsInterface;
