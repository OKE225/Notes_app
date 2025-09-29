import { CiStickyNote } from "react-icons/ci";

interface Props {
  notesCount: number;
}

const NotesCounter = ({ notesCount }: Props) => {
  return (
    <div className="flex items-center">
      <CiStickyNote className="mr-0.5 text-xl" />
      <span className="text-xl font-light">{notesCount} notes</span>
    </div>
  );
};

export default NotesCounter;
