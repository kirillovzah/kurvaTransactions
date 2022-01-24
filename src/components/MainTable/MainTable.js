import {useState, useEffect} from 'react';
import axios from 'axios';
import TableItem from './TableItem';
import './MainTable.css';
import Modal from '../UI/Modal';
import AddModal from '../UI/AddModal';
import DeleteModal from '../UI/DeleteModal';
import EditModal from '../UI/EditModal';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [addModalIsShown, setAddModalIsShown] = useState(false);
  const [deleteModalIsShown, setDeleteModalIsShown] = useState(false);
  const [deleteSelected, setDeleteSelected] = useState('');
  const [editModalIsShown, setEditModalIsShown] = useState(false);
  const [editSelected, setEditSelected] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        let users = data.data.map(user => {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            address: `${user.address.suite} ${user.address.street}, ${user.address.city}`,
            phone: user.phone.slice(0, 12),
            isChecked: false,
          };
        });

        setUsers(users);
      })
      .catch(err => alert(err));
  };

  const showEditModalHandler = id => {
    setEditModalIsShown(true);
    setEditSelected(id);
  };

  const closeEditModalHandler = () => {
    setEditModalIsShown(false);
  };

  const showAddModalHandler = () => {
    setAddModalIsShown(true);
  };

  const closeAddModalHandler = () => {
    setAddModalIsShown(false);
  };

  const showDeleteModalHandler = id => {
    setDeleteSelected(id);
    setDeleteModalIsShown(true);
  };

  const closeDeleteModalHandler = () => {
    setDeleteModalIsShown(false);
  };

  const addUserHandler = user => {
    const newUsers = [user, ...users];

    setUsers(newUsers);

    console.log(newUsers);
  };

  const removeUserHandler = id => {
    const removedArr = users.filter(user => user.id !== id);
    setUsers(removedArr);
  };

  const editUserHandler = (id, newValue) => {
    setUsers(prev => prev.map(user => (user.id === id ? newValue : user)));
  };

  const checkUserHandler = e => {
    let value = e.target.checked;
    setUsers(
      users.map(user => {
        user.isChecked = value;
        return user;
      })
    );
  };

  const deleteCheckedUsers = () => {
    const checkedUsers = users.filter(user => !user.isChecked);
    setUsers(checkedUsers);
    // users.forEach(d => {
    //   if (d.isChecked) {
    //     axios
    //       .delete(`https://jsonplaceholder.typicode.com/users/${d.id}`)
    //       .then(data => {
    //         console.log(data);
    //         getUsers();
    //       })
    //       .catch(err => alert(err));
    //     console.log(d.id);
    //   }
    // });
  };

  return (
    <>
      {editModalIsShown && (
        <Modal onCloseModal={closeEditModalHandler}>
          <EditModal
            id={editSelected}
            users={users}
            onSubmit={editUserHandler}
            onCloseModal={closeEditModalHandler}
          />
        </Modal>
      )}
      {addModalIsShown && (
        <Modal onCloseModal={closeAddModalHandler}>
          <AddModal
            onSubmit={addUserHandler}
            onCloseModal={closeAddModalHandler}
          />
        </Modal>
      )}
      {deleteModalIsShown && (
        <Modal onCloseModal={closeDeleteModalHandler}>
          <DeleteModal
            id={deleteSelected}
            deleteChecked={deleteCheckedUsers}
            removeUser={removeUserHandler}
            onCloseModal={closeDeleteModalHandler}
          />
        </Modal>
      )}
      <div className='buttons'>
        <button
          onClick={showAddModalHandler}
          className={`btn btns btn-success`}>
          <i className='material-icons'>&#xE147;</i>
          <span>Add New Transaction</span>
        </button>
        <button
          onClick={showDeleteModalHandler}
          className={`btn btns btn-danger`}>
          <i className='material-icons'>&#xE15C;</i> <span>Delete</span>
        </button>
      </div>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>
              <span className='custom-checkbox'>
                <input
                  type='checkbox'
                  checked={
                    users.length === 0
                      ? false
                      : !users.some(user => !user.isChecked)
                  }
                  onChange={checkUserHandler}
                />
              </span>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableItem
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              phone={user.phone}
              onShowDeleteModal={showDeleteModalHandler}
              onShowEditModal={showEditModalHandler}
              users={users}
              setUsers={setUsers}
              isChecked={user.isChecked}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
