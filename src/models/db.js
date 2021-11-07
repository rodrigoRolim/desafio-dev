import { Pool } from "pg";

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
});

export default {
  async query(text, params) {
    return await pool.query(text, params)
  }
};