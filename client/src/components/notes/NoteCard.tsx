import type Note from "../../types/note";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <div className="bg-blue-500 hover:bg-blue-600 shadow-lg p-4 rounded-lg cursor-pointer text-white font-light">
      <h1 className="text-3xl mb-2">{note.title}</h1>
      <p className="text-md">{note.content}</p>
    </div>
  );
};

export default NoteCard;
