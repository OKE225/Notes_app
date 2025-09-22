import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const HomeSidebar = () => {
  return (
    <aside className="min-w-[100px] w-[6%] h-screen border-r-2 bg-stone-100 border-r-stone-200 text-center py-10 flex justify-center items-start">
      <Link
        to="/addNote"
        className="bg-blue-500 hover:bg-blue-600 text-white p-1 cursor-pointer rounded-full flex justify-center shadow-lg">
        <IoIosAdd size={32} />
      </Link>
    </aside>
  );
};

export default HomeSidebar;
