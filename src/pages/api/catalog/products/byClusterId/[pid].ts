// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { pid } = _req.query;
  const { data } = await axios.get(
    `https://www.easy.cl/api/catalog_system/pub/products/search?${encodeURIComponent(
      `fq=productClusterIds:${pid}`,
    )}`,
  );
  res.json(data);
}
