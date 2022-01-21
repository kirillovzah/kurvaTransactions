const TableItem = ({
  name,
  email,
  adress,
  phone,
  onShowDeleteModal,
  onShowAddModal,
}) => {
  return (
    <tr>
      <td>
        <span className='custom-checkbox'>
          <input type='checkbox' id='checkbox1' name='options[]' value='1' />
          <label htmlFor='checkbox1'></label>
        </span>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{adress}</td>
      <td>{phone}</td>
      <td>
        <button onClick={onShowAddModal} className='edit'>
          <i className='material-icons' data-toggle='tooltip' title='Edit'>
            &#xE254;
          </i>
        </button>
        <button onClick={onShowDeleteModal} className='delete'>
          <i className='material-icons' data-toggle='tooltip' title='Delete'>
            &#xE872;
          </i>
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
