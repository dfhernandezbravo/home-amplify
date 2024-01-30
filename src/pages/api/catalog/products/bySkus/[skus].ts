// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProductSkuStruct } from '@/domain/entities/products/skus';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProductSkuStruct[]>,
) {
  const skus: string = `${_req.query.skus}`;
  const splitSkus = skus.split(',');
  let result = '';
  for (let i = 0; i < splitSkus.length; i++) {
    result += `fq=skuId:${splitSkus[i]}${
      i !== splitSkus?.length - 1 ? '&' : ''
    }`;
  }
  const { data } = await axios.get(
    `https://www.easy.cl/api/catalog_system/pub/products/search?${result}`,
  );
  res.json(data);
}
