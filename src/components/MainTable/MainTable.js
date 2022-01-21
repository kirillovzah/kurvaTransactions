import TableItem from './TableItem';
import './MainTable.css';
import {DUMMY_DATA} from '../../DUMMY_DATA';

const Table = ({onShowDeleteModal, onShowAddModal}) => {
  return (
    <>
      <div className='buttons'>
        <button onClick={onShowAddModal} className={`btn btns btn-success`}>
          <i className='material-icons'>&#xE147;</i>
          <span>Add New Transaction</span>
        </button>
        <button onClick={onShowDeleteModal} className={`btn btns btn-danger`}>
          <i className='material-icons'>&#xE15C;</i> <span>Delete</span>
        </button>
      </div>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>
              <span className='custom-checkbox'>
                <input type='checkbox' id='selectAll' />
                <label htmlFor='selectAll'></label>
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
          {DUMMY_DATA.map(user => (
            <TableItem
              key={user.id}
              name={user.name}
              email={user.email}
              adress={user.adress}
              phone={user.phone}
              onShowDeleteModal={onShowDeleteModal}
              onShowAddModal={onShowAddModal}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
