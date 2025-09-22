import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import type Note from "../types/note";
import { IoMdDownload } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useGoToHomePage } from "../hooks/useGoToHomePage.ts";

const NoteDetails = () => {
  const [note, setNote] = useState<Note>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(``);

  const { id } = useParams();
  const navigate = useNavigate();
  const goToHomePage = useGoToHomePage();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/note/${id}`);
        setNote(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error(`Error in fetching note ${error}`);
        toast.error("Failed to fetch the note");
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    try {
      await api.put(`/note/${id}`, { title, content });
      toast.success("Note updated successfully!", {
        duration: 2500,
      });
      navigate("/");
    } catch (error) {
      console.error(`Error updating note ${error}`);
      toast.error("Failed to update note");
    }
  };

  return (
    note && (
      <form
        onSubmit={handleSubmit}
        className="bg-stone-50 w-full h-screen flex flex-col">
        <div className="border-b-2 bg-stone-100 border-b-stone-200">
          <div className="flex justify-between w-[90%] mx-auto my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600  px-5 py-1 shadow-lg text-white cursor-pointer rounded-full flex items-center"
              // className="bg-blue-500 hover:bg-blue-100 hover:outline-2 hover:outline-blue-500 box-content px-5 py-1 shadow-lg text-white hover:text-blue-500 cursor-pointer rounded-full flex items-center"
              onClick={goToHomePage}>
              <IoMdArrowRoundBack className="mr-1" /> BACK
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-5 py-1 shadow-lg text-white rounded-full cursor-pointer flex items-center">
              <IoMdDownload className="mr-1" /> SAVE
            </button>
          </div>
        </div>

        <input
          type="text"
          className="p-5 w-full text-5xl font-light focus-visible:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="px-5 w-full resize-none h-[100%] text-md focus-visible:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          cols={100}
        />
      </form>
    )
  );
};

export default NoteDetails;
