const DeleteModal = ({onCloseModal}) => {
  return (
    <div className='content'>
      <form>
        <div className='modal-header'>
          <h4 className='modal-title'>Delete Employee</h4>
          <button
            onClick={onCloseModal}
            type='button'
            className='close'
            data-dismiss='modal'
            aria-hidden='true'>
            &times;
          </button>
        </div>
        <div className='modal-body'>
          <p>Are you sure you want to delete these Records?</p>
          <p className='text-warning'>
            <small>This action cannot be undone.</small>
          </p>
        </div>
        <div className='modal-footer'>
          <input
            onClick={onCloseModal}
            type='button'
            className='btn btn-default'
            data-dismiss='modal'
            value='Cancel'
          />
          <input type='submit' className='btn btn-danger' value='Delete' />
        </div>
      </form>
    </div>
  );
};

export default DeleteModal;
