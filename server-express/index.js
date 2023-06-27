const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_DB;
try {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Mongodb connected");
    });
} catch (error) {
  console.log(error);
}

app.post("/api/chat", (req, res) => {
  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({
      message: "Please write your question",
    });
  }

  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  res.send({
    sanitizedQuestion,
    history,
  });
});

app.use((req, res, next) => {
  res.send({
    message: "Route not Found!",
  });
  next();
});

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
