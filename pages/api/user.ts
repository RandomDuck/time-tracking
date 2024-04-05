import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

	const filePath = 'temp.db.json';

	if (req.method === 'POST') {
    // Process a POST request
  } else {
		const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    res.status(200).json(parsedData);
  }
}