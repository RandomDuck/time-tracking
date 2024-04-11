import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';


export interface User {
  name: string,
  password: string,
  id: string,
  email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const filePath = 'json/data.json';

  if (req.method === 'POST') {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;
    const reqData = JSON.parse(req.body);
    const { email, password } = reqData;

    const foundUser = users.find((user: User) => user.email === email && user.password === password);

    res.status(200).json(foundUser);

  } else {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);
    const users = parsedData.users;
    const id = req.query.id;
    const foundUser = users.find((user: User) => user.id === id);

    res.status(200).json({
      "hek": 1
    });

    res.status(200).json({
      name: foundUser.name,
      password: foundUser.password,
      id: foundUser.id,
      email: foundUser.email
    });
  }
}
