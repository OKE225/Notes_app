import type Note from "../../types/note";
import AddNoteCard from "./AddNoteCard";
import NoteCard from "./NoteCard";

interface Props {
  notes: Note[];
}

const AllNotes = ({ notes }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full py-10">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
      <AddNoteCard />
    </div>
  );
};

export default AllNotes;
