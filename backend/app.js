import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
``;
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
