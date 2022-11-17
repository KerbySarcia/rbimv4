import React from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose} className="modal__close__btn">
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
