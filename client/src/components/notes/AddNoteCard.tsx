import { Link } from "react-router-dom";

const AddNoteCard = () => {
  return (
    <Link
      to="/addNote"
      className="bg-stone-200 hover:bg-stone-300 shadow-lg p-5 rounded-lg cursor-pointer flex content-center justify-center items-center">
      <p className="font-light">Add note</p>
    </Link>
  );
};

export default AddNoteCard;
