import { FaTrash } from "react-icons/fa6";
import api from "../lib/axios";
import type Note from "../types/note";
import toast from "react-hot-toast";

interface Props {
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteDeleteBtn = ({ note, setNotes }: Props) => {
  const handleDeleteNote = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/${id}`);
      setNotes((prevState) => prevState.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error(`Error in handleDeleteNote ${error}`);
      toast.error("Failed to delete note");
    }
  };

  return (
    <button
      className="cursor-pointer p-2.5 rounded-full bg-red-500 absolute right-2 bottom-1 hover:bg-red-700"
      onClick={(e) => handleDeleteNote(e, note._id)}>
      <FaTrash className="text-lg" />
    </button>
  );
};

export default NoteDeleteBtn;
