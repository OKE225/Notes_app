import { useState } from "react";
import { useGoToHomePage } from "../hooks/useGoToHomePage";
import { IoMdDownload } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axios";
import type Note from "../types/note";

interface Props {
  method: "add" | "edit";
  idNote?: string | undefined;
  note?: Note | undefined;
}

const NoteForm = ({ method, idNote, note }: Props) => {
  const [title, setTitle] = useState<string>(note ? note.title : "");
  const [content, setContent] = useState<string>(note ? note.content : ``);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    note ? note.favorite : false
  );

  const navigate = useNavigate();

  const goToHomePage = useGoToHomePage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required", { duration: 2500 });
      return;
    }

    try {
      if (method === "add") {
        await api.post("/add", { title, content, favorite: isFavorite });
        toast.success("Note added successfully!", {
          icon: "📄",
          duration: 2500,
        });
      } else if (method === "edit") {
        await api.put(`/note/${idNote}`, {
          title,
          content,
          favorite: isFavorite,
        });
        toast.success("Note updated successfully!", {
          icon: "📄",
          duration: 2500,
        });
      }

      navigate("/");
    } catch (error) {
      console.error(`Error: ${error}`);
      toast.error("Failed", { duration: 2500 });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-50 w-full h-screen flex flex-row-reverse dark:bg-stone-950">
      <div className="h-screen w-[100%] flex flex-col items-start">
        <div className="m-2.5 mt-5 max-lg:mt-1">
          <input
            type="checkbox"
            name="favorite"
            id="favorite"
            checked={isFavorite}
            onChange={(e) => setIsFavorite(e.target.checked)}
          />
          <label
            htmlFor="favorite"
            className="ml-2 text-stone-800 dark:text-stone-200">
            Add to favorite
          </label>
        </div>
        <input
          type="text"
          className="px-2.5 w-full text-5xl font-light focus-visible:outline-none max-lg:text-4xl text-stone-950 dark:text-stone-50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="px-2.5 w-full resize-none h-[100%] text-md focus-visible:outline-none text-stone-950 dark:text-stone-50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          cols={100}
        />
      </div>

      <aside className="border-r-2 bg-stone-100 border-r-stone-200 dark:bg-stone-900 dark:border-r-stone-800">
        <div className="flex flex-col items-center justify-between w-[130px] max-lg:w-[65px] h-screen py-5">
          <button
            className="bg-slate-500 hover:bg-slate-600 px-5 py-1 shadow-lg text-white cursor-pointer rounded-full flex items-center max-lg:text-xl max-lg:p-2 dark:bg-slate-700 dark:hover:bg-slate-800"
            onClick={goToHomePage}>
            <IoMdArrowRoundBack className="-ml-1 mr-1 text-md max-lg:m-0" />{" "}
            <span className="max-lg:hidden">Back</span>
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-5 py-1 shadow-lg text-white rounded-full cursor-pointer flex items-center max-lg:text-xl max-lg:p-2 dark:bg-green-600 dark:hover:bg-green-700">
            <IoMdDownload className="-ml-1 mr-1 text-md max-lg:m-0" />{" "}
            <span className="max-lg:hidden">Save</span>
          </button>
        </div>
      </aside>
    </form>
  );
};

export default NoteForm;
