const TableItem = ({
  id,
  name,
  email,
  address,
  phone,
  onShowDeleteModal,
  onShowEditModal,
  isChecked,
  users,
  setUsers,
}) => {
  const checkHandler = e => {
    let value = e.target.checked;
    setUsers(
      users.map(user => {
        if (user.id === id) {
          user.isChecked = value;
        }
        return user;
      })
    );
  };
  return (
    <tr>
      <td>
        <span className='custom-checkbox'>
          <input type='checkbox' checked={isChecked} onChange={checkHandler} />
        </span>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <button
          onClick={() => {
            onShowEditModal(id);
          }}
          className='edit'>
          <i className='material-icons' title='Edit'>
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => {
            onShowDeleteModal(id);
          }}
          className='delete'>
          <i className='material-icons' title='Delete'>
            &#xE872;
          </i>
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
