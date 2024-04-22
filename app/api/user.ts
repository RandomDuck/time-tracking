import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { User } from '../../app/models/User';
import { cookies } from 'next/headers';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = 'json/data.json';

  if (req.method === 'POST') {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;

    try {
      const reqData = JSON.parse(req.body);
    
      const { email, password } = reqData;
      const foundUser: User = users.find(
        (user: User) => user.email === email && user.password === password
      );

        cookies().set('user', foundUser.name)
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
