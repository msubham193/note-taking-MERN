import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import axios from "axios";

const NoteCard = ({ title, description, _id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteNotes();
    alert(`Note ${title} deleted`);
    window.location.reload();
  };

  const deleteNotes = () => {
    axios.delete(`https://note-taking-react-js.herokuapp.com/api/note/${_id}`).then(() => {});
  };

  return (
    <div className="relative h-64 w-48 shadow-xl p-4 hover:scale-105 ease-out duration-300 bg-sky-50 ">
      <Link to={`/note/${_id}`} className="text-inherit no-underline">
        <div>
          {" "}
          <h1 className="font-bold text-xl ">{title}</h1>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </Link>

      <Link to={`/note/${_id}`} className="text-inherit no-underline">
        <button className="absolute left-4 bottom-4 bg-green-600 p-1 rounded-md items-center">
          <MdOutlineModeEditOutline className="text-white text-xl" />
        </button>
      </Link>
      <button
        className="absolute right-4 bottom-4 bg-red-400 p-1 rounded-md items-center"
        onClick={handleDelete}
      >
        <MdDeleteOutline className="text-white text-xl" />
      </button>
    </div>
  );
};

export default NoteCard;
