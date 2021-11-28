import React from "react";
import reactDom from "react-dom";
import ReactDom from "react-dom";

import './Modal.css'

function Modal({children}) {
  return ReactDom.createPortal(
    <div className="modal-background">
      { children }
    </div>,
    document.getElementById('modal')
  );
}

export { Modal }
