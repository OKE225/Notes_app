const express = require("express");
const {
  getAllNotes,
  addNote,
  getNoteById,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getAllNotes);
router.post("/add", addNote);
router.get("/note/:id", getNoteById);
router.put("/note/:id", updateNote);
// router.delete("/note/:id");

module.exports = router;
