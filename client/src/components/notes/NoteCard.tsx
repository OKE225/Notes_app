import { Link } from "react-router-dom";
import type Note from "../../types/note";
import { FaHeart } from "react-icons/fa6";
import NoteDeleteBtn from "../NoteDeleteBtn";

interface Props {
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteCard = ({ note, setNotes }: Props) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="bg-blue-500 hover:bg-blue-600 min-h-[175px] shadow-lg p-4 rounded-lg cursor-pointer text-stone-50 font-light overflow-hidden relative dark:bg-sky-600 dark:hover:bg-sky-800">
      <h1 className="text-2xl pb-2 line-clamp-1">{note.title}</h1>
      <p className="text-xl mt-1 line-clamp-2">{note.content}</p>
      {note.favorite && (
        <FaHeart className="text-xl absolute right-4 top-4 text-stone-50" />
      )}
      <NoteDeleteBtn note={note} setNotes={setNotes} />
    </Link>
  );
};

export default NoteCard;
