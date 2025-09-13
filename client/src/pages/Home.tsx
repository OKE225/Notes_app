import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import toast from "react-hot-toast";
import NotesList from "../components/NotesList";

const Home = () => {
  const [notes, setNotes] = useState<string>();

  useEffect(() => {
    const fetchData = fetch("http://localhost:5001/api")
      .then((response) => response.json())
      .then((data) => data.message);

    toast
      .promise(fetchData, {
        loading: "Loading...",
        success: "Success!",
        error: "Failed to fetch notes",
      })
      .then((data) => setNotes(data))
      .catch((error) => console.error(error));
  }, []);

  const showNotesList = notes && <NotesList notes={notes} />;

  return (
    <div className="p-5">
      <HomeHeader />
      {showNotesList}
    </div>
  );
};

export default Home;
