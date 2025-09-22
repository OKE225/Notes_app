import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const AddNoteCard = () => {
  return (
    <Link
      to="/add"
      className="bg-stone-200 hover:bg-stone-300 shadow-lg p-5 rounded-lg cursor-pointer flex content-center justify-center items-center">
      <p className="font-light flex items-center">
        <IoIosAdd size={18} /> Add Note
      </p>
    </Link>
  );
};

export default AddNoteCard;
