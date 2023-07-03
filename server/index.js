const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://christopherle0902:Tamle2603@cluster0.nlvmf5l.mongodb.net/Databases?retryWrites=true&w=majority`,
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
connectDB();

app.get("/", (req, res) => res.send("Hello world"));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
