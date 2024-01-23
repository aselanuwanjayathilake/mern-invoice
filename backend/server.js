import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api/v1/test", (req, res) => {
  res.json({ hi: "hello" });
});

const PORT = process.env.PORT || 1993;

app.listen(PORT, () => {
  console.log(`${chalk.green.bold("app is running")}`);
});
