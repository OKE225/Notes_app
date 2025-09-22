import AddNote from "./pages/AddNote";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import NoteDetails from "./pages/NoteDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="/note/:id" element={<NoteDetails />} />
    </Routes>
  );
};

export default App;
