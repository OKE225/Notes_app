import type Note from "../../types/note";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <div className="bg-slate-500 hover:bg-slate-600 shadow-lg p-5 rounded-lg cursor-pointer text-white font-light">
      <h1 className="text-3xl mb-5">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
