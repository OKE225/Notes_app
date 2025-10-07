import type Note from "../../types/note";
import AddNoteCard from "./AddNoteCard";
import NoteCard from "./NoteCard";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ notes, setNotes }: Props) => {
  return (
    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 w-full py-10 max-w-[2000px] max-lg:py-5 max-lg:gap-2">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
      <AddNoteCard />
    </div>
  );
};

export default NotesList;
