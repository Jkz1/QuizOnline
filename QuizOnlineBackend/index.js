require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const bankSoalRouter = require("./routes/BankSoal");
const quizModel = require("./models/quizModel");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to QuizOnline Backend!");
});

app.listen(port, () => {
  console.log(`QuizOnline Backend is running at http://localhost:${port}`);
});

mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => {
    console.log("MongoDB connected...")
  })
  .catch((err) => console.log(err));

app.use("/bankSoal", bankSoalRouter);
