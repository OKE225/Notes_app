import type Note from "../../types/note";
import AddNoteCard from "./AddNoteCard";
import NoteCard from "./NoteCard";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ notes, setNotes }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full py-10">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
      <AddNoteCard />
    </div>
  );
};

export default NotesList;
