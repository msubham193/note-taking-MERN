import "./App.css";
import NoteCard from "./components/NoteCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/note/:id" element={<EditNote/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
