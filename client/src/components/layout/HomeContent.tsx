import HomeHeader from "../HomeHeader";
import AllNotes from "../notes/AllNotes";

interface Note {
  _id: string;
  title: string;
  content: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  notes: Note[];
}

const HomeContent = ({ notes }: Props) => {
  return (
    <main className="w-full bg-stone-50 pl-10">
      <HomeHeader />
      <AllNotes notes={notes} />
    </main>
  );
};

export default HomeContent;
