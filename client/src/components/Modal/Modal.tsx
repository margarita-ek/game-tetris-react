import React from "react";

interface ModalProps {
  level: number
  rows: number
  score: number
  buttonClick?: any
};

const Modal = (props: ModalProps) => {
  const {buttonClick, level, rows, score} = props;
  return(
    <div className="ModalWrapper">
      <div className="ModalWindow">
        <div className="ModalBody">{`Level: ${level}`}</div>
        <div className="ModalBody">{`Rows: ${rows}`}</div>
        <div className="ModalBody">{`Score: ${score}`}</div>
        <button onClick={buttonClick}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;