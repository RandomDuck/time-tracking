import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';


export interface ResponseData {
  users: User[]
}

export interface User {
  name: string,
  password: string,
  id: number,
  email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const filePath = 'json/data.json';

  if (req.method === 'POST') {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;
    const email = req.body.email;
    const password = req.body.password;

    const foundUser = users.find((user:User) => user.email === email && user.password === password);
    res.status(200).json(foundUser);
    
  } else {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    res.status(200).json(parsedData);
  }
}
