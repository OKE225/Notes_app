import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddNotePage />} />
      <Route path="/note/:id" element={<NoteDetailsPage />} />
    </Routes>
  );
};

export default App;
