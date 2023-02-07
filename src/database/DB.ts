import { Pool } from "pg";
import config from "./db.config";

export const pool = new Pool(config);
