import AddNote from "./pages/AddNote";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNote />} />
    </Routes>
  );
};

export default App;
