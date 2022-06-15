import React from 'react';
import Modal from 'react-modal';
import './style.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  },
};

Modal.setAppElement('#root');

function MyModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container-modal">
      <button className='botao' onClick={openModal}>{props.name}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">

          <h2 className="title">{props.title}</h2>
          <button className="btn-close" onClick={closeModal}>X</button>
        </div>
        <div className="modal-content" >{props.content}</div>
        <img src={props.ImgUrl}></img>
      </Modal>
    </div>
  );
}
export default MyModal