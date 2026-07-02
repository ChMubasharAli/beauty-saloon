import { defineConfig } from "prisma/config";
import { config } from "dotenv";

// 1. Sab se pehle .env file ko load karein
config({ path: ".env" });

// 2. Variables ko read karein
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_DATABASE;

// 3. Ek single connection string banayein
const finalUrl = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?sslaccept=strict`;

console.log("Final Url is this", finalUrl);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: finalUrl,
  },
});
