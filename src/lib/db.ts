import { createClient } from '@libsql/client';

const DB_URL = process.env.DATABASE_URL;
const AUTH_TOKEN = process.env.DATABASE_TOKEN;

if (!DB_URL || !AUTH_TOKEN) {
  console.log({ DB_URL, AUTH_TOKEN });
  throw new Error('Define DATABASE_URL y DATABASE_TOKEN en el entorno.');
}

export const db = createClient({
  url: DB_URL,
  authToken: AUTH_TOKEN
});
