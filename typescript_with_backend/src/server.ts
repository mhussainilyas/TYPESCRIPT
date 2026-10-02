import express from "express";
import { dbConnect } from "./config/db_connection.ts";
import type { Express, Application } from "express";
import dotenv from "dotenv";
import router from "./routes/todoRoutes.ts";
import cors from "cors";

dotenv.config();
dbConnect();

// const app: Express = express();
const app: Application = express();
const PORT = process.env.PORT!;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
