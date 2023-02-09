import { Request, Response } from "express";
import { pool } from "../database/DB";

export const getCompany = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM employees;`);
    return res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Something goes wrong",
    });
  }
};

export const saveCompany = async (req: Request, res: Response) => {
  try {
    const { name, lastname, age, rol, photo, description, email } = req.body;
    const consult = `INSERT INTO employees(name,lastname,age, rol, photo, description, email) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
    const values = [name, lastname, age, rol, photo, description, email];
    await pool.query(consult, values);

    res.status(200).json({
      "save succesfuly": "User saving succesfuly",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something goes wrong",
    });
  }
};

export const userById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const consult = `SELECT * FROM employees WHERE id = $1`;
    const { rows } = await pool.query(consult, [id]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Something goes wrong",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, lastname, age, rol, photo, description, email } = req.body;
    const id = req.params.id;
    const consult = `UPDATE employees SET name = $1, lastname = $2, age = $3 , rol = $4 , photo = $5 , description = $6, email = $7 WHERE id = $8`;
    const values = [name, lastname, age, rol, photo, description, email, id];

    await pool.query(consult, values);

    res.json({
      "user update succesfuly": "update",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something goes wrong",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM employees WHERE id = $1", [id]);
    return res.json({
      user: "succesfuly delete",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something goes wrong",
    });
  }
};
