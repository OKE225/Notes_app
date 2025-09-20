import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axios.ts";

const AddNote = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(``);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Title and content are required");
      return;
    }

    try {
      await api.post("/addNote", { title, content });
      toast.success("Note added successfully!");
      navigate("/");
    } catch (error) {
      console.error(`Error adding note ${error}`);
      toast.error("Failed to add note");
    }
  };

  return (
    <div className="bg-stone-50 w-full h-screen p-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="border px-1"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          cols={100}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddNote;
