import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

const HomeSidebar = () => {
  return (
    <aside className="min-w-[100px] w-[6%] h-screen border-r-2 bg-stone-100 border-r-stone-200 text-center py-15 flex justify-center items-start">
      <Link
        to="/addNote"
        className="bg-slate-500 hover:bg-slate-600 text-white p-1 cursor-pointer rounded-full flex justify-center shadow-lg">
        <IoIosAdd size={32} />
      </Link>
    </aside>
  );
};

export default HomeSidebar;
