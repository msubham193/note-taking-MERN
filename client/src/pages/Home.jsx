import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { MdAdd } from "react-icons/md";
import Modall from "../components/Modall";
import axios from "axios";

const Home = () => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    
    axios
      .get("https://note-taking-react-js.herokuapp.com/api/notes")
      .then((data) => {
        setNotes(data.data.notes);
      })
      .catch((err) => {
        alert("Server did not respond");
      });
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="z-50 bg-cyan-600 p-2 font-bold shadow-md rounded-md md:text-xl text-white  flex fixed right-10 bottom-10  items-center gap-x-2"
        onClick={handleShow}
      >
        <span className="font-extrabold md:text-xl ">
          <MdAdd />{" "}
        </span>
        Add Note
      </button>{" "}
      <Modall show={show} setShow={setShow} setNotes={setNotes} />
      <div className="grid  sm:grid-cols-3  md:grid-cols-4 gap-x-2 gap-y-6 justify-items-center p-8 ">
        {notes.map((note) => (
          <NoteCard
            title={note.title}
            description={note.description}
            _id={note._id}
            key={note._id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
