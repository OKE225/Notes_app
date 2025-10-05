import type Note from "../../types/note";
import HomeHeader from "../HomeHeader";
import NotesList from "../notes/NotesList";
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
      <NotesList notes={notes} />
    </main>
  );
};

export default HomeContent;
