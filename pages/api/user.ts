import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';


export interface ResponseData {
  users: User[]
}

export interface User {
  name: string,
  password: string,
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const filePath = 'json/data.json';

  if (req.method === 'POST') {
    // Process a POST request
  } else {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    res.status(200).json(parsedData);
  }
}
