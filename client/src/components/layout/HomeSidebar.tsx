import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const HomeSidebar = () => {
  return (
    <aside className="w-[150px] max-lg:w-[75px] min-h-screen border-r-2 bg-stone-100 border-r-stone-200 text-center py-5 flex flex-col items-center">
      <Link
        to="/add"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 max-lg:px-1 cursor-pointer rounded-full flex items-center justify-center shadow-lg py-1">
        <IoIosAdd className="-ml-2 text-2xl max-lg:text-3xl max-lg:-ml-0" />{" "}
        <span className="max-lg:hidden">Add</span>
      </Link>
    </aside>
  );
};

export default HomeSidebar;
