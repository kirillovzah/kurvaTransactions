import {useState} from 'react';

const AddModal = ({onCloseModal, onSubmit}) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [adressInput, setAdressInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  //31:22

  const handleNameChange = e => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = e => {
    setEmailInput(e.target.value);
  };

  const handleAdressChange = e => {
    setAdressInput(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhoneInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      name: nameInput,
      email: emailInput,
      address: adressInput,
      phone: phoneInput,
    });

    onCloseModal();
  };

  return (
    <div className='content'>
      <form onSubmit={handleSubmit}>
        <div className='modal-header'>
          <h4 className='modal-title'>Add Employee</h4>
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
          <div className='form-group'>
            <label>Name</label>
            <input
              value={nameInput}
              type='text'
              className='form-control'
              required
              onChange={handleNameChange}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              value={emailInput}
              type='email'
              className='form-control'
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <textarea
              value={adressInput}
              className='form-control'
              required
              onChange={handleAdressChange}></textarea>
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input
              value={phoneInput}
              type='text'
              className='form-control'
              required
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className='modal-footer'>
          <input
            onClick={onCloseModal}
            type='button'
            className='btn btn-default'
            value='Cancel'
          />
          <input type='submit' className='btn btn-success' value='Add' />
        </div>
      </form>
    </div>
  );
};

export default AddModal;
