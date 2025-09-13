interface Props {
  notes: string;
}

const NotesList = ({ notes }: Props) => {
  return <p className="text-xl font-bold">{notes}</p>;
};

export default NotesList;
