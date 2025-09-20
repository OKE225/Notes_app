import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(`Error in getAllNotes controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addNote = async (req, res) => {
  try {
  } catch (error) {
    console.error(`Error in addNote controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
