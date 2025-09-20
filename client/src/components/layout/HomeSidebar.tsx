import { Link } from "react-router-dom";

const HomeSidebar = () => {
  return (
    <aside className="min-w-[120px] w-[6%] h-screen border-r-2 bg-stone-100 border-r-stone-200 text-center py-10">
      <Link
        to="/addNote"
        className="bg-slate-500 hover:bg-slate-600 text-white px-5 py-1 cursor-pointer rounded-full">
        +
      </Link>
    </aside>
  );
};

export default HomeSidebar;
