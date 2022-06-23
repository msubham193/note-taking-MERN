import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const Modall = ({ show, setShow, setNotes }) => {
  const handleSubmit = () => {
    setShow(false);

    createNotes();
  };

  const handleClose = () => setShow(false);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const createNotes = async () => {
    axios
      .post("https://note-taking-react-js.herokuapp.com/api/notes/new", { title, description })
      .then((data) => {
        setNotes(data.data.notes);
        window.location.reload();
      })
      .catch((err) => {
        alert("Similar title detected !");
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modall;
