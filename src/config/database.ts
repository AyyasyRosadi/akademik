import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const db = new Sequelize(process.env.DB_DATABASE || "", process.env.DB_USER || "", process.env.DB_PASSWORD || "", {
    dialect: "mysql",
    host: process.env.DB_HOST,
    logging: true
})
export default db;
