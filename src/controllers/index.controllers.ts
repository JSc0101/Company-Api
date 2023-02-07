import { query, Request, Response } from "express";
import { pool } from "../database/DB";

export const getCompany = async (req: Request, res: Response) => {
  const { rows } = await pool.query(`SELECT * FROM employees;`);
  res.json(rows);
};

export const saveCompany = async (req: Request, res: Response) => {
  const { name, lastname, age, rol, photo, description, email } = req.body;
  const consult = `INSERT INTO employees(name,lastname,age, rol, photo, description, email) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
  const values = [name, lastname, age, rol, photo, description, email];
  const response = await pool.query(consult, values);
  console.log(response);
  res.json({
    "save succesfuly": "User saving succesfuly",
  });
};
