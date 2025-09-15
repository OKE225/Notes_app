import type Note from "../../types/note";

interface Props {
  notes: Note[];
}

const AllNotes = ({ notes }: Props) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>{note.title}</div>
      ))}
    </div>
  );
};

export default AllNotes;
