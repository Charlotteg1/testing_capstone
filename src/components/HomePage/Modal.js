import React, { useState } from 'react';
import "./HomePage.css";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <>
    <button className="modal-toggle" onClick={()=>openModal()}>
      Open Modal
    </button>
      {isOpen && (
        <div className="modal" >
          <div className="modal-content">
            <p>hello</p>
            <span className="close" onClick={()=>closeModal()}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
