import './AddModal.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div onClick={props.onCloseModal} className='backdrop' />;
};

const ModalOverlay = props => {
  return <div className='myModal'>{props.children}</div>;
};

const portalElement = document.getElementById('modal');

const Modal = ({onCloseModal, children}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseModal={onCloseModal}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
