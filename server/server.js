const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Server" });
});

app.listen(PORT, "localhost");
