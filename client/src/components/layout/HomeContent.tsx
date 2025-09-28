import type Note from "../../types/note";
import HomeHeader from "../HomeHeader";
import ShowAllNotes from "../notes/ShowAllNotes";

interface Props {
  notes: Note[];
}

const HomeContent = ({ notes }: Props) => {
  return (
    <main className="w-full min-h-screen bg-stone-50 px-10">
      <HomeHeader />
      <ShowAllNotes notes={notes} />
    </main>
  );
};

export default HomeContent;
