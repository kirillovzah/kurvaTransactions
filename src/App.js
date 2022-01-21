import {useState} from 'react';
import Card from './components/UI/Card';
import Header from './components/Header/Header';
import MainTable from './components/MainTable/MainTable';
import Modal from './components/UI/Modal';
import AddModal from './components/UI/AddModal';
import DeleteModal from './components/UI/DeleteModal';

const App = () => {
  const [addModalIsShown, setAddModalIsShown] = useState(false);
  const [deleteModalIsShown, setDeleteModalIsShown] = useState(false);

  const showAddModalHandler = () => {
    setAddModalIsShown(true);
  };

  const closeAddModalHandler = () => {
    setAddModalIsShown(false);
  };

  const showDeleteModalHandler = () => {
    setDeleteModalIsShown(true);
  };

  const closeDeleteModalHandler = () => {
    setDeleteModalIsShown(false);
  };

  return (
    <Card>
      {addModalIsShown && (
        <Modal onCloseModal={closeAddModalHandler}>
          <AddModal valueType={'Add'} onCloseModal={closeAddModalHandler} />
        </Modal>
      )}
      {deleteModalIsShown && (
        <Modal onCloseModal={closeDeleteModalHandler}>
          <DeleteModal onCloseModal={closeDeleteModalHandler} />
        </Modal>
      )}
      <Header />
      <MainTable
        onShowDeleteModal={showDeleteModalHandler}
        onShowAddModal={showAddModalHandler}
      />
    </Card>
  );
};

export default App;
