import React from "react";
import "./modal.css";

const Modal = ({ modal, setModal }) => {
  return (
    <div className="modal__container">
      <div className="modal__header">
        <h3>Add More Passwords</h3>
        <i className="fas fa-times" onClick={() => setModal(!modal)}></i>
      </div>
      <div className="modal__body">
        <form className="form__control">
          <input className="modal__input" type="text" placeholder="Title" />
          <input className="modal__input" type="text" placeholder="Username" />
          <input
            className="modal__input"
            type="password"
            placeholder="Password"
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
