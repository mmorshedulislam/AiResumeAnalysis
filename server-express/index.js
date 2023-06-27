const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const { PineconeStore } = require("langchain/vectorstores/pinecone");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { pinecone } = require("./utils/pinecone-client");
const {
  PINECONE_INDEX_NAME,
  PINECONE_NAME_SPACE,
} = require("./config/pinecone");
const { makeChain } = require("./utils/makechain");

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

app.post("/api/chat", async (req, res) => {
  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({
      message: "Please write your question",
    });
  }

  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");
  try {
    const index = pinecone.Index(PINECONE_INDEX_NAME);

    // create vector store
    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: "text",
        namespace: PINECONE_NAME_SPACE,
      }
    );

    // create chain
    const chain = makeChain(vectorStore);

    //Ask a question using chat history
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    console.log(response);
    res.status(200).json({
      response,
    });
  } catch (error) {
    console.log(error.message);
  }
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
