interface Note {
  _id: string;
  title: string;
  content: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  notes: Note[];
}

const AllNotes = ({ notes }: Props) => {
  return (
    <div>
      {notes.map((note) => (
        <div>{note.title}</div>
      ))}
    </div>
  );
};

export default AllNotes;
