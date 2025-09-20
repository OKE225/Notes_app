const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDatabase } = require("./config/database");

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/api", notesRoutes);

app.listen(PORT, "localhost");
