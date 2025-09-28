import type Note from "../../types/note";
import HomeHeader from "../HomeHeader";
import ShowAllNotes from "../notes/ShowAllNotes";
import NotesCounter from "../NotesCounter";

interface Props {
  notes: Note[];
  notesCount: number;
}

const HomeContent = ({ notes, notesCount }: Props) => {
  return (
    <main className="w-full min-h-screen bg-stone-50 px-10">
      <HomeHeader />
      <NotesCounter notesCount={notesCount} />
      <ShowAllNotes notes={notes} />
    </main>
  );
};

export default HomeContent;
