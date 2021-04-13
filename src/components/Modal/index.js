import React, { useState } from "react";

const Modal = (props) => {
  if (props.isOpen === false) return null;

  const close = (e) => {
    e.preventDefault();

    if (props.onClose) {
      props.onClose();
    }
  };
  return (
    <div>
      <div
        style={{
          zIndex: 9999,
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "250px",
          minHeight: "100px",
          padding: "15px",
          borderRadius: "10px",
          transform: "translate(-50%, -50%)",
          background: " #fff",
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          zIndex: 9998,
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.3)",
        }}
        onClick={(e) => close(e)}
      />
    </div>
  );
};

const ShowModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => openModal()}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <h3>Modal title</h3>
        <p>Content</p>
      </Modal>
    </div>
  );
};

export default ShowModal;
