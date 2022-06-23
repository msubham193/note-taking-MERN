import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditNote = () => {
  const id = useParams();

  const handleSubmit = () => {
    updateNotes();
  };
  const [isLoading, setLoading] = useState(false);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const updateNotes = async () => {
    setLoading(true);
    axios
      .put(`https://note-taking-react-js.herokuapp.com/api/note/${id.id}`, {
        title,
        description,
      })
      .then((data) => {
        setLoading(false);
        alert("Updated successfully !");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  };

  return (
    <div className=" flex items-center justify-center pt-20">
      <Form className="w-96">
        <h1>Edit Note</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note Description (maximum 10 character )</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            maxLength={10}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleSubmit : null}
        >
          {isLoading ? "Updating…." : "Save"}
        </Button>
      </Form>
    </div>
  );
};

export default EditNote;
