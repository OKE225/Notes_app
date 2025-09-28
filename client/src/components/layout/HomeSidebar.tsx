import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const HomeSidebar = () => {
  return (
    <aside className="w-[100px] min-h-screen border-r-2 bg-stone-100 border-r-stone-200 text-center py-10 flex flex-col items-center">
      <Link
        to="/add"
        className="bg-blue-500 hover:bg-blue-600 text-white p-1 cursor-pointer rounded-full flex justify-center shadow-lg">
        <IoIosAdd className="text-3xl" />
      </Link>
    </aside>
  );
};

export default HomeSidebar;
