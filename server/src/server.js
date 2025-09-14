const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDatabase } = require("./config/database");
const Note = require("./models/Note");

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(`Error in controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, "localhost");
