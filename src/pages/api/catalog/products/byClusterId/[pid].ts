// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { environments } from '@/domain/env/environments';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { pid } = _req.query;
  const { data } = await axios.get(
    `${environments().hostURI}/catalog/products/byClusterId/${pid}`,
  );
  res.json(data);
}
