import React, { useState } from "react";
import "./modal.css";
import axios from "axios";

const Modal = ({ modal, setModal }) => {
  const [newPassword, setNewPassword] = useState({
    title: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/add", newPassword);
      setModal(!modal);
      setNewPassword({ title: "", username: "", password: "" });
      console.log(response);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  const closeModal = () => {
    setModal(!modal);
    setNewPassword({ title: "", username: "", password: "" });
  };

  return (
    <div className="modal__container">
      <div className="modal__header">
        <h3>Add More Passwords</h3>
        <i className="fas fa-times" onClick={closeModal}></i>
      </div>
      <div className="modal__body">
        <form className="form__control" onSubmit={handleSubmit}>
          <input
            name="title"
            className="modal__input"
            type="text"
            placeholder="Title"
            value={newPassword.title}
            onChange={handleChange}
          />
          <input
            name="username"
            className="modal__input"
            type="text"
            value={newPassword.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="password"
            className="modal__input"
            type="password"
            value={newPassword.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="add__password" type="submit">
            Add Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
