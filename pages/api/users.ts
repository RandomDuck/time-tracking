import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from "@/lib/mongodb";
import Users from "@/lib/schemas/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    console.log("Connected to database");
    const users = await Users.find({});
    res.statusCode = 200;
    return res.json(users);
  } catch (error: any) {
    console.log(error);
    return res.json(error);
  }
}
