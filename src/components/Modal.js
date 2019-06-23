import React from 'react';

const Modal = props => {
  const { result: { title, option, msg }, modal, closeModal } = props;

  return (
    <div onClick={closeModal} className="modal" style={{display: modal ? 'block' : ''}}>
    <div className="modal-content">
      <h1 className={`text-${option}`}>{title}</h1>
      <i className={`fas fa-hand-${msg} fa-10x`}></i>
      <p>Computer Chose <strong>{msg.charAt(0).toUpperCase() + msg.slice(1)}</strong></p>
    </div>
  </div>
  )
}

export default Modal;
