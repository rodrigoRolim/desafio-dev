import { Pool } from "pg";
import dotenv from 'dotenv';

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.NAME_DB,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB
});

export default {
  async query(text, params) {
    return await pool.query(text, params)
  }
};