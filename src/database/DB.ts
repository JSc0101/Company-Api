import { Pool } from "pg";
import config from "./db.config";

const pool = new Pool(config);
