import mongoose from 'mongoose';
import config from '@/config.json';

const { databaseUrl } = config;

if (!databaseUrl) throw new Error("MONGO_URL is not defined.");

declare global {
  var mongoose: { conn: any }
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(databaseUrl);

  return cached.conn;
};

export default dbConnect;
