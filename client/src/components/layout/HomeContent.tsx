import type Note from "../../types/note";
import HomeHeader from "../HomeHeader";
import NotesList from "../notes/NotesList";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const HomeContent = ({ notes, setNotes }: Props) => {
  return (
    <main className="w-full min-h-screen bg-stone-50 px-4 dark:bg-stone-950">
      <HomeHeader />
      <NotesList notes={notes} setNotes={setNotes} />
    </main>
  );
};

export default HomeContent;
