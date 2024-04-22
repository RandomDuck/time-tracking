import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { User } from '../models/User';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const filePath = 'json/data.json';

  if (req.method === 'POST') {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;

    try {
      const reqData = JSON.parse(req.body);
      console.log(reqData);
      
      const { email, password } = reqData;
      const foundUser: User = users.find(
        (user: User) => user.email === email && user.password === password
      );
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json({ message: 'no user found' });
    }
  } else {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;
    const id = req.query.id;
    const foundUser: User = users.find((user: User) => user.id === id);

    res.status(200).json(foundUser as User);
  }
}
