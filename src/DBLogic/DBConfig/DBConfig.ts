import { Pool } from "pg";
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TimesheetDB",
  password: "Ssk@1207",
  port: 5432,
});

