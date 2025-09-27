import { Link } from "react-router-dom";
import type Note from "../../types/note";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="bg-blue-500 hover:bg-blue-600 min-h-[175px] shadow-lg p-4 rounded-lg cursor-pointer text-white font-light overflow-hidden">
      <h1 className="text-3xl pb-1 line-clamp-2">{note.title}</h1>
      <p className="text-md mt-1 line-clamp-4">{note.content}</p>
    </Link>
  );
};

export default NoteCard;
