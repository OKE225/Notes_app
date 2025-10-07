import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const AddNoteCard = () => {
  return (
    <Link
      to="/add"
      className="bg-stone-200 hover:bg-stone-300 min-h-[175px] shadow-lg p-5 rounded-lg cursor-pointer flex content-center justify-center items-center overflow-hidden text-stone-950 dark:text-stone-50 dark:bg-stone-900 dark:hover:bg-stone-800">
      <p className="font-light flex items-center text-xl">
        <IoIosAdd /> Add Note
      </p>
    </Link>
  );
};

export default AddNoteCard;
