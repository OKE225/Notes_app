import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HomeContent from "../components/layout/HomeContent";
import HomeSidebar from "../components/layout/HomeSidebar";
import type Note from "../types/note";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotesPromise = async () => {
      const response = await fetch("http://localhost:5001/api");

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      return response.json();
    };

    toast
      .promise(fetchNotesPromise(), {
        loading: "Loading notes...",
        success: "Notes loaded successfully!",
        error: "Failed to loaded notes",
      })
      .then((data) => setNotes(data))
      .catch((error) => {
        console.error(`Error fetching notes: ${error}`);
        setNotes([]);
      });
  }, []);

  return (
    <div className="flex flex-row-reverse justify-end">
      <HomeContent notes={notes} />
      <HomeSidebar />
      {/* {notes && <AllNotes notes={notes} />} */}
    </div>
  );
};

export default Home;
