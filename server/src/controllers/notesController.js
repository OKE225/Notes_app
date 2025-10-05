import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ updatedAt: -1 });
    const notesCount = notes.length;
    res.status(200).json({ count: notesCount, notes });
  } catch (error) {
    console.error(`Error in getAllNotes controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addNote = async (req, res) => {
  try {
    const { title, content, favorite } = req.body;
    const note = new Note({ title, content, favorite });
    const savedNote = note.save();

    res.json({ savedNote });
  } catch (error) {
    console.error(`Error in addNote controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    console.error(`Error in getNoteById controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content, favorite } = req.body;
    const updateNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
      favorite,
    });

    res.json(updateNote);
  } catch (error) {
    console.error(`Error in updateNote controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
