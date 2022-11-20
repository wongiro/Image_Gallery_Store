import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const UploadForm = (props) => {
  const [post, setPost] = useState({
    title: props.post ? props.post.title : "",
    description: props.post ? props.post.description : "",
    date: props.post ? props.post.date : ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { title, description } = post;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, description];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const post = {
        id: uuidv4(),
        title,
        description,
        date: new Date(),
      };
      props.handleOnSubmit(post);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter title of post"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default UploadForm;
