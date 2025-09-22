const express = require("express");
const { getAllNotes, addNote } = require("../controllers/notesController");

const router = express.Router();

router.get("/", getAllNotes);
router.post("/add", addNote);
// router.get("/:id");
// router.put("/:id");

module.exports = router;
