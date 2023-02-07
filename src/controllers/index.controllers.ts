import { Request, Response } from "express";
import { pool } from "../database/DB";

export const getCompany = async (req: Request, res: Response) => {
  const { rows } = await pool.query(`SELECT * FROM employees;`);
  res.json(rows);
};
