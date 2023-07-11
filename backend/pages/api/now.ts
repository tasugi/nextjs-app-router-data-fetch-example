// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const now = (new Date()).toISOString();
  console.log("Received request: ", now);
  res.status(200).json(now);
}
