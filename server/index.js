const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nlvmf5l.mongodb.net/Databases?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected DB success");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.get("/", (req, res) => res.send("Hello world"));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
