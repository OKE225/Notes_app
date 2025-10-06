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
      className="bg-stone-50 w-full h-screen flex flex-row-reverse">
      <div className="h-screen w-[100%] flex flex-col items-start">
        <div className="m-2.5 mt-5">
          <input
            type="checkbox"
            name="favorite"
            id="favorite"
            checked={isFavorite}
            onChange={(e) => setIsFavorite(e.target.checked)}
          />
          <label htmlFor="favorite" className="ml-2 text-stone-800">
            Add to favorite
          </label>
        </div>
        <input
          type="text"
          className="px-2.5 w-full text-5xl font-light focus-visible:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="px-2.5 w-full resize-none h-[100%] text-md focus-visible:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          cols={100}
        />
      </div>

      <aside className="border-r-2 bg-stone-100 border-r-stone-200">
        <div className="flex flex-col items-center justify-between w-[125px] h-screen py-5">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-5 py-1 shadow-lg text-white cursor-pointer rounded-full flex items-center"
            onClick={goToHomePage}>
            <IoMdArrowRoundBack className="-ml-1 mr-1 text-md" /> Back
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-5 py-1 shadow-lg text-white rounded-full cursor-pointer flex items-center">
            <IoMdDownload className="-ml-1 mr-1 text-md" /> Save
          </button>
        </div>
      </aside>
    </form>
  );
};

export default NoteForm;
