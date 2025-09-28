import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomeContent from "../components/layout/HomeContent";
import HomeSidebar from "../components/layout/HomeSidebar";
import type Note from "../types/note";

const HomePage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [notesCount, setNotesCount] = useState<number>(0);

  useEffect(() => {
    const fetchNotesPromise = async () => {
      const response = await fetch("http://localhost:5001/api");

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      return response.json();
    };

    toast
      .promise(
        fetchNotesPromise(),
        {
          loading: "Loading notes...",
          success: "Notes loaded successfully!",
          error: "Failed to loaded notes",
        },
        {
          duration: 2500,
        }
      )
      .then((data) => {
        setNotes(data.notes);
        setNotesCount(data.count);
      })
      .catch((error) => {
        console.error(`Error fetching notes: ${error}`);
        setNotes([]);
      });
  }, []);

  return (
    <div className="flex w-full min-h-screen flex-row-reverse justify-end">
      <HomeContent notes={notes} notesCount={notesCount} />
      <HomeSidebar />
    </div>
  );
};

export default HomePage;
