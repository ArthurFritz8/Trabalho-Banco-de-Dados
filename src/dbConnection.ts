import knex from "knex";
import * as dotenv from "dotenv";
dotenv.config();

const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

if (!DB_CLIENT || !DB_HOST || !DB_USER || !DB_PASSWORD || !DB_DATABASE || !DB_PORT) {
  throw new Error("Variáveis de ambiente do banco de dados não configuradas.");
}

export const connection = knex({
   client: DB_CLIENT,
   connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      port: Number(DB_PORT)
   }
});
